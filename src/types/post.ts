import { Tag } from "./tag";

export interface Category {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: Category;
  tags: Tag[];
  createdAt: string;
}
