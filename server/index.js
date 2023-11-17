const express = require('express');
const mysql = require('mysql');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World")
})


const connection = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-mysql-database',
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});


app.get('/lms', (req, res) => {
 
  connection.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    
    res.json(results);
  });
});


app.listen(8080, ()=>{
    console.log("Running on port 8080")
})