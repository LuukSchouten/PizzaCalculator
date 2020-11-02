// Simpele pizza Calculator van Luuk Schouten.

// Defineer de prijzen.
const Pizza_Small = 5;
const Pizza_medium = 10;
const Pizza_Large = 20;

// Toon prijzen met alert();
var smallprijs = alert("Een kleine pizza kost 5 euro");
var mediumprijs = alert("Een medium pizza kost 10 euro");
var largeprijs = alert("Een grote pizza kost 20 euro");

// Vraag hoeveel van elke pizza de user wil.
var PizzaSmall = prompt("Hoeveel kleine pizza's wil je?");
var PizzaMedium = prompt("Hoeveel medium pizza's wil je?");
var PizzaLarge = prompt("Hoeveel Grote pizza's wil je?");

// Vermenigvuldig de prijzen en het aantal.
var TotalSmall = PizzaSmall * Pizza_Small; 
var TotalMedium = PizzaMedium * Pizza_medium; 
var TotalLarge = PizzaLarge * Pizza_Large;

// Tel de verschillende prijzen van groottes bij elkaar op.
var totaalprijs  = TotalSmall + TotalMedium + TotalLarge;

// Toon hoeveel pizza's er van elke grootte er is besteld en voeg line breaks toe.
document.write("Aantal kleine pizza's: " + PizzaSmall);
document.write("</br>");
document.write("Aantal Medium pizza's: " + PizzaMedium);
document.write("</br>");
document.write("Aantal Grote pizza's: " + PizzaLarge);
document.write("</br>");
document.write("</br>");

// Toon de totaalprijs op het scherm.
document.write("De totaalprijs is: " + totaalprijs + " Euro");