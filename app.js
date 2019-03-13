console.log('Starting new Node app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command =  process.argv[2];
conso.log('command:', command);

if(command === 'add'){
    console.log('adding new notes' )

} else if (command === 'list'){
    console.log('Listing all notes');

     
} else if (command ==='read'){
    console.log('Reading notes ');
} else if (command ==='remove'){
    console.log('Removing notes');
} else {
    console.log('Command not recognzed');
     
}