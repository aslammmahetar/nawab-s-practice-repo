import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  postFail,
  postReq,
  postSuc,
} from "../Redux/ProdductReducer/action";
import axios from "axios";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: "",
  category: "",
  gender: "",
};

const Admin = () => {
  const [product, setProduct] = useState(initialState);

  //
  const productStore = useSelector((store) => store);
  console.log(productStore);
  const dispatch = useDispatch();

  //
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
    console.log(name, value);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product, initialState, setProduct));
  };

  //
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Product name"
          value={product.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          id=""
          placeholder="Product image"
          value={product.image}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="brand"
          id=""
          placeholder="Product Brand"
          value={product.brand}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="price"
          id=""
          placeholder="Product Price"
          value={product.price}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <select
          name="category"
          id=""
          value={product.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Categories</option>
          <option value="top_wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>
        <br />
        <select
          name="gender"
          id=""
          value={product.gender}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

export default Admin;

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: solid black;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* align-items: center; */
  }
  input,
  select,
  button {
    padding: 10px;
    border-radius: 8px;
  }
`;
