const postService = require('./post.service');

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const { skip, take } = req.query;
      const posts = await postService.getAllPosts(skip, take);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении постов' });
    }
  },

  getPostById: async (req, res) => {
    try {
      const id = +req.params.id;
      if (isNaN(id)) return res.status(400).json({ error: 'ID должен быть числом' });

      const post = await postService.getPostById(id);
      if (!post) return res.status(404).json({ error: 'Пост не найден' });

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении поста' });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, description, image } = req.body;
      if (!title || !description || !image) {
        return res.status(422).json({ error: 'Все поля обязательны' });
      }

      const newPost = await postService.createPost({ title, description, image });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при создании поста' });
    }
  },
};

module.exports = postController;
