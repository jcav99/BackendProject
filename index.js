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
    {id: 1, name:'Rock'},
    {id:2, name: 'Hip Hop'},
    {id:3, name: 'Pop'},
    {id:4, name: 'Classical'},
    {id:5, name: 'Rap'},
    {id:6, name: 'Jazz'},
    {id:7, name: 'Blues'},
    {id:8, name: 'Electronic'}
];

//=========== ROUTES FOR HTTP GET REQUESTS ==========
app.get('/api/genres', (req, res)=>{
    res.send(genres)
})



//=========== ROUTES FOR HTTP POST REQUESTS ==========




//=========== ROUTES FOR HTTP PUT REQUESTS ==========




//=========== ROUTES FOR HTTP DELETE REQUESTS ==========


app.listen(3000, ()=>{
    console.log("Lisening on port 3000...")
})