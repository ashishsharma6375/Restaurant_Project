import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbconnection.js';
import { errorMiddleware } from './Error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();

dotenv.config({ path: './config/config.env' });

// DB connection
dbConnection();

// ✅ ALLOWED FRONTEND ORIGINS
const allowedOrigins = [
  "https://restaurant-project-gold-kappa.vercel.app",
  "https://restaurant-project-h7xtieemc-ashish-sharmas-projects-baf65a06.vercel.app"
];

// ✅ CORS FIX
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow server-to-server / Postman

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS not allowed"), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.options("*", cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter);

// Error middleware
app.use(errorMiddleware);

export default app;
