const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  it("should return an empty array initially", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it("should return an 2-item array when 2 items are added", () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it("should return an empty array when notes are added and reset", () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
