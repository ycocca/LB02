/*
Aufgabe 1
a) Starten Sie einen XMLHttpRequest() über die URL https://jsonplaceholder.typicode.com/todos/.
Überprüfen Sie den Output.
b) Fügen Sie einen Fehler in die URL unter 1a ein.
c) Erweitern Sie Ihr Programm in dem readyState = 4 überprüft wird
jedoch wenn der HTTP Status ungleich 200 ist, dann eine Meldung auf der Console
ausgibt.
 */

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
   //Lösung 1a

    //Lösung 1c
});

//Todos abfragen
request.open('GET', /* Lösung 1a */);
request.send();
