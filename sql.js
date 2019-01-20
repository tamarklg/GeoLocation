const sql = require('mssql');
const dbConfig = require('./config/db');

const pool = new sql.ConnectionPool(dbConfig).connect()
  .then(pool => {
    console.log("Connected to DB: ");
    console.log(dbConfig);
    return pool;
  });

const exeQuery = async ({ query }) => {
  console.log(query);
  const poolConnection = await pool;
  const result = await poolConnection.request().query(query);
  return result.recordset;
};


module.exports = {
  pool,
  sql: exeQuery,
};