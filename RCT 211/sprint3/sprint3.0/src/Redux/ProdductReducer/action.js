import axios from "axios"
import { DELETE_PRODUCT, GET_PRODUCT_SUCCESS, PATCH_PRODUCT, POST_PRODUCT_FAIL, POST_PRODUCT_REQ, POST_PRODUCT_SUCCESS } from "./actionTypes"

const postReq = () => {
    return { type: POST_PRODUCT_REQ }
}
const postFail = (payload) => {
    return { type: POST_PRODUCT_FAIL, payload: payload }
}
const postSuc = (payload) => {
    return { type: POST_PRODUCT_SUCCESS, payload: payload }
}
const getSuc = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload: payload }
}


//POST
export const addProduct = (product, initialState, setProduct) => (dispatch) => {
    dispatch(postReq());
    axios
        .post("http://localhost:8080/products", product)
        .then((res) => dispatch(postSuc(product)))
        .catch((er) => dispatch(postFail()));
    setProduct(initialState);
}


//GET
export const getProduct = (paramsObj) => (dispatch) => {
    dispatch(postReq())
    axios
        .get("http://localhost:8080/products", paramsObj)
        .then((res) => dispatch(getSuc(res.data)))
        .catch((er) => dispatch(postFail()))
}


//DELETE
export const deleteProduct = (id) => (dispatch) => {
    dispatch(postReq())

    let payload = []

    axios.get("http://localhost:8080/products").then((res) => {
        payload = res.data.filter((el) => el.id !== id)
    })

    return axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
        dispatch({ type: DELETE_PRODUCT, payload })
    }).catch(() => postFail())
}


//PATCH
export const patchProduct = (id, price) => (dispatch) => {
    dispatch(postReq())

    axios.patch(`http://localhost:8080/products/${id}`, price).then((res) => {
        dispatch({ type: PATCH_PRODUCT, payload: res.data.price = price })
    }).catch(() => dispatch(postFail()))
}