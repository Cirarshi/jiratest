export const simulateJiraAuth = async (email, patToken, jiraDomain) => {
  try {
    const response = await fetch("http://localhost:5000/jira-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token: patToken, jiraDomain }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("✅ Jira Auth Success:", result.data);
      return true;
    } else {
      console.log("❌ Jira Auth Failed:", result.error);
      return false;
    }
  } catch (err) {
    console.error("Error calling Jira API:", err);
    return false;
  }
};
