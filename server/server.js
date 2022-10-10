const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const conversationRoutes = require('./routes/conversations');
const messageRoutes = require('./routes/messages');

function setupServer () {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);

  //middleware
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('common'));
  app.use('/api/users', userRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/conversations', conversationRoutes);
  app.use('/api/messages', messageRoutes);

  const users = []
  const connectUser = (userId, socketId) => {
    !users.some( user => user.userId === userId) &&
      users.push({ userId, socketId });
  };

  const disconnectUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
  };

  const getUser = (receiverId) => {
    return users.find(user => user.userId === receiverId)
  }
  io.on('connection', (socket) => {
    console.log("New Web Socket Connection");

    socket.on('connectUser', (userId) => {
      connectUser(userId, socket.id);
      io.emit('getUsers', users);
    });

    socket.on('sendMessage', ({ senderId, receiverId, content}) => {
      const user = getUser(receiverId);
      io.to(user.socketId).emit('getMessage', {senderId, content});
    })

    socket.on('disconnect', () => {
      console.log("A user has been disconnected")
    })
  });

  app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from server!" }).status(200);
  });

  return server;
}

module.exports = setupServer;