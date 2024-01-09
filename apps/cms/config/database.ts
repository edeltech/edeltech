import {parse} from 'pg-connection-string'

export default ({env}) => {
  // If DATABASE_URL exists, use it to override other settings.
  const databaseConfig = env('DATABASE_URL')
    ? parse(env('DATABASE_URL'))
    : {
        host: env('RDS_HOSTNAME', '127.0.0.1'),
        port: env.int('RDS_PORT', 5432),
        database: env('RDS_DB_NAME', 'strapi'),
        user: env('RDS_USERNAME', 'strapi'),
        password: env('RDS_PASSWORD', 'strapi')
      }

  return {
    connection: {
      client: 'postgres',
      connection: {
        ...databaseConfig,
        ssl: env.bool('DATABASE_USE_SSL', true) ? {rejectUnauthorized: false} : false
      },
      debug: false
    }
  }
}
