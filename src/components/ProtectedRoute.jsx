import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("userRole");

  // If token is missing, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If role is not super admin, redirect to login or an unauthorized page
  if (role !== "super admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
