
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

/********  longer Version  *********/

let numberOne; //Variablen deklarieren
let numberTwo;  
let summe; 

numberOne = prompt("Zahl einfügen : "); //Variablen Wert zuweisen
numberTwo = prompt("Zahl einfügen : ");

summe = (Number(numberOne) + Number(numberTwo)); // Berechnung & Typorisierung

console.log("Das Ergebnis ist: " + summe); // Ausgabe

/********  shorter Version  *********/

let numberOne = prompt("Zahl einfügen : "); //Deklaration & Wertzuweisung
let numberTwo = prompt("Zahl einfügen : ");  
let summe = (Number(numberOne) + Number(numberTwo)); //Berechnung & Typorisierung
console.log("Das Ergebnis ist: " + summe); // Ausgabe

/********  Other short Version  *********/

let numberOne = parseInt(prompt("Zahl 1 eingeben: ")); // Variable deklarieren, Wert bestimmen & Typorisierung
let numberTwo = parseInt(prompt("Zahl 2 eingeben: "));
let summe = numberOne + numberTwo;                     // Berechnung 
console.log("Die Summe ist: " + summe);                // Ausgabe

/********  Other long Version  *********/

let zahl1 = prompt("gib die erste Zahl ein");  //Deklaration & Wertzuweisung
let zahl2 = prompt("gib die zweite Zahl ein");

let summe = parseInt(zahl1) + parseInt(zahl2);  //Berechnung & Typorisierung

console.log("Die Summe der Zahlen ist: " +summe);  // Ausgabe