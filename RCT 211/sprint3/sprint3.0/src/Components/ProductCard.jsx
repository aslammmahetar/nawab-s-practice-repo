import React from "react";
import styled from "styled-components";

const ProductCard = ({ name, brand, category, price, image, gender }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{category}</p>
      <p>{gender}</p>
      <p>{brand}</p>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductCard;
