//Exercice22.js
//Sujet :
//Vous devez realiser un programme permettant de :
//Additionner les n premiers nombre
//Multiplier les n permiers nombres (factorielle)
//Vous deveze faire deux fichiers :
//Un permettant de gérer les deux fonction de calcule
//Un permettant de gerer le corps du programme


var readline = require("readline-sync");
var calculManager = require("./exercice22b.js");

//affichage du menu
do{
    menu();
    var saisie = parseInt(readline.question("Quel est votre choix ?"));
    if(saisie === 1){
        calculManager.addition(parseInt(readline.question("Quel chiffre voulez-vous ?")));
    }else if (saisie === 2){
        calculManager.multiplication(parseInt(readline.question("Quel chiffre voulez-vous multiplier ?")));
    }else if(saisie === 3){
        console.log("fin du programme");
    }
} while(saisie !== 3);



function menu(){
    var txt = "";
    txt+= "1 : Addition des n premiers nombre \n";
    txt+= "2 : Multiplication des n premiers nombre \n";
    txt+= "3 : Quitter\n";
    console.log(txt);
}