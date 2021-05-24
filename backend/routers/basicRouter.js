import express from 'express';
import { getData } from '../controllers/basicControllers.js';
const basicRouter = express.Router();

basicRouter.route('/').get(getData);

export default basicRouter;