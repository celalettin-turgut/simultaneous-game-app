import express from 'express';
import { config } from 'dotenv';
// import connectDB from './config/db.js';
import colors from 'colors';

import basicRouter from './routers/basicRouter.js';

config();
// connectDB();
const app = express();
// app.use(express.json());

/** Routes */
app.get('/', (req, res) => res.send('App started'));

/** Middlewares */
app.use('/api', basicRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Backend Sever is running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow.bold))