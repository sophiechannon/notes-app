/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./NotesView')
 const NotesModel = require('./notesModel')

describe('displayNotes', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('it displays notes from the notesModel', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    const messageBox = document.querySelector('#message-input')
    messageBox.value = 'wash the car';
    const button = document.querySelector('#add-note-button');
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('wash the car');
  })

  it('displays correct number of notes when two notes are added', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    const messageBox = document.querySelector('#message-input')
    messageBox.value = 'wash the car';
    const button = document.querySelector('#add-note-button');
    button.click();
    messageBox.value = 'walk the dog';
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('wash the car');
    expect(document.querySelectorAll('div.note')[1].innerText).toEqual('walk the dog');
    expect(messageBox.value).toEqual("");
  })
})