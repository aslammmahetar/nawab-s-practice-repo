import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../Redux/authReducer/action";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, isError } = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      isError: store.authReducer.isError,
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  //
  //
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginDetail = {
      email,
      password,
    };
    //
    dispatch(handleLogin(loginDetail)).then(() => {
      navigate(location.state);
    });
  };

  return (
    <DIV auth={isAuth} err={isError}>
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
      <div>
        <h3>{isAuth ? "LOGIN SUCCESSFULL" : "LOGIN REQUIRED"}</h3>
      </div>
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
    border: ${({ err }) => (err ? "solid 1px red" : "solid black 1px")};
  }
  div {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }
`;
