
import express from 'express';
import router from './src/routes/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import { resolve } from 'path';

import "./src/database"

import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static(resolve(__dirname,'uploads')));

app.use(router);

export default app;