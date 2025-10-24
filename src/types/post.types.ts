

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostWithTags extends Post {
  tags: string[];
}


export interface CreatePost {
  title?: string;
  content?: string;
  image?: string;
  likes?: number;
}


export interface CreatePostChecked {
  title: string;
  content: string;
  image: string;
  likes: number;
}

export interface UpdatePost {
  title?: string;
  content?: string;
  image?: string;
  likes?: number;
}

export interface UpdatePostChecked {
  title: string;
  content: string;
  image: string;
  likes: number;
}
