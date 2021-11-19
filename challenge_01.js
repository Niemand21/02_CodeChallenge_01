
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let numberOne;
let numberTwo;  
let summe; 

numberOne = prompt("Zahl einfügen : ");
numberTwo = prompt("Zahl einfügen : ");

summe = (Number(numberOne) + Number(numberTwo));

console.log("Das Ergebnis ist: " + summe);
