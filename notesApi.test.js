const NotesApi = require('./Notesapi');

require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  it('calls fetch and loads data', () => {
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });
  });
    
    
  describe('createNote()', () => {
    it('POSTs a note to server', () => {
      const api = new NotesApi();
      fetch.mockResponseOnce(JSON.stringify({
        noteMessage: "Some value"
      }));

      api.createNote("Some value");

      api.loadData((returnedDataFromApi) => {
        expect(returnedDataFromApi.noteMessage).toBe("Some value");
      });

    })
  })
});