import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

//Error Handling Middle Ware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
