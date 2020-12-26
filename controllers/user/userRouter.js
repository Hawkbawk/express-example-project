import express from 'express';
import UserController from './userController.js';

const userRouter = express.Router();

userRouter.get('/', UserController.getAll).get('/:id', UserController.findByID);

export default userRouter;
