import axios, { AxiosResponse } from "axios";
import { sts, todoObj } from "../constant";

export const postTodo = async (todo: todoObj) => {
  try {
    let req: AxiosResponse<todoObj> = await axios.post(
      "http://localhost:8080/todos",
      todo
    );
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async () => {
  try {
    let req = await axios.get("http://localhost:8080/todos");
    return req.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchTodo = async (patchUpdate: sts, id?: number) => {
  try {
    let req: AxiosResponse<todoObj> = await axios.patch(
      `http://localhost:8080/todos/${id}`,
      patchUpdate
    );
    return req;
  } catch (error) {
    console.log(error);
  }
};
