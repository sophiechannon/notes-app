/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./NotesView')

describe('displayNotes', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('it displays notes from the notesModel', () => {
    const mockedNotesModel = { 
      getNotes: () => {
        return ['Wash the car', 'Water the plants']
      }
    }
    const view = new NotesView(mockedNotesModel);
    view.displayNotes();
    expect(document.querySelectorAll('.note').length).toBe(2);
  })
})