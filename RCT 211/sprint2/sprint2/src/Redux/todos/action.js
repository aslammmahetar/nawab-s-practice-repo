import { GET_TOD_SUC, POST_TOD_SUC, TOD_FAIL, TOD_REQ } from "../actionType"

// todo
export const todoReq = () => {
    return { type: TOD_REQ }
}

export const todoSuc = (payload) => {
    return { type: GET_TOD_SUC, payload: payload }
}

export const todoFails = () => {
    return { type: TOD_FAIL }
}


export const postSuc = (payload) => {
    return { type: POST_TOD_SUC, payload: payload }
}