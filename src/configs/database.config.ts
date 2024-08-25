import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
dotenv.config();

const config = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || ''
};

module.exports = config;

