class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }

  setNotes(notes) {
    this.notes = notes;
    console.log(this.notes);
    console.log(notes);
  }
}

module.exports = NotesModel;