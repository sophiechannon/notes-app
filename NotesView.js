class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.notesEl = document.querySelector('#notes');
    this.addNoteButton = document.querySelector('#add-note-button');
    this.addNoteButton.addEventListener('click', () => {
      const note = document.querySelector('#message-input');
      this.api.createNote(note.value);
      this.addNewNote(note.value);
      note.value = "";
    })
  }

  addNewNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }

  displayNotes() {
    this._clearNotes();
    const allNotes = this.model.getNotes()
    allNotes.forEach(element => {
      let div = document.createElement('div');
      div.className = "note";
      div.innerText = element;
      this.notesEl.append(div);
    })
  }

  displayNotesFromApi() {
    this.api.loadData(data => {
      this.model.setNotes(data);
      this.displayNotes();
    })
  }

  _clearNotes(){
    const displayedNotes = document.querySelectorAll('div.note');
    displayedNotes.forEach(element => {
      element.remove();
    })
  }
}

module.exports = NotesView;