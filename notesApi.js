class NotesApi {
  loadData(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
      .catch(() => {
        errorCallback();
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
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  deleteNotes() {
    fetch('http://localhost:3000/notes', {
      method: 'DELETE'
    })
    .then(response => {
      return response.json();
    });
  }
}

module.exports = NotesApi;
