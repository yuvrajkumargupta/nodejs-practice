const EventEmitter = require('events'); 
const  traffic = new EventEmitter();   // object of EventEmitter
 
// Green light 
traffic.on('green',()=>{
      console.log('🟢 Green Light - go !');
      setTimeout(()=>{
        traffic.emit('yellow');
      }, 3000);
})
traffic.on('yellow', () => {
  console.log('Yellow light on!');
  setTimeout(()=>{
    traffic.emit('red');
  }, 2000);
});

traffic.on('red', () => {
  console.log('Red light on!- stop');
  setTimeout(()=>{
    traffic.emit('green');
  }, 5000);
});


traffic.emit('green');
