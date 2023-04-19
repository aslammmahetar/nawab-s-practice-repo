import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    error: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQ: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            }
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: payload
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: payload,
                isLoading: false,
                isAuth: true,
                isError: false
            }
        }
        default:
            return state
    }
}