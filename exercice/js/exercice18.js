//Exercice 18
//Sujet
//Réaliser un programme qui additionne les 10 premiers chiffres et qui affiche a chaque étape
// le cumul
//exemple : Etape 1 : 1
//          Etape 2 : 3
//          ect...
var somme = 0;

for(var i = 1 ; i <= 10 ; i++){
    somme += i ;
    console.log("Etape" + i + " : "  + somme);
}
console.log("Le resultat des 10 premiers chiffres est égal à " + somme);