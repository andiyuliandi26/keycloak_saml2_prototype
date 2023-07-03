import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../provider/auth-Provider";

export const ProtectedRoute = () => {
  const { token } = useAuth();
 console.log("Access Token : " + token);
  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    window.location.href = "http://localhost:8000/saml2/login?next=http://localhost:4040";
    return null;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};