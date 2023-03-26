import { restDivStyle } from "./styles";

function RestaurantsDetails(el, handleDelete) {
  return (
    <div style={restDivStyle} key={el.id}>
      <img src={el.image} alt="" />
      <h3>{el.name}</h3>
      <h4>Type : {el.type}</h4>
      <p>Number of votes :{el.number_of_votes}</p>
      <p>Rating : {el.rating}</p>
      <h3>Price starts form : {el.price_starts_from}</h3>
      <button
        onClick={() => {
          handleDelete(el.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default RestaurantsDetails;
