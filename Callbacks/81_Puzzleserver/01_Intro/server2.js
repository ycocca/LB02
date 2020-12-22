/*
Thema: Einfacher Server, welcher
a. CORS Anfragen (CORS Requests) erlaubt
b. Bei einer Anfrage durch einen Client per Zufallsgenerator einen Film zurück gibt.
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

//Source https://www.thegamegal.com/printables/
const moviePuzzleList = ["Shrek","Alice in Wonderland",
    "Finding Nemo", "My Fair Lady", "Cinderella", "Cars", "Spiderman",
    "Peter Pan", "Toy Story", "Inception Robin Hood"];

//call url http://localhost:3000/puzzle
app.get('/puzzle', (req, res) => {
    const random = Math.floor(Math.random() * moviePuzzleList.length);
    res.send(JSON.stringify({puzzle: moviePuzzleList[random]}));
});

const manufacturerList = ["Ibanez", "Gibson", "Fender", "PRS",
    "Schecter", "Jackson", "EVH", "Epiphone", "Martin"];

//call url http://localhost:3000/manufacturer
app.get('/manufacturer', (req, res) => {
    const random = Math.floor(Math.random() * manufacturerList.length);
    res.send(JSON.stringify({name: manufacturerList[random]}));
});
