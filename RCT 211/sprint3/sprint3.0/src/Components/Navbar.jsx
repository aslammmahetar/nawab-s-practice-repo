import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProduct } from "../Redux/ProdductReducer/action";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query");
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const paramsObj = {
    params: {
      q: query && query,
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    let params = {};
    query && (params.query = query);
    setSearchParams(params);
  }, [query]);

  const ref = useRef();

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      dispatch(getProduct(paramsObj));
    }, 2000);
  }, [query]);

  return (
    <DIV>
      <Link to={"/"}>Home</Link>
      <Link to={"/add-product"}>Admin Page</Link>
      <Link to={"/login"}>Login Page</Link>
      <input type="text" placeholder="search here" onChange={handleSearch} />
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
