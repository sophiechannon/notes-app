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
    
    
  // it('posts data to server', () => {
  //   const api = new NotesApi();
  //   api.createNote('This is a new 🪪 note')
  //   expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify('This is a new 🪪 note')
  //   })
  // })
});