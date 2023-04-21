import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  //searchParams
  const [searchParam, setSearchParams] = useSearchParams();
  //genderFilter
  const initialGender = searchParam.getAll("gender");
  const [gender, setGender] = useState(initialGender || []);
  //categoryFilter
  const initialCat = searchParam.getAll("category");
  const [category, setCategory] = useState(initialCat || []);
  //ascending or descending sorting
  const initialParam = searchParam.get("order");
  const [order, setOrder] = useState(initialParam || "");

  useEffect(() => {
    let params = {
      gender,
      category,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [gender, category, order]);

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
    console.log(gender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCat = [...category];
    if (newCat.includes(value)) {
      newCat = newCat.filter((el) => el !== value);
    } else {
      newCat.push(value);
    }
    setCategory(newCat);
    console.log(category);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  return (
    <DIV>
      <h1>side bar</h1>
      <hr />
      <h3>Filter by gender</h3>
      <div>
        <input
          type="checkbox"
          checked={gender.includes("male")}
          value={"male"}
          onChange={handleGender}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={gender.includes("female")}
          value={"female"}
          onChange={handleGender}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={gender.includes("kids")}
          value={"kids"}
          onChange={handleGender}
        />
        <label>Kids</label>
      </div>
      <br />
      <h3>Filter by category</h3>
      <div>
        <input
          type="checkbox"
          checked={category.includes("top-wear")}
          value={"top-wear"}
          onChange={handleCategory}
        />
        <label>Top wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"bottom-wear"}
          checked={category.includes("bottom-wear")}
          onChange={handleCategory}
        />
        <label>Bottom wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={category.includes("shoes")}
          value={"shoes"}
          onChange={handleCategory}
        />
        <label>Shoes</label>
      </div>
      <br />
      <h3>Sort by price</h3>
      <input
        type="radio"
        name="order"
        defaultChecked={order == "asc"}
        value={"asc"}
        onChange={handleSort}
      />
      <label>Ascending</label>
      <br />
      <input
        type="radio"
        name="order"
        defaultChecked={order == "desc"}
        value={"desc"}
        onChange={handleSort}
      />
      <label>Descending</label>
    </DIV>
  );
};
export default SideBar;

const DIV = styled.div`
  width: 40%;
  border: solid black;
`;
