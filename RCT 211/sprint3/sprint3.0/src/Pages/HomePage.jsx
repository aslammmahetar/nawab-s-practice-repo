import ProductList from "../Components/ProductList";
import SideBar from "../Components/SideBar";
import styled from "styled-components";

const HomePage = () => {
  return (
    <DIV>
      <SideBar />
      <ProductList />
    </DIV>
  );
};

export default HomePage;
const DIV = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  border: solid black;
  justify-content: space-between;
`;
