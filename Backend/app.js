import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbconnection.js';
import { errorMiddleware } from './Error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();

dotenv.config({ path: './config/config.env' });

dbConnection();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', reservationRouter);

app.use(errorMiddleware);

export default app;
