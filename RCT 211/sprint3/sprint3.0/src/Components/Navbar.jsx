import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <DIV>
      <Link to={"/"}>Home</Link>
      <Link to={"/add-product"}>Admin Page</Link>
      <Link to={"/login"}>Login Page</Link>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-evenly;
`;
