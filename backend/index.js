// backend/index.js

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // For Jira API call

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/jira-auth", async (req, res) => {
  const { email, token, jiraDomain } = req.body;
  const authHeader =
    "Basic " + Buffer.from(`${email}:${token}`).toString("base64");

  try {
    const response = await fetch(
      `https://${jiraDomain}.atlassian.net/rest/api/3/myself`,
      {
        method: "GET",
        headers: {
          Authorization: authHeader,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Jira Auth Failed" });
    }

    const data = await response.json();
    return res.json({ success: true, data });
  } catch (error) {
    console.error("Error calling Jira API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
