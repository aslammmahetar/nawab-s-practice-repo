import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { putData } from "./api";
import { useNavigate } from "react-router-dom";

const baseServerUrl = `http://localhost:${process.env.REACT_APP_DEV_URL}`;
const initState = {
  name: "",
  type: "",
  rating: "",
  number_of_votes: "",
  price_starts_from: "",
  image: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INP": {
      console.log(action);
      return {
        ...state,
        [action.sanas.name]: action.sanas.value,
      };
    }
    case "UPDATE_INP": {
      console.log(action);
      return {
        ...state,
        ...action.sanas,
      };
    }
    case "RESET_FORM": {
      return {
        ...initState,
      };
    }
    default: {
      return {
        ...initState,
      };
    }
  }
};
function EditRestaurant() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { name, type, rating, number_of_votes, price_starts_from, image } =
    state;
  console.log(state);
  const { id } = useParams();

  const fetchById = async () => {
    try {
      let req = await axios.get(`${baseServerUrl}/restaurants/${id}`);
      let data = req.data;
      dispatch({ type: "UPDATE_INP", sanas: data });
      console.log(req.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchById();
  }, []);
  const handleSubimit = (e) => {
    e.preventDefault();
    putData(id, state);
    navigat("/");
    // handlePostRequest(state);
  };

  const handleChage = (e) => {
    console.log(e.target.name, e.target.value);
    let { name, value } = e.target;
    const sanas = {};
    sanas.name = name;
    sanas.value = value;
    if (
      name === "number_of_votes" ||
      name === "price_starts_from" ||
      name === "rating"
    ) {
      sanas.value = Number(value);
    }
    dispatch({
      type: "CHANGE_INP",
      sanas: sanas,
    });
  };

  const navigat = useNavigate();
  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubimit(e)}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="add name"
              value={name}
              onChange={handleChage}
            />
          </div>
          <div>
            <select name="type" value={type} onChange={handleChage}>
              <option value="">select type</option>
              <option value="ethnic">Ethnic</option>
              <option value="cafe">Cafe</option>
              <option value="casual_dining">Casual Dining</option>
              <option value="fine_dining">Fine Dining</option>
              <option value="fast_food">Fast Food</option>
            </select>
          </div>
          <div>
            <select name="rating" onChange={handleChage} value={rating}>
              <option value="">select rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="number_of_votes"
              placeholder="number_of_votes"
              value={number_of_votes}
              onChange={handleChage}
            />
          </div>
          <div>
            <input
              type="text"
              name="price_starts_from"
              placeholder="price_starts_from"
              value={price_starts_from}
              onChange={handleChage}
            />
          </div>
          <div>
            <input
              type="text"
              name="image"
              placeholder="image url"
              value={image}
              onChange={handleChage}
            />
          </div>
          <input type={"submit"} value="Submit" />
          <button onClick={() => navigat("/")}>
            Back To restaurant selection
          </button>
        </form>
      </div>
    </>
  );
}
export default EditRestaurant;
