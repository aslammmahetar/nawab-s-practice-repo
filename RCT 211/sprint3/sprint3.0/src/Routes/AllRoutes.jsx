import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import React from "react";
import Admin from "../Pages/Admin";
import PrivateRoute from "./PrivateRout";
import HomePage from "../Pages/HomePage";
import EditPage from "../Pages/EditPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/add-product/:id" element={<EditPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*"></Route>
    </Routes>
  );
};

export default AllRoutes;
