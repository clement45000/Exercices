// Exercice 10 
// Sujet : 
//Permettre la saisie des informations d'un objet
// A partir de l'objet suivant, permettre la saisie 
//du nom et de l'âge (qui seront donc deux propriétés de l'objet personnage).
//var personnage = {};
// Réaliser l'affichage suivant : 
// Quel est le nom ? nom
// Quel age ? age
// {nom: 'age', age: age}
var readline = require("readline-sync");

var personnage = {};
personnage.nom = readline.question("Quel est le nom du personnage");
personnage.age = parseInt(readline.question("Quel age a le personnage"));

// Rajouter un objet caractère dans notre objet personnage
personnage.carac = {};
personnage.carac.force = 7;
personnage.carac.agi = 5;
personnage.carac.intel = 10;
console.log(personnage);