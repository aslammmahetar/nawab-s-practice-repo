import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from './counter/reducer'
import { reducer as todoReducer } from "./todos/reducer";
import { reducer as authReducer } from "./Authentication/reducer";

const rootReducer = combineReducers({
    counterReducer,
    todoReducer,
    authReducer
})

const logger = (store) => (next) => (action) => {
    console.log(store)
    console.log(next)
    console.log(action)
}

export const store = legacy_createStore(rootReducer)