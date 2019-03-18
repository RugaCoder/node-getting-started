console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
      title,
      body
  };

  var fetchNotes = () => {
    try {
      var notesString = fs.readFileSync('notes-data.json');
      notes = JSON.parse(notesString)
  
    } catch (e){
      return [];
  
    }

  };

  
  var duplicateNotes = notes.filter((note) => note.title === title );

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  }
  
  
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = () => {
    console.log('Getting note', title); 
    var notes =fetchNotes();
    var fetchNotes =notes.filter((notes) => notes.title === title);
    return filteredNotes[0];

};

var removeNote = (title) => {
    console.log('Removing note', title);
    var notes = fetchNotes();
    var fetchedNotes = notes.filter((note) => note.title!==title);
    savedNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

};  

module.exports = {
    addNote,
    getAll,
    getNote, 
    removeNote
}