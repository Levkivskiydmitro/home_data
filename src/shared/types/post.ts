import { ReactNode } from "react";

export interface Post {
  createdAt: string | number | Date;
  category: any;
  shortDescription: ReactNode;
  image: string | undefined;
  id: number;
  title: string;
  content: string;
  tags: number[];
  likes: number;
}


