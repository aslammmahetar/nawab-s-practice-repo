import axios, {AxiosResponse} from "axios"
import { Todo, patch } from "./constant"

export const baseServerUrl = `http://localhost:8080`

export const postTodo =async (newTodo : Todo) => {
    let res: AxiosResponse<Todo> = await axios.post(`${baseServerUrl}/posts`, newTodo)
    console.log(res)
}

export const getTodo = async () => {
    let res = await axios.get(`${baseServerUrl}/posts`)
    return res.data
}

export const patchTodo = async (obj:patch, id?:number) => {
    let res: AxiosResponse<Todo> = await axios.patch(`${baseServerUrl}/posts/${id}`, obj)
    console.log(res)
}