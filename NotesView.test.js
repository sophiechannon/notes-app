/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView')
const NotesModel = require('./notesModel');

describe('displayNotes', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('it displays notes from the notesModel', () => {
    const model = new NotesModel();
    const api = {
      loadData: () => {
        model.setNotes(['Joe I made it work!']);
        view.displayNotes();
      },
      createNote: () => {
        return { content: 'Joe I made it work!' }
      }
    }
    const view = new NotesView(model, api) ;
    const messageBox = document.querySelector('#message-input')
    messageBox.value = 'wash the car';
    const button = document.querySelector('#add-note-button');
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('wash the car');
  })

  it('displays correct number of notes when two notes are added', () => {
    const model = new NotesModel();
    const api = {
      loadData: () => {
        model.setNotes(['Joe I made it work!']);
        view.displayNotes();
      },
      createNote: () => {
        return { content: 'Joe I made it work!' }
      }
    }
    const view = new NotesView(model, api);
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

  describe('displayError', () => {
    it('displays an error message when network connection interrupted', () => {
      const model = new NotesModel();
      const api = {
        loadData: () => {
          view.displayError();
        }
      }
      const view = new NotesView(model, api);
      view.displayError();
      expect(document.querySelectorAll('div.error').length).toEqual(1);
      expect(document.querySelectorAll('div.error')[0].innerText).toEqual("Oops I did it again. I broke your network. I cracked your blockchain");
    })
  })

  describe('displayNotesFromApi', () => {
    it('it displays notes from the API', () => {
      const mockedApi = {
        loadData: () => {
          model.setNotes(['Joe I made it work!']);
          view.displayNotes();
        }
      }
      const model = new NotesModel();
      const view = new NotesView(model, mockedApi);
      view.displayNotesFromApi();
      expect(document.querySelectorAll('div.note').length).toEqual(1);
      expect(document.querySelectorAll('div.note')[0].innerText).toEqual("Joe I made it work!");
    })
  })
})



