import { DELETE_PRODUCT, GET_PRODUCT_SUCCESS, PATCH_PRODUCT, POST_PRODUCT_FAIL, POST_PRODUCT_REQ, POST_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    product: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_PRODUCT_REQ: {
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        }
        case POST_PRODUCT_FAIL: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: [...state.product, payload]
            }
        }
        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        }
        default:
            return state
    }
}