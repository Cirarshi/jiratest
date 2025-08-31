import React from "react";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../utils/tokenUtils";

const TaskDashboard = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    clearToken();
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Hi, {name}! 👋 Welcome back to your Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TaskDashboard;
