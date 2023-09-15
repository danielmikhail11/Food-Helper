import React from "react";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: AdminPage.js
// Description: shows the admin page
// First Written on: 10 july 2023
// Edited on: 10 july 2023

const AdminPage = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Header),
    React.createElement(HomePage),
  );
};

export default AdminPage;
