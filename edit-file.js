'use strict';

const fs = require('fs');

let file = process.argv.slice(2);

console.log(`Editing file: ${file}`);

let writeData = (Math.floor(Math.random() * 1000)).toString();

function getPreviousFileContents(file, newData, callback) {
  fs.readFile(file, (err, currentData) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log(`Previous file contents: ${currentData.toString()}`);
      callback(file, newData);
    }
  });
}

function editFile(file, data) {
  fs.createWriteStream(file).write(data);

  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(err);
    }
    else {
      console.log(`Updated file contents: ${data.toString()}`);
    }
  });
}

getPreviousFileContents(file[0], writeData, editFile);

