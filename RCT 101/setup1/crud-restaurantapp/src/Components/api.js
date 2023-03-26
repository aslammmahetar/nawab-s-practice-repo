import axios from "axios";
const baseServerUrl = `http://localhost:${process.env.REACT_APP_DEV_URL}`;


//Get Request
export const getData = (url, params = {}) => {
    return axios.get(`${baseServerUrl}/restaurants`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.order
        }
    });
};

//POST request
export const postData = (url, obj) => {
    return axios.post(url, obj)
}

//DELETE request
export const deleteData = (url) => {
    return axios.delete(url)
}

//
export const putData = (id, data) => {
    return axios({
        method: "put",
        baseURL: `${baseServerUrl}/restaurants/`,
        url: `${id}`,
        data: data
    })
}