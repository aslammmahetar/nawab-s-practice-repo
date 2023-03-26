import { useEffect, useState } from "react";
import { useReducer } from "react";
import { getData, postData } from "./api";
import { reducer, initState } from "./reducer";
import { deleteData } from "./api";
import RestDetailCard from "./RestaurantCard";
import AddRestaurant from "./AddRest";
const baseServerUrl = `http://localhost:${process.env.REACT_APP_DEV_URL}`;
console.log(baseServerUrl);

function Restaurant() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { loading, err, data } = state;
  //   console.log(data);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchAndRenderData(`${baseServerUrl}/restaurants`);
  }, [page, order]);
  //
  const fetchAndRenderData = async (url) => {
    try {
      dispatch({ type: "LOADING" });
      let req = await getData(url, {
        page: page,
        limit: 4,
        sort: "rating",
        order: order,
      });
      dispatch({ type: "SUCCESS", sanas: req.data });
      console.log(req.data);
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const handleDelete = (id, url) => {
    deleteData(`${baseServerUrl}/restaurants/${id}`);
    fetchAndRenderData(url);
  };

  const handlePostRequest = (data, url) => {
    postData(`${baseServerUrl}/restaurants`, data).then((res) =>
      console.log(res)
    );
    fetchAndRenderData(url);
  };

  return (
    <div>
      <AddRestaurant handlePostRequest={handlePostRequest} />
      <button onClick={() => setOrder("asc")}>ASC</button>
      <button onClick={() => setOrder("desc")}>DESC</button>
      {loading ? (
        <h2>Loading Please wait</h2>
      ) : err ? (
        <h2>Something went wrong</h2>
      ) : (
        data?.map((el) => (
          <RestDetailCard key={el.id} {...el} handleDelete={handleDelete} />
        ))
      )}
      <button onClick={() => setPage(page - 1)}>PREV</button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
}
export default Restaurant;
