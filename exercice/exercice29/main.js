var readline = require("readline-sync");

var armeManager = require("./armesManager.js");
var choixMenu = -1;

while(choixMenu !== 0){
    menu();
    choixMenu = parseInt(readline.question("Quel est votre choix ?"));
    switch(choixMenu){
        case 1 :
            armeManager.afficherArmes();
        break;
        case 2 : 
            armeManager.ajouterArme();
        break;
        case 3 :
            armeManager.supprimerArme();
        break;
        case 0 : console.log("A +");
        break;
        default : console.log("cas inconnu");
    }
}


function menu(){
    var txt = "1/ Afficher les armes \n";
    txt += "2/ Ajouter une arme\n";
    txt += "3/ Supprimer une arme\n";
    txt += "0/ quitter";
    console.log(txt);
}