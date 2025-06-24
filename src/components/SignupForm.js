import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, addUser } from "../utils/userUtils";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const allUsers = getAllUsers();
    const userExists = allUsers.find((u) => u.username === username);

    if (userExists) {
      alert("Username already exists!");
      return;
    }

    addUser(username, password);
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
