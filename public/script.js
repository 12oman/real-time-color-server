const socket = io(); // Connect to the server

// Listen for the 'colorChange' event from the server
socket.on('colorChange', (color) => {
  document.body.style.backgroundColor = color;
  console.log('Color changed to: ', color);
});

// Change color on click
document.body.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  socket.emit('changeColor', randomColor); // Send the new color to the server
});
