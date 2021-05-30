import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import userRouter from './routers/userRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

console.log("test test test")
config();
connectDB();
const app = express();
app.use(express.json());

/** Routes */
// app.get('/', (req, res) => res.json({
//     autor:"hiroimono",
//     message:"server running in port 5000 "
// }));

/** Middlewares */
app.use('/api/users', userRouter);

/** Not found pages and Error Handler Middlewares */
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Backend Sever is running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow.bold))