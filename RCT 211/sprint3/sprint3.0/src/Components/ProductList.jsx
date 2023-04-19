import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProdductReducer/action";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductList = () => {
  const productStore = useSelector((store) => store.productReducer.product);
  console.log(productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <DIV>
        {productStore.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </DIV>
    </div>
  );
};

export default ProductList;
const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  img {
    width: 80%;
  }
  div {
    border: 1px solid black;
  }
`;
