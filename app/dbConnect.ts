const { Pool, Client } = require('pg');
import { DB_Config } from './types/globalTypes';
require('dotenv').config();

const config: DB_Config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
};

console.log(config);

const pool = new Pool ({
    max: 20,
    config,
    idleTimeoutMillis: 30000
});

export default pool;