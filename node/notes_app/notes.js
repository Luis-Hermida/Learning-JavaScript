const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    console.log(chalk.green("Note added."));
    saveNotes(notes);
  } else {
    console.log(chalk.red("Error - Duplicated title."));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const uniqueNotes = notes.filter((note) => note.title !== title);

  if (notes.length === uniqueNotes.length) {
    console.log(chalk.red("Error - Note not found"));
  } else {
    console.log(chalk.green("Note deleted."));
    saveNotes(uniqueNotes);
  }
};

const listNotes = () => {
  console.log(chalk.inverse("Your notes"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("Error - Note not found"));
  }
};

const saveNotes = (notes) => {
  console.log(chalk.green("Notes saved."));
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
