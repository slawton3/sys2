const { pool, client } = require('pg');
import { DB_Config } from './types/globalTypes';

const config: DB_Config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
}