import axios from "axios";

export const getData = (params = {}) => {
    return axios.get(`http://localhost:3004/restaurants`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.order
        }
    });
};

//post requst
export const PostAddRest = async (data) => {
    try {
        let req = await axios.post(`http://localhost:3004/restaurants`, data);
        console.log(req);
    } catch (error) { }
};