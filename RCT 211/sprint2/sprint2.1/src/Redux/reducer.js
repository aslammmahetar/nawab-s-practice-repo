import { GET_TODO_FAIL, GET_TODO_REQ, GET_TODO_SUC, POST_TODO } from "./actiontypes"

const initialState = {
    todos: [],
    isError: false,
    isLoading: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TODO_REQ: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_TODO_SUC: {
            return {
                ...state,
                todos: payload,
                isLoading: false,
            }
        }
        case GET_TODO_FAIL: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case POST_TODO: {
            return {
                ...state,
                isLoading: false,
                todos: [...state.todos, payload]
            }
        }
        default: {
            return state
        }
    }
}