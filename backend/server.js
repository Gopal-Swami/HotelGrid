import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import gallaryRoutes from './routes/gallaryRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
// import uploadRoutes from './routes/fileUploadRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import path from 'path';

dotenv.config();
connectDB();
const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/hotels', hotelRoutes);
app.use('/api/v1/gallary', gallaryRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/enquiries', enquiryRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

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
