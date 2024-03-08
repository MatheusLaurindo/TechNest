import { Navigate } from "react-router";
import { checkAuth } from "../../utils/CheckAuth";

export default function PrivateRoute({ children }) {
  const isAuthenticated = checkAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
