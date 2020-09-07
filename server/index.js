var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

var { addNotes,
    getAllNotes,
    getNoteById,
    updateNoteById,
    removeNoteById } = require('./controllers/index');

const app = express();
app.use(bodyParser.json());


app.get("/notes", async (req, res) => {
    let allNotes = await getAllNotes();
    res.send(JSON.stringify(allNotes));
});

app.get("/notes/:id",  async (req, res) => {    
    
    let noteById =  await getNoteById(req.params.id);     
    res.send(JSON.stringify(noteById));
});

app.post("/notes", async (req, res) => {    
    await addNotes(req.body);
    res.status(201).send(req.body);
});

app.put("/notes/:id", async (req, res) => {    
    let result = await updateNoteById(req.params.id, req.body);    
    res.send(JSON.stringify(result));
});

app.delete("/notes/:id", async (req, res) => {
    let result = await removeNoteById(req.params.id);
    res.send(JSON.stringify(result));
});

app.listen(3000, () => console.log("listen on 3000 port"));
