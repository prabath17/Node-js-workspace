const mysql = require('mysql2');

//  MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '',        
  database: 'bookdb'   

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
  } else {
    console.log('MySQL connected successfully!');
  }
});

module.exports = db;

