import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path=""></Route>
    </Routes>
  );
}

export default AllRoutes;
