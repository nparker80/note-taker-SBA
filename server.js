const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();
let PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ 
  extended: true,
}))

app.use(express.json());
app.use(express.static('public'));
let notes = require('./public/db/db.json')

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});

app.get("api/notes", function (req, res) {
  fs.readFile('./db/db.json', utf8, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(notes);
  });
});

app.listen(PORT, function () {
  console.log("Server start on PORT " + PORT);
});