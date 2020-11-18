//Exercice 7 
//Sujet:
// Réaliser une fonction qui permet de vérifier si un chiffre passé en paramètre est 
// divisible par 3, si oui afficher le résultat de l'opétation.
// Nous avons en input deux variables.
// var c1 = 123;
// var c2 = 20;
//Le resultat de 123/ 3 = 41
// Le chiffre 20 n'est pas divisible par 3

var c1 = 123;
var c2 = 20;

function estDivisible(number){
    if(number % 3 === 0){
        resultat = number / 3;
        console.log(number + " est divisible par 3.")
        console.log("Le resultat de " + number  + "/ 3 = " + resultat);
    } else {
        console.log(number + " n'est pas divisible par 3")
    }
}

estDivisible(c1);
estDivisible(c2);

 