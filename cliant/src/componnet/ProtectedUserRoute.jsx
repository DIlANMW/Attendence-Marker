import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import Login from "./pages/Login/Login";

const ProtectedUserRoute = () => {
  const [User] = useState(
    localStorage.getItem("role") === "User" ? true : null
  );

  return User ? <Outlet /> : <Navigate to={"/Login"} replace />;
};

export default ProtectedUserRoute;
