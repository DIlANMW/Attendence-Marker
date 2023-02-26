import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import jwt from "jsonwebtoken";

// const UseAuth = () => {
//   const user = localStorage.getItem("token");
//   // const admin = localStorage.getItem("admin");
//   // const varify = jwt.decode(localStorage.getItem("token"));
//   if (user) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const protectedRout = () => {
//   const auth = UseAuth();

//   return auth ? <Outlet /> : <Login />;
// };

// export default protectedRout;
const ProtectedRoute = () => {
  const [Admin] = useState(
    localStorage.getItem("role") === "Admin" ? true : null
  );

  return Admin ? <Outlet /> : <Navigate to={"/Login"} replace />;
};

export default ProtectedRoute;
