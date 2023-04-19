import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProdductReducer/action";
import ProductList from "../Components/ProductList";

const HomePage = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default HomePage;
