const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some text'
};

const noteString = JSON.stringify(originalNote);
fs.writeFile('notes.json', noteString, callback);

function callback(err) {
    if (err) throw err;
    readFile();
}

function readFile() {
    fs.readFile('notes.json', (err, noteStr) => {
        if (err) throw err;
        let note = JSON.parse(noteStr);

        console.log(typeof note);
        console.log(note.title);
    })
}
