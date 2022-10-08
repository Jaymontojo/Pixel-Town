const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const helmet = require('helmet');
const morgan = require('morgan');

function setupServer () {
  const app = express();
  const server = http.createServer(app);
  const io = socketio(server);

  //middleware
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('common'));
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  // io.on('connection', socket => {
  //   console.log('New Web Socket Connection', socket);
  // })

  app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from server!" }).status(200);
  });

  return server;
}

module.exports = setupServer;