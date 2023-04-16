import { ADD, REDUCE, RESET } from "../actionType"



//counter
export const addFunc = (payload) => {
    return { type: ADD, payload: payload }
}
export const reduceFunc = (payload) => {
    return { type: REDUCE, payload: payload }
}
export const resetFunc = () => {
    return { type: RESET }
}

