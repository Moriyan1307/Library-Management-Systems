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
import { styled } from "@mui/system";

function App() {
  const [bookData, setBookData] = useState(null);
  const [memberData, setMemberData] = useState(null);
  const [catalogData, setCatalogData] = useState(null);
  const [borrowingData, setBorrowingData] = useState(null);
  const [ReportData, setReportData] = useState(null);
  const [receiptDetails, setReceiptDetails] = useState(null);

  const [bprompt, setBprompt] = useState(false);
  const [Is_mprompt, setIs_mprompt] = useState(false);
  const [isBookPrompt, setIsBookPrompt] = useState(false);
  const [isMemberPrompt, setIsmemberPrompt] = useState(false);
  const [isBorrowPrompt, setIsBorrowPrompt] = useState(false);
  const [isReturnPrompt, setIsReturnPrompt] = useState(false);
  const [isBorrowingTable, setIsBorrowingTable] = useState(false);
  const [isCatalogTable, setIsCatalogTable] = useState(false);
  const [isReportTable, setIsReportTable] = useState(false);
  const [isRecipt, setIsRecipt] = useState(false);

  function convertDateStringToReadable(dateString) {
    const date = new Date(dateString);

    // Options for formatting the date
    const options = { year: "numeric", month: "long", day: "numeric" };

    // Convert to a readable date string
    const readableDateString = date.toLocaleDateString("en-US", options);

    return readableDateString;
  }

  const [borrowData, setBorrowData] = useState({
    MemberID: "",
    ISBN: "",
    IssueDate: "", // You might want to use a date picker or another input type for dates
    // Add other fields as needed
  });

  const handleBorrow = (e) => {
    setBorrowData({
      ...borrowData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBorrowSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/borrow`, borrowData);
      console.log("Response from server:", response.data);

      setBorrowData({
        MemberID: "",
        ISBN: "",
        IssueDate: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const [formData, setFormData] = useState({
    ISBN: "",
    Title: "",
    Author: "",
    PublishedYear: "",
    Genre: "",
    Description: "",
    TotalCopies: "",
    AvailableCopies: "",
    IsReferenceBook: false,
    IsRareBook: false,
    IsMap: false,
  });
  const [formData2, setFormData2] = useState({
    SSN: "",
    FirstName: "",
    LastName: "",
    CampusAddress: "",
    HomeAddress: "",
    Phone: "",
  });

  const [returnData, setReturnData] = useState({
    MemberID: "",
    ISBN: "",
    // Add other fields as needed
  });

  const handleReturn = (e) => {
    setReturnData({
      ...returnData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(returnData);

  console.log(returnData);

  const handleReturnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/return`, returnData);
      console.log("Response from server:", response.data);

      alert("Successful");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert(error);
    }
  };

  const handleRecipt = async (e) => {
    setIsRecipt(true);

    try {
      const response = await axios.get(
        `${apiUrl}/members/${returnData.MemberID}`
      );
      setReceiptDetails(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    
  };

  const apiUrl = "http://localhost:8080";

  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const fetchData = async () => {
    setBprompt(true);
    try {
      const response = await axios.get(`${apiUrl}/book`);
      setBookData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMember = async () => {
    setIsmemberPrompt(true);
    try {
      const response = await axios.get(`${apiUrl}/members`);
      setMemberData(response.data);
      console.log(memberData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchBorrowingTable = async () => {
    setIsBorrowingTable(true);
    try {
      const response = await axios.get(`${apiUrl}/borrowing`);
      setBorrowingData(response.data);
      console.log(borrowingData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCatalog = async () => {
    setIsCatalogTable(true);
    try {
      const response = await axios.get(`${apiUrl}/catalog`);
      setCatalogData(response.data);
      console.log(catalogData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchReport = async () => {
    setIsReportTable(true);
    try {
      const response = await axios.get(`${apiUrl}/report`);
      setReportData(response.data);
      console.log(ReportData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Response from server:", formData);
      const response = await axios.post(`${apiUrl}/api/addBook`, formData);
      alert("Book Added Successfully");
    } catch (error) {
      alert("Error submitting data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      console.log("Response from server:", formData2);
      const response = await axios.post(`${apiUrl}/api/addMember`, formData2);

      alert("Member Added Successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data:");
    }
  };

  const handleChange2 = (e) => {
    setFormData2({
      ...formData2,
      [e.target.name]: e.target.value,
    });
  };

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
        zIndex: "999",
        backgroundColor: "white",
        position: "absolute",
      }}
    >
      {bookData ? (
        <div style={{ margin: "20px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
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
                    <td style={tableCellStyle}>
                      {book.IsReferenceBook ? "Yes" : "No"}
                    </td>
                    <td style={tableCellStyle}>
                      {book.IsRareBook ? "Yes" : "No"}
                    </td>
                    <td style={tableCellStyle}>{book.IsMap ? "Yes" : "No"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" style={tableCellStyle}>
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => setBprompt(false)} variant="outlined">
        Close
      </Button>
    </Box>
  );

  const reciptTable = (
    <Box
      sx={{
        height: "70vh",
        width: "50vw",
        zIndex: "999",
        border: "2px solid #000",

        backgroundColor: "white",
        position: "absolute",
      }}
    >
      <div
        style={{
          height: "80%",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",

          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1>Library Receipt</h1>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p>
            <strong>Borrowing ID:</strong> {receiptDetails?.BorrowingID}
          </p>
          <p>
            <strong>Member ID:</strong> {receiptDetails?.MemberID}
          </p>
          <p>
            <strong>Issue Date:</strong> { convertDateStringToReadable(receiptDetails?.IssueDate) }
          </p>
          <p>
            <strong>Due Date:</strong> {convertDateStringToReadable(receiptDetails?.DueDate)}
          </p>
          <p>
            <strong>Return Date:</strong> {convertDateStringToReadable(receiptDetails?.ReturnDate)}
          </p>
          <p>
            <strong>Status:</strong> {receiptDetails?.Status}
          </p>
          <p>
            <strong>ISBN:</strong> {receiptDetails?.ISBN}
          </p>
        </div>
      </div>

      <Button onClick={() => setIsRecipt(false)} variant="outlined">
        Close
      </Button>
    </Box>
  );

  const returnPrompt = (
    <Box
      sx={{
        height: "70vh",
        width: "50vw",
        border: "2px solid #000",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "999",
      }}
    >
      <form
        onSubmit={handleReturnSubmit}
        style={{
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <label>
          Member ID:
          <input
            type="text"
            name="MemberID"
            value={returnData.MemberID}
            onChange={handleReturn}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="ISBN"
            value={returnData.ISBN}
            onChange={handleReturn}
          />
        </label>

        <Button variant="oulined" type="submit">
          Submit
        </Button>
        <Button variant="oulined" onClick={() => handleRecipt()}>
          Print Recipt
        </Button>

        {isRecipt && reciptTable}

        <Button onClick={() => setIsReturnPrompt(false)} variant="outlined">
          Close
        </Button>
      </form>
    </Box>
  );

  const borrowingTable = (
    <Box
      sx={{
        height: "auto",
        width: "100vw",
        zIndex: "999",

        backgroundColor: "white",
        position: "absolute",
      }}
    >
      {borrowingData ? (
        <div style={{ margin: "20px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Borrowing ID</th>
                <th style={tableHeaderStyle}>Member ID</th>
                <th style={tableHeaderStyle}>Issue Date</th>
                <th style={tableHeaderStyle}>Due Date</th>
                <th style={tableHeaderStyle}>Return Date</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {borrowingData ? (
                borrowingData.map((borrowing) => (
                  <tr key={borrowing.BorrowingID}>
                    <td style={tableCellStyle}>{borrowing.BorrowingID}</td>
                    <td style={tableCellStyle}>{borrowing.MemberID}</td>
                    <td style={tableCellStyle}>
                      {convertDateStringToReadable(borrowing.IssueDate)}
                    </td>
                    <td style={tableCellStyle}>
                      {convertDateStringToReadable(borrowing.DueDate)}
                    </td>
                    <td style={tableCellStyle}>
                      {convertDateStringToReadable(borrowing.ReturnDate)}
                    </td>
                    <td style={tableCellStyle}>{borrowing.Status}</td>
                    <td style={tableCellStyle}>{borrowing.ISBN}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={tableCellStyle}>
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => setIsBorrowingTable(false)} variant="outlined">
        Close
      </Button>
    </Box>
  );

  const catalogTable = (
    <Box
      sx={{
        height: "auto",
        width: "auto",
        zIndex: "999",

        backgroundColor: "white",
        position: "absolute",
      }}
    >
      {catalogData ? (
        <div style={{ margin: "20px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Catalog ID</th>
                <th style={tableHeaderStyle}>Author</th>
                <th style={tableHeaderStyle}>Title</th>
                <th style={tableHeaderStyle}>Subject Area</th>
                <th style={tableHeaderStyle}>Description</th>
                <th style={tableHeaderStyle}>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {catalogData ? (
                catalogData.map((catalog) => (
                  <tr key={catalog.CatalogID}>
                    <td style={tableCellStyle}>{catalog.CatalogID}</td>
                    <td style={tableCellStyle}>{catalog.Author}</td>
                    <td style={tableCellStyle}>{catalog.Title}</td>
                    <td style={tableCellStyle}>{catalog.SubjectArea}</td>
                    <td style={tableCellStyle}>{catalog.Description}</td>
                    <td style={tableCellStyle}>{catalog.ISBN}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={tableCellStyle}>
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          ;
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => setIsCatalogTable(false)} variant="outlined">
        Close
      </Button>
    </Box>
  );

  const memberprompt = (
    <Box
      sx={{
        height: "auto",
        width: "auto",
        zIndex: "999",

        backgroundColor: "white",
        position: "absolute",
      }}
    >
      {bookData ? (
        <div style={{ margin: "20px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>MemberID</th>
                <th style={tableHeaderStyle}>SSN</th>
                <th style={tableHeaderStyle}>First Name</th>
                <th style={tableHeaderStyle}>Last Name</th>
                <th style={tableHeaderStyle}>Campus Address</th>
                <th style={tableHeaderStyle}>Home Address</th>
                <th style={tableHeaderStyle}>Phone</th>
                <th style={tableHeaderStyle}>Membership Card Number</th>
                <th style={tableHeaderStyle}>Membership Expiry Date</th>
                <th style={tableHeaderStyle}>Membership Status</th>
              </tr>
            </thead>
            <tbody>
              {memberData ? (
                memberData.map((member) => (
                  <tr key={member.MemberID}>
                    <td style={tableCellStyle}>{member.MemberID}</td>
                    <td style={tableCellStyle}>{member.SSN}</td>
                    <td style={tableCellStyle}>{member.FirstName}</td>
                    <td style={tableCellStyle}>{member.LastName}</td>
                    <td style={tableCellStyle}>{member.CampusAddress}</td>
                    <td style={tableCellStyle}>{member.HomeAddress}</td>
                    <td style={tableCellStyle}>{member.Phone}</td>
                    <td style={tableCellStyle}>
                      {member.MembershipCardNumber}
                    </td>
                    <td style={tableCellStyle}>
                      {member.MembershipExpiryDate}
                    </td>
                    <td style={tableCellStyle}>{member.MembershipStatus}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" style={tableCellStyle}>
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          ;
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => setIsmemberPrompt(false)} variant="outlined">
        Close
      </Button>
    </Box>
  );

  const borrowPrompt = (
    <Box
      sx={{
        height: "70vh",
        width: "50vw",
        border: "2px solid #000",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "999",
      }}
    >
      <form
        style={{
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        onSubmit={handleBorrowSubmit}
      >
        <label>
          Member ID:
          <input
            type="text"
            name="MemberID"
            value={borrowData.MemberID}
            onChange={handleBorrow}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="ISBN"
            value={borrowData.ISBN}
            onChange={handleBorrow}
          />
        </label>
        <label>
          Issue Date:
          <input
            type="text"
            name="IssueDate"
            value={borrowData.IssueDate}
            onChange={handleBorrow}
          />
        </label>
        {/* Add other input fields as needed */}
        <Button variant="oulined" type="submit">
          Submit
        </Button>
        <Button onClick={() => setIsBorrowPrompt(false)} variant="outlined">
          Close
        </Button>
      </form>
    </Box>
  );

  const mPropmt = (
    <Box
      sx={{
        height: "70vh",
        width: "50vw",
        border: "2px solid #000",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "999",
      }}
    >
      <form
        onSubmit={handleSubmit2}
        style={{
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <label>
          SSN:
          <input
            type="text"
            name="SSN"
            value={formData2.SSN}
            onChange={handleChange2}
          />
        </label>
        <label>
          FirstName:
          <input
            type="text"
            name="FirstName"
            value={formData2.FirstName}
            onChange={handleChange2}
          />
        </label>
        <label>
          LastName:
          <input
            type="text"
            name="LastName"
            value={formData2.LastName}
            onChange={handleChange2}
          />
        </label>
        <label>
          CampusAddress:
          <input
            type="text"
            name="CampusAddress"
            value={formData2.CampusAddress}
            onChange={handleChange2}
          />
        </label>
        <label>
          HomeAddress:
          <input
            type="text"
            name="HomeAddress"
            value={formData2.HomeAddress}
            onChange={handleChange2}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="Phone"
            value={formData2.Phone}
            onChange={handleChange2}
          />
        </label>

        {/* Add other input fields as needed */}
        <Button variant="oulined" type="submit">
          Submit
        </Button>
        <Button onClick={() => setIs_mprompt(false)} variant="outlined">
          Close
        </Button>
      </form>
    </Box>
  );

  const addBookPrompt = (
    <Box
      sx={{
        height: "70vh",
        width: "50vw",
        border: "2px solid #000",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "999",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <label>
          ISBN:
          <input
            type="text"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="Author"
            value={formData.Author}
            onChange={handleChange}
          />
        </label>
        <label>
          PublishedYear:
          <input
            type="text"
            name="PublishedYear"
            value={formData.PublishedYear}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />
        </label>
        <label>
          TotalCopies:
          <input
            type="text"
            name="TotalCopies"
            value={formData.TotalCopies}
            onChange={handleChange}
          />
        </label>
        <label>
          AvailableCopies:
          <input
            type="text"
            name="AvailableCopies"
            value={formData.AvailableCopies}
            onChange={handleChange}
          />
        </label>
        <label>
          IsReferenceBook:
          <input
            type="text"
            name="IsReferenceBook"
            value={formData.IsReferenceBook}
            onChange={handleChange}
          />
        </label>
        <label>
          IsRareBook:
          <input
            type="text"
            name="IsRareBook"
            value={formData.IsRareBook}
            onChange={handleChange}
          />
        </label>
        <label>
          IsMap:
          <input
            type="text"
            name="IsMap"
            value={formData.IsMap}
            onChange={handleChange}
          />
        </label>
        {/* Add other input fields as needed */}
        <Button type="submit">Submit</Button>
        <Button onClick={() => setIsBookPrompt(false)} variant="outlined">
          Close
        </Button>
      </form>
    </Box>
  );

  const reportTable = (
    <Box
      sx={{
        height: "auto",
        width: "100vw",
        zIndex: "999",

        backgroundColor: "white",
        position: "absolute",
      }}
    >
      {ReportData ? (
        <div style={{ margin: "20px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>ISBN</th>
                <th style={tableHeaderStyle}>Title</th>
                <th style={tableHeaderStyle}>Author</th>
                <th style={tableHeaderStyle}>Number of Copies</th>
                <th style={tableHeaderStyle}>Days Loaned Out</th>
              </tr>
            </thead>
            <tbody>
              {ReportData.map((book) => (
                <tr key={book.ISBN}>
                  <td style={tableCellStyle}>{book.ISBN}</td>
                  <td style={tableCellStyle}>{book.Title}</td>
                  <td style={tableCellStyle}>{book.Author}</td>
                  <td style={tableCellStyle}>{book.NumberOfCopies}</td>
                  <td style={tableCellStyle}>{book.DaysLoanedOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button onClick={() => setIsReportTable(false)} variant="outlined">
        Close
      </Button>
    </Box>
  );

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <Box sx={{ position: "relative", marginTop: "10vh" }}>
        <Box
          sx={{
            height: "60vh",
            width: "100vw",

            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => fetchData()}
              variant="outlined"
            >
              Show Books
            </Button>
          </Box>
          {bprompt && prompt}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => fetchMember()}
              variant="outlined"
            >
              Show Members
            </Button>
          </Box>
          {isMemberPrompt && memberprompt}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => fetchCatalog()}
              variant="outlined"
            >
              Show Catalog
            </Button>
          </Box>
          {isCatalogTable && catalogTable}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => fetchBorrowingTable()}
              variant="outlined"
            >
              Show Borrowing Table
            </Button>
          </Box>
          {isBorrowingTable && borrowingTable}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => setIs_mprompt(true)}
              variant="outlined"
            >
              Add Members
            </Button>
          </Box>
          {Is_mprompt && mPropmt}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => setIsBookPrompt(true)}
              variant="outlined"
            >
              Add Books
            </Button>
          </Box>
          {isBookPrompt && addBookPrompt}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => setIsBorrowPrompt(true)}
              variant="outlined"
            >
              Borrow a Book
            </Button>
          </Box>
          {isBorrowPrompt && borrowPrompt}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => setIsReturnPrompt(true)}
              variant="outlined"
            >
              Return a Book
            </Button>
          </Box>
          {isReturnPrompt && returnPrompt}
          <Box sx={{ height: "40%", width: "30%" }}>
            <Button
              sx={{ height: "50%", width: "70%" }}
              size="large"
              onClick={() => fetchReport()}
              variant="outlined"
            >
              Print Weekly Report
            </Button>
          </Box>
          {isReportTable && reportTable}
        </Box>
      </Box>
    </div>
  );
}

export default App;
