import express from 'express';
import http from 'http';
import app from './app.mjs'
const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("listening to port",port);
})