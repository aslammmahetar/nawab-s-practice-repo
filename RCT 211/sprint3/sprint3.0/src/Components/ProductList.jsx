import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProdductReducer/action";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductList = () => {
  const productStore = useSelector((store) => store.productReducer.product);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(location);

  const paramsObj = {
    params: {
      gender: searchParams.getAll("gender"),
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProduct(paramsObj));
  }, [location.search]);

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
