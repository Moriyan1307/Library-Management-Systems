const express = require('express');
const mysql = require('mysql');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello World")
})


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'lms',
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});


app.get('/members', (req, res) => {
 
  connection.query("SELECT * FROM MEMBERS ", (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});

app.get('/book', (req, res) => {
 
  connection.query("SELECT * FROM BOOKS ", (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});

app.get('/Catalog', (req, res) => {
 
  connection.query("SELECT * FROM CATALOG ", (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});

app.get('/borrowing', (req, res) => {
 
  connection.query("SELECT * FROM BORROWING ", (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});

app.get('/staff', (req, res) => {
 
  connection.query("SELECT * FROM STAFF ", (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});

app.post('/api/addBook', (req, res) => {
  console.log('Received data:', req.body)
  const { ISBN, Title, Author, PublishedYear, Genre, Description, TotalCopies , AvailableCopies,
  IsReferenceBook,IsRareBook,IsMap} = req.body; 
  connection.query('INSERT INTO Books SET ?', req.body, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});


app.post('/api/addMember', (req, res) => {
  console.log('Received data:', req.body)
  const { SSN, FirstName, LastName, CampusAddress, HomeAddress, Phone} = req.body; // Add other fields as needed
  connection.query('INSERT INTO Members SET ?', req.body, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});


app.post('/borrow', (req, res) => {
  console.log('Received data:', req.body)
  const { MemberID, ISBN, IssueDate} = req.body; // Add other fields as needed
  connection.query('INSERT INTO Borrowing SET ?', req.body, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});


// app.post('/return', (req, res) => {
//   console.log('Received data:', req.body)
//   const { MemberID, ISBN } = req.body; 
//   const memberIdInt = parseInt(MemberID);

//   const sql = 'UPDATE borrowing SET Status = ?, ReturnDate = CURDATE() WHERE MemberID = ? AND ISBN = ?';

//   connection.query(sql, ['Returned', memberIdInt, ISBN], (err, result) => {
//     if (err) {
//       console.error('Error updating data in MySQL:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Data updated in MySQL:', result);
//       res.status(200).send('Data updated successfully');
//     }
//   });
// });

// app.post('/return', (req, res) => {
//   console.log('Received data:', req.body);
//   const { MemberID, ISBN } = req.body;

//   const sql = 'UPDATE borrowing SET Status = ?, ReturnDate = CURDATE() WHERE MemberID = ? AND ISBN = ?';

//   connection.query(sql, ['Returned', MemberID, ISBN], (err, result) => {
//     if (err) {
//       console.error('Error updating data in MySQL:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Data updated in MySQL:', result);
//       res.status(200).send('Data updated successfully');
//     }
//   });
// });


app.post('/return', (req, res) => {
  console.log('Received data:', req.body);
  const { MemberID, ISBN } = req.body;

  // Convert ISBN to string
  const ISBNString = String(ISBN);

  // Using parameterized query to prevent SQL injection
  const sql = 'UPDATE borrowing SET Status = ?, ReturnDate = CURDATE() WHERE MemberID = ? AND ISBN = ?';

  connection.query(sql, ['Returned', MemberID, ISBNString], (err, result) => {
    if (err) {
      console.error('Error updating data in MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data updated in MySQL:', result);
      res.status(200).send('Data updated successfully');
    }
  });
});

app.get('/members/:MemberID', (req, res) => {
  const MemberID = req.params.MemberID;

  const query = 'SELECT * FROM Borrowing WHERE MemberID = ? order by returnDate desc limit 1';
  connection.query(query, [MemberID], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});


app.get('/renew', (req, res) => {
  const memberIDToRenew = 15; // Replace with the actual BorrowingID  
  connection.query('UPDATE Members SET MembershipExpiryDate = DATE_ADD(MembershipExpiryDate, INTERVAL 6 MONTH) WHERE MemberID = ?', [memberIDToRenew], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});

// app.get('/report', (req, res) => {
//   connection.query("SELECT c.SubjectArea, c.Author, b.ISBN, c.Title, COUNT(b.ISBN) AS NumberOfCopies, DATEDIFF(b.ReturnDate, b.IssueDate) AS DaysLoanedOut FROM Borrowing b JOIN Catalog c ON b.ISBN = c.ISBN WHERE b.ISBN IN (SELECT ISBN FROM Borrowing) GROUP BY c.SubjectArea, c.Author, b.ISBN, c.Title, b.IssueDate, b.ReturnDate;", (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     } 
//     res.json(results);
//   });
// });


// app.get('/report', (req, res) => {
//   connection.query(`
//     SELECT
//       c.SubjectArea,
//       c.Author,
//       b.ISBN,
//       c.Title,
//       COUNT(b.ISBN) AS NumberOfCopies,
//       DATEDIFF(b.ReturnDate, b.IssueDate) AS DaysLoanedOut
//     FROM
//       Borrowing b
//     JOIN
//       Catalog c ON b.ISBN = c.ISBN
//     GROUP BY
//       c.SubjectArea, c.Author, b.ISBN, c.Title, b.IssueDate, b.ReturnDate;
//   `, (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     } 
//     res.json(results);
//   });
// });

app.get('/report', (req, res) => {
  connection.query(`
    SELECT
      c.SubjectArea,
      c.Author,
      b.ISBN,
      c.Title,
      COUNT(b.ISBN) AS NumberOfCopies,
      DATEDIFF(b.ReturnDate, b.IssueDate) AS DaysLoanedOut
    FROM
      Borrowing b
    JOIN
      Catalog c ON b.ISBN = c.ISBN
    GROUP BY
      c.SubjectArea, c.Author, b.ISBN, c.Title, b.IssueDate, b.ReturnDate;
  `, (err, results) => {
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
