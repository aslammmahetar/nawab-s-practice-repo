import axios from "axios";
import { useEffect, useReducer } from "react";
import { useState } from "react";
const getData = (url, params = {}) => {
  return axios.get(url, {
    _page: params.page,
    _limit: params._limit,
    _sort: params._sort,
    _order: params.order,
  });
};

const initialState = {
  loading: false,
  err: false,
  data: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING": {
      return {
        ...state,
        loading: true,
        err: false,
        data: [],
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        err: false,
        data: action.sanas,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        err: true,
        data: [],
      };
    }
    default: {
      throw new Error(`Invalid Action`);
    }
  }
};

function AxiosReasturant() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, err, data } = state;
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchRenderData(
      `http://localhost:3004/restaurants?_page=${page}&_limit=${limit}`
    );
  }, [page, limit]);
  const fetchRenderData = async (url) => {
    try {
      dispatch({ type: "FETCH_LOADING" });
      let res = await getData(url, {
        page: page,
        limit: limit,
        order: order,
        sort: "rating",
      });
      dispatch({ type: "FETCH_SUCCESS", sanas: res?.data });
      // setTotalPage()
      setTotalPage(res.headers["x-total-count"] / 4);
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        border: "solid grey",
        marginTop: "30px",
        borderRadius: "10px",
        backgroundColor: "lavender",
        paddingBottom: "15px",
        marginBottom: "15px",
      }}
    >
      <h2
        style={{
          backgroundColor: "lightcoral",
          padding: "10px",
          color: "white",
        }}
      >
        Network Request with Axios
      </h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : err ? (
        <h1>Something went wrong...</h1>
      ) : (
        data.map((el) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "20px",
                padding: "25px",
                borderRadius: "15px",
              }}
            >
              <img src={el.image} alt="" style={{ borderRadius: "10px" }} />
              <h3>
                Name : {el.name} -- {el.id}
              </h3>
              <p>rating : {el.rating}</p>
              <p>Type : {el.type}</p>
              <p>Number Of Votes : {el.number_of_votes}</p>
            </div>
          );
        })
      )}
      <div
        style={{
          //   border: "1px solid",
          width: "40%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{
            padding: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            fontSize: "15px",
            borderRadius: "7px",
            backgroundColor: "lightcoral",
            color: "white",
          }}
        >
          Prev
        </button>
        <button
          style={{
            padding: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            fontSize: "15px",
            borderRadius: "7px",
            backgroundColor: "lightcoral",
            color: "white",
          }}
          disabled
        >
          {page}
        </button>
        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          style={{
            padding: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            fontSize: "15px",
            borderRadius: "7px",
            backgroundColor: "lightcoral",
            color: "white",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AxiosReasturant;
