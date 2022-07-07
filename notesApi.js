class NotesApi {
  loadData(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createNote(note) {
    const data = { "noteMessage": note };
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    })  
    .then(response => {
      response.json()
    })
    .then(cat => {
      console.log('Success:', cat);
    })
  }
}

module.exports = NotesApi;
