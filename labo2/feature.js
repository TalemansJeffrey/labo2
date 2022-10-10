/*Om getallen beter leesbaar te kunnen maken, bestaat er nu een feature
waarbij je getallen kan splitsen aan de hand van _ (underscore).*/
//Het maakt het misschien wat overzichtelijker. Zo moet je niet telkens 1000 getallen door elkaar zien.


let number = 8000000000; //Dit is helemaal niet duidelijk voor de developer of iemand anders om te zien welke getal er staat.
let numberFixed= 8_000_000_000; //Dit is wel duidelijk voor de developer of iemand anders om te zien welke getal er staat.

//Zo moet je er niet steeds een string van maken om het te kunnen splitsen.

//Het kan ook bij decmimalen.
let decimal = 0.000001;
let decimalFixed = 0.000_001;

//Het doet misschien niets voor de computer, maar het is wel duidelijker voor de developer of iemand anders om te zien welke getal er staat.

console.log(number);
console.log(numberFixed);
console.log(decimal);
console.log(decimalFixed);