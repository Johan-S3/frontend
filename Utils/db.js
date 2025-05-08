import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "johan31",
  password: "2894667",
  database: "usuario"
});

export default connection;