import {Certificate, CertificateValidation} from 'aws-cdk-lib/aws-certificatemanager'
import {Construct} from 'constructs'
import {Stack, StackProps} from 'aws-cdk-lib'

export class AcmStack extends Stack {
  public readonly certificate: Certificate
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.certificate = new Certificate(this, '56kcloudWebsiteCertificate', {
      domainName: '*.56k.cloud',
      validation: CertificateValidation.fromDns()
    })
  }
}
