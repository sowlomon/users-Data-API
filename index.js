import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
// const express = require("express");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  console.log('RUNNING');

  res.send('Hello from this side');
});

app.listen(PORT, () => {
  console.log(`app is Running on port : http://localhost:${PORT}`);
});