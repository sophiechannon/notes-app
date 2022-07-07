class NotesApi {
  loadData(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createNote(note) {
    const data = { content: note };
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    })  
    .then(response => {
      return response.json()
    })
    .then(cat => {
      console.log('Success:', cat);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

module.exports = NotesApi;
