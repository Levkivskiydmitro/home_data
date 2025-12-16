
import { PrismaClient } from '@prisma/client';
import {CreatePostChecked,UpdatePostChecked,} from '../shared/types/post.types';

const prisma = new PrismaClient();

export const postsService = {
  async getAll() {
    try {
      return await prisma.post.findMany();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Error fetching posts');
    }
  },

  async create(data: CreatePostChecked) {
    try {
      return await prisma.post.create({ data });
    } catch (error) {
      console.error('Error creating post:', error);
      throw new Error('Error creating post');
    }
  },

  async update(id: number, data: UpdatePostChecked) {
    try {
      return await prisma.post.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.error('Error updating post:', error);
      throw new Error('Error updating post');
    }
  },

  async delete(id: number) {
    try {
      const post = await prisma.post.delete({
        where: { id },
      });
      return post;
    } catch (error: any) {
      if (error.code === 'P2025') {

        return null;
      }
      console.error('Error deleting post:', error);
      throw new Error('Error deleting post');
    }
  },
};
