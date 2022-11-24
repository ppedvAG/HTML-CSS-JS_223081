/*
    Mehrzeiliger Kommentar
*/

// Ich bin einzeiliger Kommentar

// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht

// Können Texte, variablen Zahlen usw direkt in der Konsole der dev-Tools des Browsers eingeben

// Dafür sprechen wir das console Objekt an
console.log("Hallo Welt!"); // einfache Ausgabe
console.error("Da lief was schief!") // Wird als Fehler ausgegeben
console.info("Ich bin eine Information"); // Wird im Firefox mit Info Zeichen dargestellt

// Variablen definieren:

// Modernen Varianten:
let firstName = "Max";
// Syntax:
// let identifier = Wert;
// identifier muss mit Buchstaben, _ oder $ beginnen
// Identifier ist Case Sensitive
let Age = 18;
// Variablen die mit let definiert wurden dürfen verändert werden

// Alternative zu let:
const lastName = "Mustermann";
// Funktioniert es wie let, kann aber nicht neuzugewiesen werden

// Wie gebe ich diese Variable in der Konsole aus?
console.log(firstName);

// Mit weiterem String kombinieren
console.log("Hallo " + firstName + " " + lastName);

// interpolierter String:
console.log(`Hallo ${firstName} ${lastName}`);

// Primitives in JavaScript
// Sind eigentlich reine Daten
// Sind von einem Wrapper Objekt umgeben, damit weiterhin alles ein Objekt in JS ist

// String Zeichenfolge
// Strings werden von "" oder von '' erkannt
console.log("Hallo Welt!");
console.log('Hallo Welt!');

// Wenn wir Aufführungszeichen im String benutzen wollen:
console.log("Er sagt: 'Hallo Welt!'");
console.log('Er sagt: "Hallo Welt!"');

// number
// Jeglicher Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;
// Maximaler Wert: 1.7976931348623157e+308

// Arithmetischen Operatoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// Können mit dem Zuweisungsoperator kombiniert werden
console.log(zahl);
zahl *= 4;
// zahl = zahl(12) * 4;

console.log(zahl);

// % Modulo Teilung mit Rest
console.log(254.6 * 13 % 4);
// 13 / 4 = 3 ->> 1 Bleibt übrig

// ++ Inkrement (Plus 1)
// -- Dekrement (Minus 1)
// Wenn man das Inkrement/Dekrement vor die Zahl stellt, dann wird die Zahl vor der eigentlichen Operation
// erhöht bzw. erniedrigt
// Wenn es danch steht wird die eigentliche Operation durchgeführt
auchZahl++; // 11.5 (saved)
// auchZahl = auchZahl(-12.5) + 1;
console.log(++auchZahl); // 10.5 (saved)
console.log(auchZahl - 2); // 12.5 (nicht saved)
console.log(auchZahl); // 10.5 (von davor)
 

// Boolean
// true/false
let alleAnwesend = true;
let kursEnde = false;
// wird meistens für Vergleiche und if-Blöcke verwendet

// null
// Ist die absichtliche Zuweisung keines Wertes
// Bedeutet die Abwesendheit von Daten
let nichts = null;

// undefined
let test;
// Bedeutet, dass die Variable definiert, aber nie initialisiert wurde

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);

// typeof(variable/wert)
console.log(typeof(firstName));
// erlaubt das prüfen von Datentypen

// Scope
// Unterschied zwischen let, const und var
let x;
var y;
const z = 5;
// 1. Unterschied: const muss sofort mit einem Wert initialisiert werden
// var und let können später initialisiert werden
x = 15;
y = 12;
// 2. Unterschied: var legt ein globales Objekt an
// let hingegen nicht
// 3. Unterschied: Hosting
// Hosting geht nur mit var
// Geht:
w = 15;
console.log(w);
var w;
// Wenn wir ganz ohne Keyword einer Variable einen Wert zuweisen wird sie als globale Eigenschaft des Window-Objekts erstellt
// SCHLECHTE FORM!
// Geht nicht
// ww = 15;
// console.log(ww);
// let ww;
// 4. Unterschied:
// var kennt den BlockScope nicht
// let schon

{
    let block1 = "Hallo!";
    var block2 = "Bye!";
    console.log(block1);
}
//console.log(block1); // Hier scheitert der Aufruf, da block1 nur innerhalb des Blockes von Zeile 139 bis 143 bekannt ist
console.log(block2); // Das funktioniert, da var den BlockScope nicht kennt

// Scopes in JavaScript:
// Globaler Scope: Variable ist im gesamten Script aufrufbar
// Function Scope: Variable ist innerhalb der gesamten Funktion aufrufbar
// Block Scope: Variable ist nur in dem Block in dem sie definiert wurde aufrufbar

// Erste JS-Aufgabe

// Definiere zwei Variablen vom Type Number
// Führe eine beliebige Arithmetische Operation mit den beiden Variablen aus und weise das Ergebnis einer Konstanten zu
// Lass die Konstante in der Konsole ausgeben
var numb1 = 5;
var numb2 = 10;
const erg = numb1 + numb2;

console.log(erg);