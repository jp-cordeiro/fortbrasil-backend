import express from 'express';
import 'dotenv/config';
import './database';

const app = express();
console.log(process.env.PORT);

app.listen(process.env.PORT);
