import { useReducer } from "react";
/*
name > input,
 type > select,
    -ethnic,
    cafe,
    casual_dining,
    fast_food, 
    fine_dining 
 number_of_votes > input, 
 price_starts_from > input, 
 image > input
*/

const initState = {
  name: "",
  type: "",
  rating: "",
  number_of_votes: "",
  price_starts_from: "",
  image: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        [action.sanas.name]: action.sanas.value,
      };
    }
    default: {
      throw new Error("Invalid action");
    }
  }
};

function AddRest({ handleAddRest }) {
  const [state, dispatch] = useReducer(formReducer, initState);

  const { name, type, rating, number_of_votes, price_starts_from, image } =
    state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    handleAddRest(state);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanas = {
      name: name,
      value: value,
    };
    sanas.name = name;
    if (
      name === "number_of_votes" ||
      name === "rating" ||
      name === "price_starts_from"
    ) {
      sanas.value = Number(value);
    }
    dispatch({
      type: "CHANGE_INPUT",
      sanas: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            name="name"
            placeholder="Add Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <select value={type} name="type" onChange={handleChange}>
            <option value="">Select Restautant</option>
            <option value="ethnic">Ethnic</option>
            <option value="cafe">Cafe</option>
            <option value="casual_dining">Casual Dining</option>
            <option value="fast_food">Fast Food</option>
            <option value="fine_dining">Fine Dining</option>
          </select>
        </div>
        <div>
          <select name="rating" value={rating} onChange={handleChange}>
            <option value="">Rate Us</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={number_of_votes}
            name="number_of_votes"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={price_starts_from}
            type="number"
            name="price_starts_from"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={image}
            type="text"
            name="image"
            placeholder="Add Image Url"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}
export default AddRest;

/*
create form which will take restaurant data and add to the data and show on ui using axios.
*/
