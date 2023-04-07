import React, { useReducer } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
const initState = {
  email: "",
  password: "",
};

const reducre = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "email": {
      return {
        ...state,
        email: action.sanas,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.sanas,
      };
    }
    case "reset": {
      return {
        initState,
      };
    }
    default:
      break;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducre, initState);
  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <Input type="password" />
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
