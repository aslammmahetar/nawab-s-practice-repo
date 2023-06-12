import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Home from "../Components/Home";
import AddNotes from "../Components/AddNotes";
import Noets from "../Components/Noets";
import Edit from "../Components/Edit";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/addnotes" element={<AddNotes />}></Route>
      <Route path="/notes" element={<Noets />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
}

export default Router;
