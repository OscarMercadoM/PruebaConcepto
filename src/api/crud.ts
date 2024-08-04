import axios, { AxiosResponse } from "axios";
import { PostType } from "../App";

export const GetPost = async <PostType>(): Promise<AxiosResponse<PostType>> => {
    return await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts`);
  };