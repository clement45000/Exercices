// Permettre à l'utilisateur de réaliser une saisie clavier
//Si la saisie n'est pas un chiffre, l'utilisateur doit recommencer
//Si la saisie est terminée on doit afficher le chiffre saisie.

var readline = require("readline-sync");
var saisie = parseInt(readline.question("Quel nombre voulez-vous saisir ?"));
var fin = false;

while(!fin){
    if(isNaN(saisie)){
     console.log("Veuillez recommencer la saisie");
     saisie = parseInt(readline.question("Quel nombre voulez-vous saisir ?"));

    } else {
        console.log("c'est un chiffre");
        fin = true;
    }
}
console.log("Le chiffre qui a été saisi est : " + saisie);