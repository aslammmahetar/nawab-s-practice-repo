import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { patchProduct } from "../Redux/ProdductReducer/action";

const EditPage = () => {
  const productDetail = useSelector((store) => store.productReducer.product);
  const { id } = useParams();
  const [price, setPrice] = useState("");
  console.log(productDetail);

  useEffect(() => {
    const data = productDetail.find((el) => el.id === +id);
    setPrice(data.price);
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    const data = { price };
    dispatch(patchProduct(id, data));
  };

  return (
    <div>
      <input value={price} onChange={handleChange} />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default EditPage;
