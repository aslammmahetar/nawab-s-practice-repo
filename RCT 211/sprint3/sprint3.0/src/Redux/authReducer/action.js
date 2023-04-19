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

// export 