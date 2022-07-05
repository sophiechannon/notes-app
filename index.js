const NotesModel = require('./notesModel');
const model = new NotesModel();
const NotesView = require('./NotesView')
const view = new NotesView(model);

console.log('The notes app is running');
console.log(model.getNotes());
model.addNote("wash hair")
model.addNote("walk dog")
view.displayNotes();