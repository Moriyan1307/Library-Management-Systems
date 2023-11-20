import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [bookData, setBookData] = useState(null);
  const [mprompt, setMprompt] = useState(false);
  const [formData, setFormData] = useState({
    ISBN: '',
    Title: '',
    Author: '',
    PublishedYear: '',
    Genre: '',
    Description: '',
    TotalCopies: '',
    AvailableCopies: '',
    IsReferenceBook: false,
    IsRareBook: false,
    IsMap: false,
  });
  const [formData2, setFormData2] = useState({
    MemberID: '',
    SSN: '',
    FirstName: '',
    LastName: '',
    CampusAddress: '',
    HomeAddress: '',
    Phone: '',
    MembershipCardNumber: '',
    MembershipExpiryDate: '',
    MembershipStatus: '',
  });
  
  const apiUrl = "http://localhost:8080";

  const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };
  
  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };


  const fetchData = async () => {
    setMprompt(true);
    try {
      const response = await axios.get(`${apiUrl}/book`);
      setBookData(response.data);
      console.log( bookData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log('Response from server:', formData);
      const response = await axios.post(`${apiUrl}/api/addBook`, formData);
     
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
  };
console.log(formData)


const handleSubmit2 = async (e) => {
  e.preventDefault();

  try {

    console.log('Response from server:', formData2);
    const response = await axios.post(`${apiUrl}/api/addMember`, formData2);
   
    console.log('Response from server:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    }
  };

const handleChange2 = (e) => {
setFormData2({
  ...formData2,
  [e.target.name]: e.target.value,
    });
  };
console.log(formData2)


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setMprompt(true);
  //     try {
  //       const response = await axios.get(`${apiUrl}/book`);
  //       setBookData(response.data);
  //       console.log( bookData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error); 
  //     }
  //   };
  //   fetchData();

  // }, []);



  const prompt = (
    <Box
      sx={{
        height: "auto",
        width: "auto",
       
        backgroundColor: "white",
        position: "absolute",
      }}
    >

{bookData ? (

<div style={{ margin: '20px' }}>
<table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
  <thead>
    <tr>
      <th style={tableHeaderStyle}>ISBN</th>
      <th style={tableHeaderStyle}>Title</th>
      <th style={tableHeaderStyle}>Author</th>
      <th style={tableHeaderStyle}>Published Year</th>
      <th style={tableHeaderStyle}>Genre</th>
      <th style={tableHeaderStyle}>Description</th>
      <th style={tableHeaderStyle}>Total Copies</th>
      <th style={tableHeaderStyle}>Available Copies</th>
      <th style={tableHeaderStyle}>Is Reference Book</th>
      <th style={tableHeaderStyle}>Is Rare Book</th>
      <th style={tableHeaderStyle}>Is Map</th>
    </tr>
  </thead>
  <tbody>
    {bookData ? (
      bookData.map((book) => (
        <tr key={book.ISBN}>
          <td style={tableCellStyle}>{book.ISBN}</td>
          <td style={tableCellStyle}>{book.Title}</td>
          <td style={tableCellStyle}>{book.Author}</td>
          <td style={tableCellStyle}>{book.PublishedYear}</td>
          <td style={tableCellStyle}>{book.Genre}</td>
          <td style={tableCellStyle}>{book.Description}</td>
          <td style={tableCellStyle}>{book.TotalCopies}</td>
          <td style={tableCellStyle}>{book.AvailableCopies}</td>
          <td style={tableCellStyle}>{book.IsReferenceBook ? 'Yes' : 'No'}</td>
          <td style={tableCellStyle}>{book.IsRareBook ? 'Yes' : 'No'}</td>
          <td style={tableCellStyle}>{book.IsMap ? 'Yes' : 'No'}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="11" style={tableCellStyle}>Loading...</td>
      </tr>
    )}
  </tbody>
</table>
</div>
        ) : (
          <p>Loading...</p>
        )}
      <Button onClick={() => setMprompt(false)} variant="outlined">
        
        Close
      </Button>
    </Box>
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/books`);
  //       setData(response.data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [apiUrl]);

  return (
    <div className="App">

<form onSubmit={handleSubmit}>
      <label>
        ISBN:
        <input type="text" name="ISBN" value={formData.ISBN} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input type="text" name="Title" value={formData.Title} onChange={handleChange} />
      </label>
      <label>
        Author:
        <input type="text" name="Author" value={formData.Author} onChange={handleChange} />
      </label>
      <label>
        PublishedYear:
        <input type="text" name="PublishedYear" value={formData.PublishedYear} onChange={handleChange} />
      </label>

      <label>
        Genre:
        <input type="text" name="Genre" value={formData.Genre} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="Description" value={formData.Description} onChange={handleChange} />
      </label>
      <label>
        TotalCopies:
        <input type="text" name="TotalCopies" value={formData.TotalCopies} onChange={handleChange} />
      </label>
      <label>
        AvailableCopies:
        <input type="text" name="AvailableCopies" value={formData.AvailableCopies} onChange={handleChange} />
      </label>
      <label>
        IsReferenceBook:
        <input type="text" name="IsReferenceBook" value={formData.IsReferenceBook} onChange={handleChange} />
      </label>
      <label>
        IsRareBook:
        <input type="text" name="IsRareBook" value={formData.IsRareBook} onChange={handleChange} />
      </label>
      <label>
        IsMap:
        <input type="text" name="IsMap" value={formData.IsMap} onChange={handleChange} />
      </label>


     
      {/* Add other input fields as needed */}
      <button type="submit">Submit</button>
    </form>


<form onSubmit={handleSubmit2}>
      <label>
        MemberID:
        <input type="text" name="MemberID" value={formData2.MemberID} onChange={handleChange2} />
      </label>
      <label>
        SSN:
        <input type="text" name="SSN" value={formData2.SSN} onChange={handleChange2} />
      </label>
      <label>
        FirstName:
        <input type="text" name="FirstName" value={formData2.FirstName} onChange={handleChange2} />
      </label>
      <label>
        LastName:
        <input type="text" name="LastName" value={formData2.LastName} onChange={handleChange2} />
      </label>
      <label>
        CampusAddress:
        <input type="text" name="CampusAddress" value={formData2.CampusAddress} onChange={handleChange2} />
      </label>
      <label>
        HomeAddress:
        <input type="text" name="HomeAddress" value={formData2.HomeAddress} onChange={handleChange2} />
      </label>
      <label>
        Phone:
        <input type="text" name="Phone" value={formData2.Phone} onChange={handleChange2} />
      </label>
      <label>
        MembershipCardNumber:
        <input type="text" name="MembershipCardNumber" value={formData2.MembershipCardNumber} onChange={handleChange2} />
      </label>
      <label>
        MembershipExpiryDate:
        <input type="text" name="MembershipExpiryDate" value={formData2.MembershipExpiryDate} onChange={handleChange2} />
      </label>
      <label>
        MembershipStatus:
        <input type="text" name="MembershipStatus" value={formData2.MembershipStatus} onChange={handleChange2} />
      </label>


      {/* Add other input fields as needed */}
      <button type="submit">Submit</button>
    </form>

      <h1>Library Management System</h1>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            height: "60vh",
            width: "100vw",
            border: "2px solid #000",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ height: "40%", width: "30%", border: "2px solid #000" }}>
            <Button onClick={() => fetchData()} variant="outlined">
              Outlined
            </Button>
          </Box>
          {mprompt && prompt}
          <Box
            sx={{ height: "40%", width: "30%", border: "2px solid #000" }}
          ></Box>
          <Box
            sx={{ height: "40%", width: "30%", border: "2px solid #000" }}
          ></Box>
          <Box
            sx={{ height: "40%", width: "30%", border: "2px solid #000" }}
          ></Box>
          <Box
            sx={{ height: "40%", width: "30%", border: "2px solid #000" }}
          ></Box>
          <Box
            sx={{ height: "40%", width: "30%", border: "2px solid #000" }}
          ></Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
