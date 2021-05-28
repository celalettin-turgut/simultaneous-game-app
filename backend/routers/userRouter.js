import express from 'express';
import { authUser } from '../controllers/userControllers.js';
const userRouter = express.Router();

userRouter.post("/login", authUser);

export default userRouter;