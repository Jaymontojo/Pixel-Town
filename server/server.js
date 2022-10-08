const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

function setupServer () {
  const app = express();
  const server = http.createServer(app);
  const io = socketio(server);

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  io.on('connection', socket => {
    console.log('New Web Socket Connection', socket);
  })

  app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  return server;
}

module.exports = setupServer;