export const initState = {
    loading: false,
    err: false,
    data: [],
};

export function fetchRestaurantreducer(state, action) {
    switch (action.type) {
        case "FETCh_LOADING": {
            return {
                loading: true,
                err: false,
                data: [],
            };
        }
        case "FETCH_SUCCESS": {
            return {
                loading: false,
                err: false,
                data: action.sanas,
            };
        }
        case "FETCH_ERROR": {
            return {};
        }
        default: {
            throw new Error(`invalid action ${action.type}`);
        }
    }
}