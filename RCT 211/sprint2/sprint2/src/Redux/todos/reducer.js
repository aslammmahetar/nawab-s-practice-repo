import { GET_TOD_SUC, POST_TOD_SUC, TOD_FAIL, TOD_REQ } from "../actionType";


const initalState = {
    todo: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case TOD_REQ: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_TOD_SUC: {
            return {
                ...state,
                isLoading: false,
                todo: payload
            }
        }
        case TOD_FAIL: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        case POST_TOD_SUC: {
            return {
                ...state,
                todo: [...state.todo, payload],
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}