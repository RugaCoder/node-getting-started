console.log('Starting new Node app');

const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');



const argv = yargs.argv;
//var command =  process.argv[2];
var command = argv._[0];
console.log('command: ', command);
console.log('Yargs', argv);      

if(command === 'add'){
   // console.log('adding new notes' );
    notes.addNote(argv.title, argv.body);

} else if (command === 'list'){
    console.log('Listing all notes');
    notes.getAll();
      
} else if (command ==='read'){
    console.log('Reading notes ');
} else if (command ==='remove'){
    console.log('Removing notes');
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognzed');
     
} 