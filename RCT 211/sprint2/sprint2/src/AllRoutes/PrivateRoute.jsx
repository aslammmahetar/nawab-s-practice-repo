import { useSelector } from "react-redux";
import Login from "../Components/Login";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.authReducer);

  return isAuth ? children : <Login />;
};

export default PrivateRoute;
