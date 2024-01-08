import {Construct} from 'constructs'
import {GithubRunner} from '@56k.cloud/cdk-construct'
import {Stack, StackProps} from 'aws-cdk-lib'

export class GithubRunnerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    
    new GithubRunner(this, 'GithubRunner', {
      repo: '56kcloud/56kcloud-website',
      openIdConnectProviderArn: 'arn:aws:iam::568023081912:oidc-provider/token.actions.githubusercontent.com'
    })
    
  }
}
