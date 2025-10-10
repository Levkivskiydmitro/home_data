import { Request, Response } from 'express';
import postService from './post.service';

const postController = {
  getAllPosts: async (req: Request, res: Response) => {
    try {
      const { skip, take } = req.query;
      const posts = await postService.getAllPosts(skip as string, take as string);
      res.status(200).json(posts);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Ошибка при получении постов' });
    }
  },

  getPostById: async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: 'ID должен быть числом' });


      const post = await postService.getPostById(id);
      if (!post) return res.status(404).json({ error: 'Пост не найден' });

      res.json(post);
    } catch {
      res.status(500).json({ error: 'Ошибка при получении поста' });
    }
  },

  createPost: async (req: Request, res: Response) => {
    try {
      const { title, description, image } = req.body;
      if (!title || !description || !image) {
        return res.status(422).json({ error: 'Все поля обязательны' });
      }

      const newPost = await postService.createPost({ title, description, image });
      res.status(201).json(newPost);
    } catch {
      res.status(500).json({ error: 'Ошибка при создании поста' });
    }
  },
};

export default postController;
