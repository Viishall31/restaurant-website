const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // your password if any
  database: 'restaurant'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL Database!');
});

module.exports = db; // ✅ this line is very important
