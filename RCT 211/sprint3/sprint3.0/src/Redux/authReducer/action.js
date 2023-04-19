import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from "./actionTypes"

export const loginReq = () => {
    return { type: LOGIN_REQ }
}

export const loginFails = (payload) => {
    return { type: LOGIN_FAIL, payload: payload }
}

export const loginSuc = (payload) => {
    return { type: LOGIN_SUCCESS, payload: payload }
}

export const handleLogin = (loginDetail) => (dispatch) => {
    dispatch(loginReq());
    return axios
        .post("https://reqres.in/api/login", loginDetail)
        .then((res) => dispatch(loginSuc(res.data.token)))
        .catch((er) => dispatch(loginFails(er.massage)));
}