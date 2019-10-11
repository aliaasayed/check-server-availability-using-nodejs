const express = require("express");
const server = express();
const timeout = require('connect-timeout');

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

server.use(timeout(5000));
server.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
  if (!req.timedout)
    next();
}

const serverRouter = require('./controllers/serverController')
server.use("/", serverRouter);

//start node server
server.listen(3000, function () {
  console.log("Starting listen...");
});

module.exports = server;