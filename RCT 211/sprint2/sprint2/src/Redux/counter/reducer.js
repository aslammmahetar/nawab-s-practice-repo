import { loadData, saveData } from "../../utils/localStorage";
import { ADD, REDUCE, RESET, } from "../actionType";

const initalState = {
    counter: loadData("counter") || 0
}

export const reducer = (state = initalState, { type, payload }) => {
    // console.log(state)
    switch (type) {
        case ADD:
            saveData("couter", state.counter + payload)
            return {
                ...state,
                counter: state.counter + payload
            }
        case REDUCE:
            saveData("couter", state.counter - payload)
            return {
                ...state,
                counter: state.counter - payload
            }
        case RESET: {
            saveData("couter", state.counter = 0)
            return {
                ...initalState
            }
        }
        default: {
            return state
        }
    }
}