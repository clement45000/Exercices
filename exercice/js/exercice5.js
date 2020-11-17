//  EXERCICE 5
// -------------
// Sujet :
// A partir d'un nombre saisie affiche sa table de multiplication(les 10 premiers nombre)

var readline = require("readline-sync");
var saisie = parseInt(readline.question("Quelle table voulez-vous ?"));

for(var i = 0; i <=10; i ++){
    var result = saisie * i;
    var txt = saisie + " * " + i  + " = " + result;
    console.log(txt);
}