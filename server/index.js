const express = require('express');
const mysql = require('mysql');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');


// Use body-parser middleware
app.use(bodyParser.json());



// Enable CORS for all routes
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

// app.get('/report', (req, res) => {
 
//   connection.query("SELECT c.SubjectArea, c.Author, COUNT(b.ISBN) AS NumberOfCopies, DATEDIFF(b.ReturnDate, b.IssueDate) AS DaysLoanedOut FROM Borrowing b JOIN Catalog c ON b.ISBN = c.ISBN WHERE WEEK(b.IssueDate) = WEEK(CURDATE()) GROUP BY c.SubjectArea, c.Author;", (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     } 
//     res.json(results);
//   });
// });



app.post('/api/addBook', (req, res) => {
  console.log('Received data:', req.body)
  const { ISBN, Title, Author, PublishedYear, Genre, Description, TotalCopies , AvailableCopies,
  IsReferenceBook,IsRareBook,IsMap} = req.body; // Add other fields as needed
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


app.post('/api/borrow', (req, res) => {
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




const newBorrow = {
  MemberID: 16, // Replace with the actual MemberID
  IssueDate: '2023-01-01',
  DueDate: '2023-01-22',
  ReturnDate: null,
  Status: 'Borrowed',
};


app.get('/addborrow', (req, res) => {
 
  connection.query('INSERT INTO Borrowing SET ?', newBorrow, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    } 
    res.json(results);
  });
});


app.get('/return', (req, res) => {
  const borrowingIDToReturn = 2; // Replace with the actual BorrowingID  
  connection.query('UPDATE Borrowing SET ReturnDate = CURDATE(), Status = "Returned" WHERE BorrowingID = ?', [borrowingIDToReturn], (err, results) => {
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
 
//   connection.query("SELECT c.SubjectArea, c.Author, COUNT(b.ISBN) AS NumberOfCopies, DATEDIFF(b.ReturnDate, b.IssueDate) AS DaysLoanedOut FROM Borrowing b JOIN Catalog c ON b.ISBN = c.ISBN WHERE WEEK(b.IssueDate) = WEEK(CURDATE()) GROUP BY c.SubjectArea, c.Author;", (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     } 
//     res.json(results);
//   });
// });


app.get('/report', (req, res) => {
 
  connection.query("SELECT c.SubjectArea, c.Author, b.ISBN, c.Title, COUNT(b.ISBN) AS NumberOfCopies, DATEDIFF(b.ReturnDate, b.IssueDate) AS DaysLoanedOut FROM Borrowing b JOIN Catalog c ON b.ISBN = c.ISBN WHERE b.ISBN IN ('978-0060935467', '978-0061120084', '978-0140283334','978-0143039433', '978-0307454544', '978-0316769488','978-0316769490', '978-0375411557', '978-0385472579','978-0451524935', '978-0553213481', '978-0743247544','978-0743273565', '978-0987654321', '978-1122334455','978-1234567890', '978-1234568611', '978-1234568650','978-1400033423', '978-9876543210') GROUP BY c.SubjectArea, c.Author, b.ISBN, c.Title, b.IssueDate, b.ReturnDate;", (err, results) => {
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
