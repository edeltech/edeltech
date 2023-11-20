#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import {AcmStack} from '../lib/acm-stack'
import {GithubRunnerStack} from '../lib/github-runner-stack'
import {OpenNextStack} from '../lib/open-next-stack'
import {StrapiStack} from '../lib/strapi-stack'

const app = new cdk.App()

// const acmStack = new AcmStack(app, 'Stack56KcloudAcm')
const acmStack = new AcmStack(app, 'Stack56KcloudAcm', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
})

if(process.env.DEPLOY_WWW_ONLY !== 'true') {
  new StrapiStack(app, 'Stack56KcloudStrapi', {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    },
    acmStack
  })
}

if(process.env.DEPLOY_CMS_ONLY !== 'true') {
  new OpenNextStack(app, 'Stack56KcloudOpenNext', {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    },
    acmStack
  })
}

new GithubRunnerStack(app, 'GithubRunnerStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
})
