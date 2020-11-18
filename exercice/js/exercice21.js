//Exercice 21
//Sujet:
//Créer un programme permettant de compléter un tableau de chiffres
//Lorsque l'on saisit un chiffre, il s'écrit directement à la bonne place, afin de cnoserver un tableau trié.
//Réaliser un menu et permetttre d'atjouter plusieurs valeurs
//menu 1/ Ajouter un chiffre, 2/ Afficher le tableau, 0/ Quitter le programme, autre => cette option n'existe pas

var readline = require("readline-sync"); 
var tableau = [3, 5, 10, 12];
var choix = -1;
while(choix !== 0){
    //affichage du menu
    menu(); 
    // Choix de l'utilisateur ( 1, 2, 3, 0)
    var choix = readline.questionInt("Quel est votre choix ?");
    switch(choix){
        
        case 1 : var addNumber = readline.questionInt("Quel chiffre voulez-vous inserer ?");
                ajouterUnChiffre(addNumber);
        break;
        case 2 : afficherTableau();
        break;
        case 0 : console.log("Vous avez quitter le programme");
        break;
        default : console.log("Ce choix n'existe pas désolé");
    }
}

//Function pour affiche les options du menu
function menu(){
    var txt = "********************\n";
    txt += "1/ Ajouter un chiffre\n";
    txt += "2/ Afficher le tableau\n";
    txt += "0/ Quitter";
    console.log(txt);
}

function afficherTableau(){
var nombres = tableau;
nombres.sort(function(a,b){
    return a-b;
});
console.log(tableau);
}

function ajouterUnChiffre(number){
    setNumber = tableau.push(number);
}
