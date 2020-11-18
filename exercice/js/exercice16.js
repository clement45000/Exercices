// Exercice 16
// Sujet :
// Faire un programme qui choit un nombre aléatoire entre 0 et 20 
// Realiser trois cas
// si le nombre aléatoire <= 7 afficher avec un console.log("Petit")
// si le nombre aléatoire <= 15 afficher avec un console.log("Moyen")
// si le nombre aléatoire > 15 afficher avec un console.log("Grand")


//Solution
var random =Math.floor(Math.random() * 20);
console.log(random);

if(random <= 7){
    console.log("Petit");
} else if(random <= 15){
    console.log("Moyen");
} else {
    console.log("Grand");
}