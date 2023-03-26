import { Routes, Route } from "react-router-dom";
import EditRestaurant from "./EditRestaurant";
import Restaurant from "./Restaurant";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Restaurant />} />
      <Route path="/restaurant/edit/:id" element={<EditRestaurant />}></Route>
    </Routes>
  );
}
export default AllRoutes;
