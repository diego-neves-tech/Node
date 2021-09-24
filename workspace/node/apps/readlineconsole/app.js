const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think about the terminal?', answer =>{
  console.log('Your opinion was: ' + answer);
  rl.close();
});
