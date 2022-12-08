const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
