const users = [
  { name: "Admin", username: "admin@xyz.com", password: "admin@123" },
  { name: "Test User", username: "user@xyz.com", password: "user@123" },
];

export const validateUser = (username, password) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};
