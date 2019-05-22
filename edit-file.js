'use strict';

const fs = require('fs');

let file = process.argv.slice(2);

console.log(`Editing file: ${file}`);

let writeData = (Math.floor(Math.random() * 1000)).toString();

fs.readFile(file[0], (err, data) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log(`Previous file contents: ${data.toString()}`);
  }
});

fs.createWriteStream(file[0]).write(writeData);

fs.readFile(file[0], (err, data) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log(`Updated file contents: ${data.toString()}`);
  }
});