const express = require("express");
const server = express();

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

const serverRouter = require('./controllers/serverController')
server.use("/", serverRouter);

//start node server
server.listen(3000, function () {
  console.log("Starting listen...");
});
