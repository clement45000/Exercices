//  EXERCICE 4
// -------------
// Sujet :
// Réaliser un programme permettant de saisie le nom, le prenom et l'âge d'un utilisateur
// Le programme affiche ensuite le message suivant :
// Quel est votre nom ? votre nom
// Quel est votre prenom ? votre prénom
// Quel est votre âge ? votre âge
// ------- Bienvenue ----------- 
// Votre nom est : nom
// Votre prénom est : prénom
// Vous avez (votre age) ans
//---------------------------------------

var readline = require("readline-sync");

var nom = readline.question("Quel est votre Nom ? ");
var prenom = readline.question("Quel est votre Prénom ? ");
var age = parseInt(readline.question("Quel est votre age ? "));

var txt = "-------- Bienvenue -------------\n";
txt += "Votre nom est : " + nom + "\n";
txt += "Votre prenom est : " + prenom + "\n";
txt += "Votre nom est : " + age + "\n";
console.log(txt);