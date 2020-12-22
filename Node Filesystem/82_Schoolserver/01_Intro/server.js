/*
Thema: Schoolserver
Einfacher Server, um Daten (Studenten und Lehrbetrieb) im JSON Format an einen
Client zu senden.
Der Server dient zu Übung und Illustrationszwecken für Callbacks und Promises.
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

//Warning: Korrekt setzen!!
const staticPath = './82_Schoolserver/01_Intro/data/';


//Allow CORS-Request and set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/test', (req, res) => {
    let fileLoc = path.resolve(staticPath+'test.txt');
    fs.readFile(fileLoc, 'utf8',
        (err, text) => {
            res.send(text);
    });
});

app.get('/student', (req, res) => {
    let fileLoc = path.resolve(staticPath+'test.json');
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Fehler und hier die Fehlermeldung: ${error}`);
            res.send(`Ein Fehler ist passiert! Benachrichtigen Sie den Admin.`);
        } else {
            try {
                console.log(text);
                res.send(text);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

app.get('/students', (req, res) => {
    let fileLoc = path.resolve(staticPath+'student.json');
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Error ${error}`);
        } else {
            try {
                //JSON-Formt auslesen mit der Methode .parse
                const obj = JSON.parse(text);
                let out = "";
                //durch die Daten iterieren
                for (let row in obj.school){
                    for (let key in obj.school[row]){
                        out += `${key}: ${obj.school[row][key]}, `;
                    }
                }
                res.send(JSON.stringify(out, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

app.get('/students/:id', (req, res) => {
    let fileLoc = path.resolve(staticPath+'student.json');
    let student_id = req.params.id;

    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Error ${error}`);
        } else {
            try {
                const obj = JSON.parse(text);
                let out = { "Student-ID": "DOES NOT EXIST!"}
                for (let row in obj.school){
                    if (obj.school[row].id === parseInt(student_id)){
                        out = {
                            "Student-ID": obj.school[row].id,
                            "Nachname": obj.school[row].last_name,
                            "Vorname": obj.school[row].first_name,
                            "Lehrbetrieb": obj.school[row].company_id
                        }
                    }
                }
                res.send(JSON.stringify(out, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

