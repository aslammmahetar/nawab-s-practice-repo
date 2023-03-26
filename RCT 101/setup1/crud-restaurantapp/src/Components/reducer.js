export const initState = {
    loading: false,
    err: false,
    data: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING": {
            return {
                loading: true,
                err: false,
                data: [],
            };
        }
        case "ERROR": {
            return {
                loading: false,
                err: true,
                data: [],
            };
        }
        case "SUCCESS": {
            return {
                loading: false,
                err: false,
                data: action.sanas,
            };
        }
        default:
            throw new Error(`Invalid Action ${action.type}`);
    }
};