import express from 'express';
import PostController from './postController.js';

const postRouter = express.Router();

postRouter.get('/:id', PostController.getPost);

export default postRouter;
