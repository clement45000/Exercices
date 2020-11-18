//Exercice 8
// Sujet Réaliser une fonction qui vérifie si un mot de passe passé en paramètre contient
//moins de 8 caractères, si c'est le cas la fonction retournera le nombre de caractères, sinon
// il indiquera que le mot contient plus de 8 caractères.

// var str = "jean";
// console.log(str.length);

// var str = "jean";
// console.log(`${str.length}`);

function showSize(word){
    if(word.length < 8){
        console.log("Le mot contient " + word.length + " caractère");
    } else {
        console.log("Le mot contient 8 caractères ou plus.");
    }
}

var word1 = "Marc";
var word2 = "Elisabeth"

showSize(word1);
showSize(word2);


