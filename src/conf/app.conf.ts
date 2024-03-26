export const EnvConf = () => ({
  environment: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  port: process.env.PORT,
  jwt_key: process.env.JWT_KEY,
  database: {
    // db_url_local: process.env.DATABASE_URL_DOCKER_LOCAL,
    // db_url: process.env.DATABASE_URL,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_port: process.env.DB_PORT,
    db_host: process.env.DB_HOST,
  },
});
