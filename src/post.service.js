const fs = require('fs');
const path = require('path');

const arrayPath = path.join(__dirname, '../array.json');

const postService = {
  async getAllPosts(skip, take) {
    let posts = JSON.parse(await fs.promises.readFile(arrayPath, 'utf-8'));

    skip = Number(skip) || 0;
    take = take !== undefined ? Number(take) : undefined;

    if (isNaN(skip) || skip < 0) throw new Error('skip должен быть числом >= 0');
    if (take !== undefined && (isNaN(take) || take < 0)) throw new Error('take должен быть числом >= 0');

    let result = posts.slice(skip);
    if (take !== undefined) result = result.slice(0, take);

    return result;
  },

  async getPostById(id) {
    const posts = JSON.parse(await fs.promises.readFile(arrayPath, 'utf-8'));
    return posts.find((p) => p.id === id);
  },

  async createPost({ title, description, image }) {
    const posts = JSON.parse(await fs.promises.readFile(arrayPath, 'utf-8'));

    const newPost = {
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

module.exports = postService;
