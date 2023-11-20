#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import {AcmStack} from '../lib/acm-stack'
import {GithubRunnerStack} from '../lib/github-runner-stack'
import {OpenNextStack} from '../lib/open-next-stack'
import {StrapiStack} from '../lib/strapi-stack'

const app = new cdk.App()

// const acmStack = new AcmStack(app, 'Stack56KcloudAcm')
const acmStack = new AcmStack(app, 'Stack56KcloudAcm')

new StrapiStack(app, 'Stack56KcloudStrapi', {
  acmStack
})

new OpenNextStack(app, 'Stack56KcloudOpenNext', {
  acmStack
})

new GithubRunnerStack(app, 'GithubRunnerStack')
