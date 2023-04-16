import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUC } from "../actionType"


export const loginreq = () => {
    return { type: LOGIN_REQ }
}

export const loginSuccess = (payload) => {
    return { type: LOGIN_SUC, payload: payload }
}

export const loginFail = () => {
    return { type: LOGIN_FAIL }

}