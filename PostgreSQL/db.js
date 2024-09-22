const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CRUD',
    password: 'Serin199831_',
    port: 5432
})
module.exports = pool