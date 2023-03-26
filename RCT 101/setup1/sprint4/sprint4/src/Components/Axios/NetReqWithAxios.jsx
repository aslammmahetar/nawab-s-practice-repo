import { mainDiv, headingStyle } from "./styles";
import RestaurantsDetails from "./RestDetail";
import { useEffect, useReducer } from "react";
import Pagination from "./Pagination";
import { fetchRestaurantreducer, initState } from "./RestauratnReducer";
import { getData } from "../api/api";
import { useState } from "react";
import AddRest from "./AddRest";
import { PostAddRest } from "../api/api";
import axios from "axios";
function AxiosReasturant() {
  const [state, dispatch] = useReducer(fetchRestaurantreducer, initState);
  const { loading, data, err } = state;
  console.log(data);
  /*
    loading : true
    data :res
    err:true
  */
  const [page, setPage] = useState(1);
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  const [order, setOrder] = useState("asc");
  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  const fetchandUpdateData = (page, order) => {
    dispatch({ type: "FETCh_LOADING" });
    getData({
      page: page,
      limit: 4,
      sort: "rating",
      order: order,
    })
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", sanas: res?.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  useEffect(() => {
    fetchandUpdateData(page, order);
  }, [page, order]);

  const handleAddRest = (data) => {
    PostAddRest(data).then(() => {
      fetchandUpdateData(page, order);
    });
  };

  const handleDelete = (id) => {
    // return axios.delete(`http://localhost:3004/restaurants/${id}`);
    console.log(id);
  };

  return (
    <div style={mainDiv}>
      <h2 style={headingStyle}>Network Request with Axios</h2>
      {/*  */}
      <AddRest handleAddRest={handleAddRest} />
      <select onChange={handleSort}>
        <option value="">---Sort By---</option>
        <option value="acs">Ascending</option>
        <option value="desc">Decending</option>
      </select>
      {loading ? (
        <h2>Loading...</h2>
      ) : err ? (
        <h2>Something went worng</h2>
      ) : (
        data.map((el) => (
          <RestaurantsDetails key={el.id} {...el} handleDelete={handleDelete} />
        ))
      )}
      {/*  */}
      <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page} />
    </div>
  );
}

export default AxiosReasturant;
