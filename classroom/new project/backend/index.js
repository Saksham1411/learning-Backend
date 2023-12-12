const express = require('express');
const mongoose = require('mongoose');
const Note = require('./model/Note');

const app = express();

app.use(express.json());

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.status(201).send(notes);
})
app.post('/notes', async (req, res) => {
    const { content } = req.body;
    try {
        const notes = await Note.create({ content });
        res.send(notes);
    } catch (error) {
        res.status(400).send("could not create the note");
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/notes');

app.listen(3000, () => {
    console.log("working...");
})