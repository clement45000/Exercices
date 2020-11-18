//Exercice 17
//Sujet
//Faire un programme qui force la saisie du chiffre 3 
// Tant que ce chiffre n'est pas saisie on recommence la demande


var readline = require("readline-sync");
var saisie = readline.questionInt("Entrez le chiffre 3");


//solution 
while(saisie !== 3){
    console.log("vous n'avez pas saisie le bon chiffre");
    saisie = readline.questionInt("Entrez le chiffre 3");
}
console.log("bravo vous avez entré le chiffre 3");


// var saisie = 0;
// do{
//     console.log("vous n'avez pas saisie le bon chiffre");
//     saisie =  readline.questionInt("Entrez le chiffre 3");
// } while(saisie !== 3)
// console.log("Bravo vous avez entré le chiffre 3");