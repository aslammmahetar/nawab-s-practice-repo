import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/ProdductReducer/action";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, brand, category, price, image, gender }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{category}</p>
      <p>{gender}</p>
      <p>{brand}</p>
      <h3>{price}</h3>
      <div>
        <button onClick={handleDelete}>Delete</button>

        <Link to={`/add-product/${id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
