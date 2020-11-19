// Exercice 23
//Sujet : 
// Vou devez realiser un programme permettant de gérer des animaux
//Vous devez créer 3 fonctions
//1. créerAnimal(nom, age, sexe):permet de générer un objet Javascript contetant les informations de l'animal
//2.afficherListeAnimal(liste): permet d'afficher une liste d'animaux(passée en paramètre)
//3.calculerMoyenAge(liste): permet d'afficher la moyenne d'âge d'une liste d'animaux(passée en paramètre)
//Vous créerez 2 tableaux (chiens et chats) pour stocker les animaux. vous devez créer 3 chiens et 4 chats.
//Vous devez réaliserez l'affichage comme le monntre l'impression d'écran
//(voir photo 1 dossier img js/img/photo1)

var chien1 = creerAnimal("Mina", 2, false);
var chien2 = creerAnimal("Pam", 15, false);
var chien3 = creerAnimal("Hocket", 7, true);
var chat1 = creerAnimal("Tya", 7, false);
var chat2 = creerAnimal("Milo", 5, true);
var chat3 = creerAnimal("Felicia", 5, false);
var chat4 = creerAnimal("Lili", 1, false);

var chats = [chat1,chat2,chat3,chat4];
var chiens = [];
chiens.push(chien1,chien2,chien3);

afficherListeAnimal(chiens);
console.log(`La moyenne d'age des ${chiens.length} chiens est de : ${calculerMoyenneAge(chiens)} ans`);
afficherListeAnimal(chats);
console.log(`La moyenne d'age des ${chats.length} chats est de : ${calculerMoyenneAge(chats)} ans`);


function creerAnimal(nom, age, sexe){
    var animal = {};
    animal.nom = nom;
    animal.age = age;
    animal.sexe = sexe;
    return animal;
}

function afficherListeAnimal(liste){
    var txt = "";
    for(var i = 0; i < liste.length; i++){
        txt += "Nom : " + liste[i].nom + "\n";
        txt += "Age : " + liste[i].age + "\n";
        if(liste[i].sexe){
            txt += "Sexe : male\n";
        } else{
            txt += "Sexe : femelle\n";  
        }
        txt += "--------------";
        if( i !== liste.length -1) txt += "\n";
    }
    console.log(txt);
}

function calculerMoyenneAge(liste){
    var moyenne = 0;
    for(var i = 0; i < liste.length ; i++){
        moyenne += liste[i].age;
    }
    return moyenne/liste.length;
}
