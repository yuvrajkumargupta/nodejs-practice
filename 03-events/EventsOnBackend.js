const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Step 1: Listen to the event
myEmitter.on('userLoggedIn', (username) => {
  console.log(`${username} has logged in!`);
});

// Step 2: Emit the event
myEmitter.emit('userLoggedIn', 'yuvraj_gupta');
