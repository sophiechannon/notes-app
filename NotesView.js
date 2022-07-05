class NotesView {
  constructor(model) {
    this.model = model;
    this.notesEl = document.querySelector('#notes');
    this.addNoteButton = document.querySelector('#add-note-button');
    this.addNoteButton.addEventListener('click', () => {
      const note = document.querySelector('#message-input').value;
      this.addNewNote(note);
    })
  }

  addNewNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }

  displayNotes() {
    const allNotes = this.model.getNotes()
    allNotes.forEach(element => {
      let div = document.createElement('div');
      div.className = "note";
      div.innerText = element;
      this.notesEl.append(div);
    })
  }
}

module.exports = NotesView;