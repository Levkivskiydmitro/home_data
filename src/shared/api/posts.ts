import { http } from "./http";
import type { Post } from "../../shared/types/post";

export const PostsApi = {
  getAll: () => http<Post[]>("/posts"),
};
