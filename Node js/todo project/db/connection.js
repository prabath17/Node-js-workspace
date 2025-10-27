const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // your MySQL username
  password: 'root',      // your MySQL password
  database: 'node_project' // your database name
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL connected!');
});

module.exports = db;
