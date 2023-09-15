class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

class NoteList {
    constructor() {
        this.notes = [];
    }

    addNoteToList(note) {
        this.notes.push(note);
    }
}
const noteList = new NoteList();
const note1 = new Note("title 1", "content 1");
const note2 = new Note("title 2", "content 2.");
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
console.log(noteList.notes);