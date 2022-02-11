const dotenv=require('dotenv');

dotenv.config();

module.exports = Object.freeze({
  env         : process.env.NODE_ENV,
  app_version : 'v1',
  port        : process.env.PORT,
  production  : process.env.NPM_USE_PRODUCTION,
  mysql: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    db_name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    dialect: "mysql"
  },
  jwt_token: process.env.JWT_TOKEN
});

