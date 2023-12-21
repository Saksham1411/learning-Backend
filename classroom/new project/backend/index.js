const express = require('express');
const mongoose = require('mongoose');
const Note = require('./model/Note');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

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

app.delete('/notes/:id', async (req, res) => {
    const { id } = req.params;
    try{
        await Note.findOneAndDelete({ _id: id });
        res.send("delete");
    }catch(error){
        res.status(400).send("could not delete note");
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/notes');

app.listen(3000, () => {
    console.log("working...");
})