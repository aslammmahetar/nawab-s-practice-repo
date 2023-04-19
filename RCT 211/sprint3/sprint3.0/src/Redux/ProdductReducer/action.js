import axios from "axios"
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_FAIL, POST_PRODUCT_REQ, POST_PRODUCT_SUCCESS } from "./actionTypes"

export const postReq = () => {
    return { type: POST_PRODUCT_REQ }
}

export const postFail = (payload) => {
    return { type: POST_PRODUCT_FAIL, payload: payload }
}

export const postSuc = (payload) => {
    return { type: POST_PRODUCT_SUCCESS, payload: payload }
}
export const getSuc = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload: payload }
}

export const addProduct = (product, initialState, setProduct) => (dispatch) => {
    dispatch(postReq());
    axios
        .post("http://localhost:8080/products", product)
        .then((res) => dispatch(postSuc(product)))
        .catch((er) => dispatch(postFail()));
    setProduct(initialState);
}