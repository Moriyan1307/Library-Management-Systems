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
  const [bookData, setBookData] = useState([]);
  const [mprompt, setMprompt] = useState(false);
  const apiUrl = "http://localhost:8080";

  const fetchData = async () => {
    setMprompt(true);
    try {
      const response = await axios.get(`${apiUrl}/book`);
      setBookData(response.data);
      console.log(setBookData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const prompt = (
    <Box
      sx={{
        height: "70vh",
        width: "80vw",
        border: "2px solid #000",
        backgroundColor: "white",
        position: "absolute",
      }}
    >
      <Button onClick={() => setMprompt(false)} variant="outlined">
        {bookData ? (
          <table>
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Published Year</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Total Copies</th>
                <th>Available Copies</th>
                <th>Is Reference Book</th>
                <th>Is Rare Book</th>
                <th>Is Map</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bookData.ISBN}</td>
                <td>{bookData.Title}</td>
                <td>{bookData.Author}</td>
                <td>{bookData.PublishedYear}</td>
                <td>{bookData.Genre}</td>
                <td>{bookData.Description}</td>
                <td>{bookData.TotalCopies}</td>
                <td>{bookData.AvailableCopies}</td>
                <td>{bookData.IsReferenceBook ? "Yes" : "No"}</td>
                <td>{bookData.IsRareBook ? "Yes" : "No"}</td>
                <td>{bookData.IsMap ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
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
