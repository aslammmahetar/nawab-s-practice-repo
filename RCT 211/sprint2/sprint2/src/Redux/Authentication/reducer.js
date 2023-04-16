import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUC } from "../actionType"

const initialState = {
    isAuth: true,
    token: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQ: {
            return {
                ...state,
                isAuth: false,
            }
        }
        case LOGIN_SUC: {
            return {
                ...state,
                isAuth: true,
                token: payload
            }
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                isAuth: false,
                token: ""
            }
        }
        default:
            return state
    }
}