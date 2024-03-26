import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config({ path: '.env' });

const mongoConf = {
  host: env.get('MONGO_HOST').required().asString(),
  port: env.get('MONGO_PORT').required().asString(),
  database: env.get('MONGO_DATABASE').required().asString(),
  user: env.get('MONGO_USER').required().asString(),
  password: env.get('MONGO_PASSWORD').required().asString(),
};

const conf = {
  app: {
    name: env.get('APP_NAME').required().asString(),
    description: env.get('APP_DESCRIPTION').required().asString(),
    title: env.get('APP_TITLE').required().asString(),
    version: env.get('APP_VERSION').required().asString(),
    environment: env.get('APP_ENVIRONMENT').required().asString(),
    apiExplorerPath: env.get('APP_API_EXPLORER_PATH').required().asString(),
  },
  server: {
    host: env.get('SERVER_HOST').required().asString(),
    port: env.get('SERVER_PORT').required().asPortNumber(),
  },
  mail: {
    smtpUser: env.get('SMTP_USER').required().asString(),
    smtpPassword: env.get('SMTP_PASSWORD').required().asString(),
    smtpHost: env.get('SMTP_HOST').required().asString(),
    smtpPort: env.get('SMTP_PORT').required().asString(),
  },
  superAdmin: {
    login: env.get('SUPER_ADMIN_LOGIN').required().asString(),
    password: env.get('SUPER_ADMIN_PASSWORD').required().asString(),
  },
  jwt: {
    secretKey: env.get('JWT_SECRET_KEY').required().asString(),
    expiration: env.get('JWT_EXPIRATION').required().asIntPositive(),
  },
  front: {
    frontUrl: env.get('FRONT_URL').required().asString(),
  },
  mongo: {
    ...mongoConf,
    MAIN_DATABASE_URI: env.get('MONGO_URI').required().asString(),
  },
};

export default () => conf;
