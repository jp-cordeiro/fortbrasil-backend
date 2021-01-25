import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import cors from 'cors';
import 'dotenv/config';

import './database';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: error.message,
    });
  },
);

app.listen(process.env.PORT);
