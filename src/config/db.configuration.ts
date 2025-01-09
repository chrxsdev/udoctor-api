import { Config } from './configuration.interface';

const configuration: () => Config = () => ({
  db: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    schema: process.env.SCHEMA,
  },
  api: process.env.BASE_URL,
  jwtSecret: process.env.JWT_SECRET,
});

export default configuration;
