import { Link } from "react-router-dom";

function RestDetailCard({
  id,
  image,
  name,
  type,
  rating,
  number_of_votes,
  price_starts_from,
  handleDelete,
}) {
  return (
    <>
      <div key={id}>
        <img src={image} alt={name} />
        <h2>Name :{name}</h2>
        <p>Type : {type}</p>
        <p>Rating: {rating}</p>
        <p>Number Of Votes : {number_of_votes}</p>
        <h3>Price Starts From : {price_starts_from}</h3>
        <button onClick={() => handleDelete(id)}>DELETE</button>
        <Link to={`/restaurant/edit/${id}`}>
          <button>Edit Details</button>
        </Link>
      </div>
    </>
  );
}
export default RestDetailCard;
