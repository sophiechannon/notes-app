class NotesView {
  constructor(model) {
    this.model = model;
    this.notesEl = document.querySelector('#notes');
  }

  displayNotes() {
    const allNotes = this.model.getNotes()
    allNotes.forEach(element => {
      let div = document.createElement('div');
      div.className = "note";
      div.append(element);
      this.notesEl.append(div);
    })
  }
}

module.exports = NotesView;