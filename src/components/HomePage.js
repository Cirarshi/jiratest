// src/components/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Welcome Back to JIRA Test App</h1>
      <p></p>
      <p>Hope your are doing good, Go ahead and login</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/login">
          <button style={{ marginRight: "10px" }}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
