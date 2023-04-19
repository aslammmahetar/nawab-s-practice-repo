import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import React from "react";
import Admin from "../Pages/Admin";
import PrivateRout from "./PrivateRout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route
        path="/add-product"
        element={
          <PrivateRout>
            <Admin />
          </PrivateRout>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*"></Route>
    </Routes>
  );
};

export default AllRoutes;
