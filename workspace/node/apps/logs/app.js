const fs = require('fs');
const util = require('util');
const {Console} = require('console');

const sysout = fs.createWriteStream('./SystemOut.log');
const syserr = fs.createWriteStream('./SystemErr.log');

const logger = new Console({stdout: sysout, stderr: syserr});

logger.log('Test system logger doggo 🐶');

logger.error('Test system error logger doggo 🐶');