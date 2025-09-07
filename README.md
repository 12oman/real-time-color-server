# real-time-color-server

Conceived of as the simplest possible "full-stack" application, this a real-time color server that allows you to change the background color of a webpage by clicking anywhere on the body of the page. 


## Usage

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000` in your browser
5. Invite people to visit the `http://your.number.ip.address:3000` on their phone or another computer on the same network as the server.

## Notes
While this is for a simple demonstration, it is a full-stack application. The server is written in Node.js and the client is written in HTML and JavaScript.
The only complexity in this application is the use of WebSockets to broadcast the new color to all connected clients. When a new color is received, the server sends the new color to all connected clients. 

If you're interested, it does this using the emit method: 
```javascript 
socket.emit('changeColor', randomColor); 
``` 
from the `socket.io` package, where the 'changeColor' needed to be defined server-side. The server then broadcasts the new color to all connected clients.

## Lesson 
As long as you are on the same network as the server, you can change the color of the webpage from your phone or another computer. This is a great way to demonstrate the power of WebSockets and real-time communication.

## Exhibition Plan
In some conditions it can also work as an artwork. 

The title is "real-time-color-server" and the artist is "Roman Mitch". 

In order to exhibit this artwork please follow the additional instructions below:

1. The artwork should be exhibited in a room with a computer and a projector.



## License
ISC License



