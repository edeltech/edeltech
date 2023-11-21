import {Construct} from 'constructs'
import {Stack, StackProps} from 'aws-cdk-lib'
import {Strapi} from '@56k.cloud/cdk-construct'

export class CMSStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new Strapi(this, 'Strapi', {
      appName: '56kcloud-cms',
      domainName: 'cms-aws.56k.cloud',
      zipPath: `${__dirname}/../../../strapi.zip`,
      environment: 'prod'
    })

  }
}
