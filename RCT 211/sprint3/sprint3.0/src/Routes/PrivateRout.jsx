import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((store) => store.authReducer.isAuth);
  //
  const loction = useLocation();
  //
  return auth ? children : <Navigate state={loction.pathname} to={"/login"} />;
};

export default PrivateRoute;
