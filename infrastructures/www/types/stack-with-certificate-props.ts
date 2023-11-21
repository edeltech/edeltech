import {AcmStack} from '../lib/acm-stack'
import {StackProps} from 'aws-cdk-lib'

export type StrapiWCertificate = StackProps & {
  acmStack?: AcmStack
}
