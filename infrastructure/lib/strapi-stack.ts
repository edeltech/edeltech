import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as elasticbeanstalk from 'aws-cdk-lib/aws-elasticbeanstalk'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as rds from 'aws-cdk-lib/aws-rds'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3assets from 'aws-cdk-lib/aws-s3-assets'
import {Construct} from 'constructs'
import {Stack} from 'aws-cdk-lib'
import {StrapiWCertificate} from '../types/stack-with-certificate-props'

export class StrapiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StrapiWCertificate) {
    super(scope, id, props)

    const user = new iam.User(this, '56cloudWebsiteStrapiUser', {
      userName: '56cloudWebsiteStrapiUser'
    })

    const s3FullAccess = new iam.PolicyStatement({
      resources: ['*'],
      actions: ['s3:*'],
      effect: iam.Effect.ALLOW
    })

    const userPolicy = new iam.Policy(this, '56cloudWebsiteStrapiUserPolicy', {
      statements: [s3FullAccess]
    })
    user.attachInlinePolicy(userPolicy)
    
    const blockPublicAccess = new s3.BlockPublicAccess({
      blockPublicAcls: false,
      blockPublicPolicy: true
    })

    new s3.Bucket(this, '56cloudWebsiteStrapiAssets', {
      blockPublicAccess,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true
    })

    const vpc = new ec2.Vpc(this, '56cloudWebsiteStrapiVpc', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      maxAzs: 2,
      createInternetGateway: true
    })

    const securityGroup = new ec2.SecurityGroup(this, '56cloudWebsiteStrapiSecurityGroup', {
      vpc,
      allowAllOutbound: true
    })
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(5432))

    new rds.DatabaseInstance(this, '56kcloudWebsiteRdsInstance', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_15_4
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM),
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC
      },
      publiclyAccessible: true,
      securityGroups: [securityGroup],
      databaseName: 'strapidb'
    })

    const strapiZipArchive = new s3assets.Asset(this, '56cloudWebsiteStrapiZip', {
      path: `${__dirname}/../../strapi.zip`
    })

    const appName = '56kcloudWebsiteStrapi'
    const app = new elasticbeanstalk.CfnApplication(this, 'Application', {
      applicationName: appName
    })

    const appVersionProps = new elasticbeanstalk.CfnApplicationVersion(this, 'AppVersion', {
      applicationName: appName,
      sourceBundle: {
        s3Bucket: strapiZipArchive.s3BucketName,
        s3Key: strapiZipArchive.s3ObjectKey
      }
    })

    appVersionProps.addDependency(app)

    const role = new iam.Role(this, `${appName}ElasticbeanstalkEc2Role`, {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com')
    })
  
    const managedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName('AWSElasticBeanstalkWebTier')
    role.addManagedPolicy(managedPolicy)
  
    const profileName = `${appName}InstanceProfile`
  
    new iam.CfnInstanceProfile(this, profileName, {
      instanceProfileName: profileName,
      roles: [
        role.roleName
      ]
    })
    const optionSettingProperties: elasticbeanstalk.CfnEnvironment.OptionSettingProperty[] = [
      {
        namespace: 'aws:autoscaling:launchconfiguration',
        optionName: 'IamInstanceProfile',
        value: profileName
      },
      {
        namespace: 'aws:autoscaling:asg',
        optionName: 'MinSize',
        value: '1'
      },
      {
        namespace: 'aws:autoscaling:asg',
        optionName: 'MaxSize',
        value: '1'
      },
      {
        namespace: 'aws:ec2:instances',
        optionName: 'InstanceTypes',
        value: 't3.medium'
      },
      {
        namespace: 'aws:elb:listener:443',
        optionName: 'ListenerProtocol',
        value: 'HTTPS'
      },
      {
        namespace: 'aws:elb:listener:443',
        optionName: 'InstancePort',
        value: '80'
      },
      {
        namespace: 'aws:elb:listener:443',
        optionName: 'InstanceProtocol',
        value: 'HTTP'
      },
      {
        namespace: 'aws:elb:listener:443',
        optionName: 'SSLCertificateId',
        value: props?.acmStack.certificate.certificateArn
      }
    ]

    new elasticbeanstalk.CfnEnvironment(this, '56kcloudWebsiteStrapiProd', {
      environmentName: '56kcloudWebsiteStrapiProd',
      applicationName: app.applicationName || appName,
      solutionStackName: '64bit Amazon Linux 2023 v6.0.2 running Node.js 18',
      optionSettings: optionSettingProperties,
      versionLabel: appVersionProps.ref
    })
   
  }
}
