import {Certificate, CertificateValidation} from 'aws-cdk-lib/aws-certificatemanager'
import {CfnOutput, Stack, StackProps} from 'aws-cdk-lib'
import {Construct} from 'constructs'
import {Nextjs} from 'cdk-nextjs-standalone'

export class OpenNextStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const certificate = new Certificate(this, '56kcloudWebsiteCertificate', {
      domainName: '*.56k.cloud',
      validation: CertificateValidation.fromDns()
    })

    const nextjs = new Nextjs(this, '56kcloudWebsite', {
      nextjsPath: '../apps/www',
      defaults: {
        distribution: {
          customDomain: {
            domainName: 'open-next.56k.cloud',
            alternateNames: ['www.open-next.56k.cloud'],
            certificate
          }
        }
      }
    })

    new CfnOutput(this, 'CloudFrontDistributionDomain', {
      value: nextjs.distribution.distributionDomain
    })
  }
}
