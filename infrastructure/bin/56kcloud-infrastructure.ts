#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import {GithubRunnerStack} from '../lib/github-runner-stack'
import {OpenNextStack} from '../lib/open-next-stack'

const app = new cdk.App()

new OpenNextStack(app, 'Stack56KcloudOpenNext', {
  env: {account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION}
})

new GithubRunnerStack(app, 'GithubRunnerStack', {
  env: {account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION}
})
