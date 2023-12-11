const express = require('express');
const mongoose = require('mongoose');
const Note = require('./model/Note');

const app = express();

app.use(express.json());

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
})
app.post('/notes', async (req, res) => {
    const { content } = req.body;
    const notes = await Note.create({ content });
    res.send(notes);
})

mongoose.connect('mongodb://127.0.0.1:27017/notes');

app.listen(3000, () => {
    console.log("working...");
})