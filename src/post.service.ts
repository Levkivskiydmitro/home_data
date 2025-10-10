import fs from 'fs';
import path from 'path';

const arrayPath = path.join(__dirname, '../array.json');

export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

const postService = {
  async getAllPosts(skip?: string, take?: string): Promise<Post[]> {
    const posts: Post[] = JSON.parse(await fs.promises.readFile(arrayPath, 'utf-8'));

    let skipNum: number = Number(skip) || 0;
    let takeNum: number | undefined = take !== undefined ? Number(take) : undefined;

    if (isNaN(skipNum) || skipNum < 0) throw new Error('skip должен быть числом >= 0');
    if (takeNum !== undefined && (isNaN(takeNum) || takeNum < 0)) throw new Error('take должен быть числом >= 0');

    let result: Post[] = posts.slice(skipNum);
    if (takeNum !== undefined) result = result.slice(0, takeNum);

    return result;
  },

  async getPostById(id: number): Promise<Post | undefined> {
    const posts: Post[] = JSON.parse(await fs.promises.readFile(arrayPath, 'utf-8'));
    return posts.find((p) => p.id === id);
  },

  async createPost({ title, description, image }: { title: string; description: string; image: string }) {
    const posts: Post[] = JSON.parse(await fs.promises.readFile(arrayPath, 'utf-8'));

    const newPost: Post = {
      id: posts.length + 1,
      title,
      description,
      image,
    };

    posts.push(newPost);
    await fs.promises.writeFile(arrayPath, JSON.stringify(posts, null, 2));

    return newPost;
  },
};

export default postService;
