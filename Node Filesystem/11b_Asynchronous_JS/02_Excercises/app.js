/* Aufgabe 3
a. Schreiben Sie den request1 als Funktion getManufacturerCB
mit Callback als Argumente um (ähnlich wie in der Demo).

Wichtig ist, dass die neue Funktion
Daten zurückliefert. Wenn data1El.textContent = data1.name oder ähnliches
in der neuen Funktion haben, dann ist das Ziel NICHT erreicht.
 */

const manufURL = "http://localhost:3000/manufacturer";
const data1El = document.querySelector('#data1');


const request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        let data1 = JSON.parse(evt.target.responseText);
        if (typeof data1 == "undefined") {
            data1El.textContent = "to be updated";
        } else {
            data1El.textContent = data1.name;
        }
        console.log(`log request ${data1} and ${data1.name}`);
    } else if (evt.target.readyState === 4) {
        console.log(`Error occured with status ${evt.target.status}`);
    }
});

request1.open('GET', manufURL);
request1.send();


/* Aufgabe 4
a. Fügen Sie eine neue Funktion 'getCategoryCB' mit Callback als Argumente
(ähnlich wie in der Demo), welche XMLHttpRequest an "http://localhost:3000/category"
absetzt.
 */

const categoryURL = "http://localhost:3000/category";
const data2El = document.querySelector('#data2');
