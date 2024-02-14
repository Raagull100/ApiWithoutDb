import express from 'express';
const app = express()
import UserRouter from './user.mjs';
app.use('/user',UserRouter);
export default app;

