export const storeToken = (token, expiresInSeconds) => {
  const expiry = Date.now() + expiresInSeconds * 1000;
  localStorage.setItem("authToken", token);
  localStorage.setItem("tokenExpiry", expiry);
};

export const clearToken = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiry");
};

export const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
  const expiry = localStorage.getItem("tokenExpiry");

  if (!token || !expiry) return false;
  return Date.now() < expiry;
};
