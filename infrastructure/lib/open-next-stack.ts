import {CfnOutput, Stack} from 'aws-cdk-lib'
import {Construct} from 'constructs'
import {Nextjs} from 'cdk-nextjs-standalone'
import {StrapiWCertificate} from '../types/stack-with-certificate-props'
export class OpenNextStack extends Stack {
  constructor(scope: Construct, id: string, props?: StrapiWCertificate) {
    super(scope, id, props)

    const nextjs = new Nextjs(this, '56kcloudWebsite', {
      nextjsPath: '../apps/www',
      defaults: {
        distribution: {
          customDomain: {
            domainName: 'open-next.56k.cloud',
            domainAlias: 'www.open-next.56k.cloud',
            certificate: props?.acmStack.certificate
          }
        }
      }
    })

    new CfnOutput(this, 'CloudFrontDistributionDomain', {
      value: nextjs.distribution.distributionDomain
    })
  }
}
