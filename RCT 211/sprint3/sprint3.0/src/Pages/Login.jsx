import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFails, loginReq, loginSuc } from "../Redux/authReducer/action";
import axios from "axios";
import styled from "styled-components";
import { store } from "../Redux/store";

const Login = () => {
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((store) => store.authReducer.isAuth);

  const dispatch = useDispatch();
  // console.log(dispatch);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginDetail = {
      email,
      password,
    };
    dispatch(loginReq());
    axios
      .post("https://reqres.in/api/login", loginDetail)
      .then((res) => dispatch(loginSuc(res.data.token)))
      .catch((er) => dispatch(loginFails(er.massage)));
  };

  return (
    <DIV>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmial(e.target.value)}
        />
        <br />

        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  border: solid black;
  width: 400px;
  margin: auto;
  padding: 10px;
  form {
    margin: auto;
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    padding: 10px;
    border-radius: 7px;
    /* border: ; */
  }
`;
