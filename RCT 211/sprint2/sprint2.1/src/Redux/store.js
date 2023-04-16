import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const myMiddleware = (store) => (dispatch) => (action) => {
    console.log("store :", store)
    console.log("next :", dispatch)
    console.log("action :", action)

    if (typeof action === "function") {
        return action(dispatch)
    } else {
        return dispatch(action)
    }
}

export const store = legacy_createStore(reducer, applyMiddleware(thunk))