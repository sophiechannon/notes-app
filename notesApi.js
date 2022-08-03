class NotesApi {
    // constructor() {
    // }

    loadNotes(callBack) {
        fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(notes => { 
            callBack(notes)
        })
    }
}

module.exports = NotesApi;