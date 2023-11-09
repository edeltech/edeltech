import {
  Architecture,
  CodeBuildRunnerImageBuilder,
  CodeBuildRunnerProvider,
  GitHubRunners,
  RunnerImageComponent,
  RunnerVersion
} from '@cloudsnorkel/cdk-github-runners'
import {Construct} from 'constructs'
import {Duration, Stack, StackProps} from 'aws-cdk-lib'
import {Effect, OpenIdConnectProvider, PolicyStatement, Role, WebIdentityPrincipal} from 'aws-cdk-lib/aws-iam'

export class GithubRunnerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    
    const imageBuilder = new CodeBuildRunnerImageBuilder(this, '56kcloudWebsiteCodeBuildRunnerImageBuilder', {
      architecture: Architecture.ARM64,
      components: [
        RunnerImageComponent.requiredPackages(),
        RunnerImageComponent.runnerUser(),
        RunnerImageComponent.git(),
        RunnerImageComponent.githubCli(),
        RunnerImageComponent.awsCli(),
        RunnerImageComponent.docker(),
        RunnerImageComponent.githubRunner(RunnerVersion.latest())
      ]
    })
    const codeBuildRunner = new CodeBuildRunnerProvider(this, '56kcloudWebsiteCodeBuildRunnerProvider',{
      imageBuilder,
      labels: ['56kcloud-website-codebuild']
    })

    new GitHubRunners(this, 'runners', {
      providers: [codeBuildRunner]
    })

    // const githubProvider = new OpenIdConnectProvider(this, '56kcloudWebsiteOpenIdConnectProvider', {
    //   clientIds: ['sts.amazonaws.com'],
    //   url: 'https://token.actions.githubusercontent.com'
    // })

    const githubProvider = OpenIdConnectProvider.fromOpenIdConnectProviderArn(this,
      '56kcloudWebsiteOpenIdConnectProvider',
      `arn:aws:iam::${this.account}:oidc-provider/token.actions.githubusercontent.com`
    )

    const role = new Role(this, '56kcloudWebsiteGithubRole', {
      assumedBy: new WebIdentityPrincipal(githubProvider.openIdConnectProviderArn, {
        'StringLike': {
          'token.actions.githubusercontent.com:sub': 'repo:56kcloud/56kcloud-website:*'
        }
      }),
      maxSessionDuration: Duration.hours(1),
      roleName: '56kcloud-website-role'
    })

    const policyStatementSts = new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ['sts:AssumeRole'],
      resources: ['arn:aws:iam::*:role/cdk-*']
    })

    role.addToPolicy(policyStatementSts)
  }
}
