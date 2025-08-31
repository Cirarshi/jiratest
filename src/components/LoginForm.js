import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../utils/userUtils";
import { storeToken } from "../utils/tokenUtils";
import { simulateJiraAuth } from "../utils/jiraAuthUtils";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = validateUser(username, password);
    if (user) {
      console.log("✅ Local user validated");

      // Optional: test Jira auth here:
      const jiraAuthResult = await simulateJiraAuth(
        "utkarsh@xyz.com",
        "ATATT3xFfGF0oRcUqj7of_dlRrfk_0iRsIbfHUn6y9vjrrYLdlNFV0i1lu2Sz_sl2sRmi83cSI7QBhoM0iBGVTt50i3TbAkU6GHrL1UqfUuXFrTiZpk1RE3ims6yCxhGFDZ0YFckl-Nkdq7Gtz9Nr6Ra1Da9XDyZDxb5OnkyUGpekORCD4E8GRU=B6626A75",
        "utkarshcompany"
      );
      console.log("Jira auth result:", jiraAuthResult);

      storeToken("fake-jwt-token", 60);

      localStorage.setItem("username", username);
      localStorage.setItem("name", user.name);

      navigate("/dashboard");
    } else {
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ textAlign: "center", marginTop: "20%" }}
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ marginTop: "20px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ marginTop: "20px" }}
      />
      <br />
      <button type="submit" style={{ marginTop: "20px" }}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
