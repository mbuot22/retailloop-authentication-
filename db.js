import pg from 'pg';
const {Pool} = pg;

let localPoolConfig = {
    user: 'postgres',
    password: 'BOBO2003',
    host: 'localhost',
    port: '3000',
    database: 'authentication'
};

const poolConfig = process.env.DATABASE_URL ? {
    connectionString:process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false }
} : localPoolConfig;

const pool = new Pool(poolConfig);

export default pool;