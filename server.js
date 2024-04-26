const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Attach socket.io to the server

// Serve static files from the 'public' directory
app.use(express.static('public'));

let currentColor = '#C399B7'; // Initial color set to white

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('colorChange', currentColor); // Send the current color to just the connected client

  socket.on('changeColor', (color) => {
    console.log('Color changed to: ', color);
    currentColor = color;
    io.emit('colorChange', currentColor); // Broadcast the new color to all clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
