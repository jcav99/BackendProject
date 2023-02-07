/*Tools: code editor, browser, command line utility, 
application and server utility, API platform
*/
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Hello there');
});
const genres = [
    {id: 1, name:'Rock', songs: []},
    {id:2, name: 'Hip Hop', songs: []},
    {id:3, name: 'Pop', songs:[]},
    {id:4, name: 'Classical',songs:[]},
    {id:5, name: 'Rap',songs:[]},
    {id:6, name: 'Jazz',songs:[]},
    {id:7, name: 'Blues',songs:[]},
    {id:8, name: 'Electronic',songs:[]}
];

//=========== ROUTES FOR HTTP GET REQUESTS ==========
app.get('/api/genres', (req, res)=>{
    res.send(genres)
});
app.get('/api/genres/:id',(req, res)=>{
    const genre = genres.find(g=> g.id === parseInt(req.params.id));
    if (!genre){
        res.status(404).send("The genre with the gived ID was not found");
        return
    }
        res.send(genre);
});
app.get('/api/genres/:id/:songNum',(req, res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    const songs = genre.songs;
    const song = songs.find(g=> g.songNum === parseInt(req.params.songNum));
    if (!song){
        res.status(404).send("The song with the gived ID was not found");
        return
    }
        res.send(song);
});


//=========== ROUTES FOR HTTP POST REQUESTS ==========
app.post('/api/genres', (req, res)=>{
    if (req.body.name.length >= 3 && req.body.name.length <= 50){
        const genre = {
            id:genres.length + 1,
            name:req.body.name,
            songs:[]
        }
        genres.push(genre);
        res.send(genre);
    }
    else{
        res.send("Error: Genre name is too short/long");
    }
});
app.post('/api/genres/:id', (req, res)=>{
    const genre = genres.find(g=> g.id === parseInt(req.params.id));
    if (!genre){
        res.status(404).send("The genre with the gived ID was not found");
        return
    }
    const songs = genre.songs;
    if (req.body.name.length >= 3){
        const song = {
            songNum:songs.length + 1,
            name:req.body.name,
        }
        songs.push(song);
        res.send(song);
    }
    else{
        res.send("Error: Song name is too short/long");
    }
});



//=========== ROUTES FOR HTTP PUT REQUESTS ==========
app.put('/api/genres/:id', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    if (!genre){
        res.status(404).send("The genre with the gived ID was not found");
        return
    }
    genre.name = req.body.name;
    res.send(genre);
});
app.put('/api/genres/:id/:songNum', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    const songs = genre.songs;
    const song = songs.find(c=> c.songNum === parseInt(req.params.songNum));
    if (!song){
        res.status(404).send("The song with the gived ID was not found");
        return
    }
    song.name = req.body.name;
    res.send(song);
});




//=========== ROUTES FOR HTTP DELETE REQUESTS ==========
app.delete('/api/genres/:id', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    if (!genre){
        res.status(404).send("The genre with the gived ID was not found");
        return
    }
    let ind = genres.indexOf(req.params.id);
    genres.splice(ind,1);
    res.send("Genre was successfully deleted.");
});
app.delete('/api/genres/:id/:songNum', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    const songs = genre.songs;
    const song = songs.find(c=> c.songNum === parseInt(req.params.songNum));
    if (!song){
        res.status(404).send("The song with the gived ID was not found");
        return
    }
    let ind = songs.indexOf(req.params.songNum);
    songs.splice(ind,1);
    res.send("song was successfully deleted.");
});


app.listen(3000, ()=>{
    console.log("Lisening on port 3000...")
})