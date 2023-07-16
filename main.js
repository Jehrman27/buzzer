const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const interfaceAddresses = require('interface-addresses')
const addresses = interfaceAddresses()
const player = require('sound-play')
const buzzerPath = path.join(__dirname, "audio/buzzer2.mp3");

let isBuzzerActive = true;

app.use(express.static(__dirname));
app.set('view engine', 'ejs'); //set ejs as engine
app.set('views', path.join(__dirname, '/views')); // set views folder for ejs

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/host', (req, res) => {
  res.render('host');
});

// list for connection from client
io.on('connection', (socket) => {
  // announce connection to console
  console.log('user connected')

  socket.on('disconnect', () => {
    // announce this connection disconnected to console
    console.log('user disconnected');
  });

  // listen for buzz in from client
  socket.on('buzz', (username) => {
    // announce user buzzed in to console
    console.log(`${username} Buzzed!`);

    // play buzzer sound only after to first buzz-in
    if (isBuzzerActive){
      player.play(buzzerPath);
      isBuzzerActive = false;
    }

    // emit the username of who buzzed in
    io.emit('buzzed', username);
  });


  socket.on('reset', () => {
    // reset buzzers for all devices and alow buzzer sound again
    console.log('Reset!');
    isBuzzerActive = true;
    io.emit('reset');
  });
});


// open server on localhost:3000
server.listen(3000, '0.0.0.0', () => {
  // post IP address to console for other devices to connect to
  console.log(addresses);
  console.log('Server is running on port 3000');
});