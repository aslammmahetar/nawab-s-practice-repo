import axios from "axios"
import { GET_TODO_FAIL, GET_TODO_REQ, GET_TODO_SUC, POST_TODO } from "./actiontypes"

export const todoReq = () => {
    return { type: GET_TODO_REQ }
}

export const todoSuc = (payload) => {
    return { type: GET_TODO_SUC, payload: payload }
}

export const todoFail = () => {
    return { type: GET_TODO_FAIL }
}

export const postTodo = (payload) => {
    return { type: POST_TODO, payload: payload }
}

export const handlepost = (todo) => (dispatch) => {
    const newTodo = {
        title: todo,
        status: false,
    };
    dispatch(todoReq());
    axios
        .post("http://localhost:8080/todos", newTodo)
        .then((res) => dispatch(postTodo(res.data)))
        .catch((er) => dispatch(todoFail()));
};

export const getTodo = async (dispatch) => {
    dispatch(todoReq());
    axios
        .get("http://localhost:8080/todos")
        .then((res) => {
            dispatch(todoSuc(res.data));
        })
        .catch((er) => todoFail());
};