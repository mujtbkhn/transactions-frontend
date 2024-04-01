import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("tokenn");
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
