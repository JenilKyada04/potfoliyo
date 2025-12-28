import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  if (!isLoggedIn()) {
    return <Navigate to="/LoginPage" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
