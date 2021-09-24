const yargs = require('yargs');
const util = require("util"); // this is the var_dump of node 🍔

const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;


//Looking into the args foreach and inspect 😜
console.log('Hello World ' + util.inspect(argv));
argv.forEach((arg, index) => {
    console.log(`${index} : ${arg}`);
}); 