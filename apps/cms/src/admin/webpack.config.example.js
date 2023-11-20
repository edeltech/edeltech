import {
  GetSecretValueCommand,
  SecretsManagerClient
} from '@aws-sdk/client-secrets-manager'

const secret_name = 'Stack56KcloudStrapirds56kcl-aN5gupbAgOVy'

// eslint-disable-next-line no-unexpected-multiline
(async () => {
  const client = new SecretsManagerClient({
    region: 'us-east-1'
  })
  let response

  // eslint-disable-next-line no-useless-catch
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: 'AWSCURRENT' // VersionStage defaults to AWSCURRENT if unspecified
      })
    )
  } catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error
  }

  const secret = response.SecretString
  console.log(secret)
})()
