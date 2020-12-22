/*
Beispiel Objekt 'Person' mit Konstruktor
Nachfolgend wird eine Vorlage definiert mit class und mit constructor wird die
Erzeugung des Objekts anhand der Vorlage "konstruiert".
Wichtig: class ist nicht zu verwechseln mit einer CSS-Klasse!!
 */

/* Klasse */
class Person{
    /* Konstruktor - erstellt das Objekt (sog. Instanz) */
    constructor(firstName, lastName, geschlect, birthday) {
        //Properties - Eigenschaften/Attribute einer Klasse
        this.firstName = firstName;
        this.lastName = lastName;
        this.geschlecht = geschlecht;
        this.birthday = birthday;
    }

    /* Methode (ähnlich wie Funktion) - kann Parameter haben */
    getFullName(){
        return `Mein Name ist ${this.firstName} ${this.lastName}.`
    }

    /* Getter - OHNE Parameter */
    get fullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    }

    /* Setter ohne return */
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

}

export default Person;
