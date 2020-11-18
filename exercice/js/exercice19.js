//Exercice19.js
//Sujet
//Calculer la factorielle 

 var readline = require("readline-sync");
 var saisie = parseInt(readline.question("Factorielle"));
 var resultat = factorielle(saisie);
// var resultat = 1;

// // for(var i = 1; i <= saisie; i++){
// //     resultat *= i;
// //     console.log("Etape" + i + ":" + resultat);
// // }
// // console.log("Le resultat de la factorielle de " + saisie + "est" + resultat);


// //afficher le resultat en sens inverse
// for(var i = saisie; i > 1; i--){
//     resultat *= i;
//     console.log("Etape" + i + ":" + resultat);
// }
 console.log("Le resultat de la factorielle de " + saisie + " est " + resultat);

//Utilisation avec une fonction recursive 
function factorielle(n){
    if(n > 1){
        return n * factorielle(n-1)
    } else{
        return 1;
    }
}
    // !5 = 5 * !4
    // !4 = 4 * !3
     // !3 = 3 * 2 * 1
     //!1 = 1
  