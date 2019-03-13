//Converting the oblect into a string 

/*var obj = {
    name: 'Frances'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// Converting the string into object that can be used by our program

var personString = '{"name": "Frances", "age": 24}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');

var originateNote = {
    title: 'Some title',
    body: 'Some body'
};

console.log(typeof originateNote);
console.log(originateNote);


var originateNoteString = JSON.stringify(originateNote);
console.log(typeof originateNoteString);
console.log(originateNoteString);
fs.writeFileSync('notes.json', originateNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
//console.log(typeof note);

//note
console.log(typeof note);
console.log(note);
console.log(note.title);

