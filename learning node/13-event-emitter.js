const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response',(name,id) => {
  console.log(`data recieved name: ${name} id: ${id}`);
})
customEmitter.on('response',() => {
  console.log(`kuch bhii`);
})

customEmitter.emit('response','hooo',34);

// can make same keyword ke many function
// firstly we made a .on function then .emit
