"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const suffix = {
    test: '-test',
    development: '-dev',
    production: '',
};
const env = process.env.NODE_ENV || 'production';
const config = {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: `${process.env.MYSQL_DATABASE}${suffix[env]}`,
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: '-03:00',
    },
};
module.exports = config;
