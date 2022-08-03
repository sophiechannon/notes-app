const NotesModel = require('./notesModel');
const model = new NotesModel();
const NotesView = require('./NotesView')
const NotesApi = require(',/notesApi');
const api = new NotesApi();
const view = new NotesView(model, api);

console.log('The notes app is running');
console.log(model.getNotes());


view.displayNotesFromApi();