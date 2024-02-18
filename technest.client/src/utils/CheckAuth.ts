export const checkAuth = () => {
  const token = localStorage.getItem("jwt_token");

  if (!token) return false;

  const data = JSON.parse(atob(token.split(".")[1]));

  if (data.exp > Date.now() / 1000) {
    return true;
  } else {
    localStorage.removeItem("jwt_token");
    return false;
  }
};
