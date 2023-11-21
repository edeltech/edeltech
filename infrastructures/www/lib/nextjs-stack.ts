import {Construct} from 'constructs'
import {Nextjs} from '@56k.cloud/cdk-construct'
import {Stack, StackProps} from 'aws-cdk-lib'

export class NextjsStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    new Nextjs(this, 'Nextjs', {
      nextjsPath: '../../apps/www',  
      domainName: 'open-next.56k.cloud',
      domainAlias: 'www.open-next.56k.cloud'
    })

  }
}
