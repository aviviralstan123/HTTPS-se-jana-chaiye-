// FILE: server/src/config/database.js

const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'viralstan_db',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
};

let pool;

const connectDB = async (retries = 5) => {
    while (retries) {
        try {
            pool = mysql.createPool(dbConfig);
            const connection = await pool.getConnection();
            console.log('✅ MySQL Connected Successfully to pool');
            connection.release();
            return pool;
        } catch (err) {
            console.error(`❌ MySQL Connection Error: ${err.message}`);
            retries -= 1;
            console.log(`Retrying connection... (${retries} retries left)`);
            if (retries === 0) {
                console.error('Could not connect to database. Exiting...');
                process.exit(1);
            }
            await new Promise(res => setTimeout(res, 5000));
        }
    }
};

connectDB();

module.exports = {
    query: (sql, params) => pool.query(sql, params),
    getConnection: () => pool.getConnection(),
    pool
};
