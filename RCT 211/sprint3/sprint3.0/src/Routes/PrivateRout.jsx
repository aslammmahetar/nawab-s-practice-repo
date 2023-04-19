import React from "react";
import { useSelector } from "react-redux";
import Admin from "../Pages/Admin";
import Login from "../Pages/Login";

const PrivateRout = () => {
  const auth = useSelector((store) => store.authReducer.isAuth);

  return auth ? <Admin /> : <Login />;
};

export default PrivateRout;
