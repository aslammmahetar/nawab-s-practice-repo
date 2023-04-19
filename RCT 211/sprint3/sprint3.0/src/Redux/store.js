import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { reducer as productReducer } from './ProdductReducer/reducer'
import thunk from 'redux-thunk'
import { reducer as authReducer } from './authReducer/reducer'
const reducer = combineReducers({
    productReducer,
    authReducer
})

export const store = legacy_createStore(reducer, applyMiddleware(thunk))