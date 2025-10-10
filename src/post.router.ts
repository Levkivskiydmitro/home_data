import express, { Router } from 'express';
import postController from './post.controller';

const router: Router = express.Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);

export default router;
