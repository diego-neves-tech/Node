//const util = require('util');
const EventEmitter = require('events');
//console.log(util.inspect(EventEmitter))

const event = new EventEmitter();

// Ordered food  📲
const event1 = function (food) {console.log('Ordered: '+ food); event.emit('event2', food);};

// Delivered food 🛵
const event2 = function (food) {console.log('ring ring'); event.emit('event3', food);};

// Payed the food 💰
const event3 = function (food) {console.log('Enjoy: '+ food);};

// Event waiting for emit the sinals 💤
event.on('event1', event1);
event.on('event2', event2);
event.once('event3', event3);

event.emit('event1', 'pizza'); // pizza ordered 🍕