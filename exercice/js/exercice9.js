//Exercice 9
//Sujet :
//Création d'un objet voiture et afficher ses propriétés et valeurs
// Objet voiture en dessous.

// var voiture = {
//     immatriculation : "FF8DEMF89",
//     marque : "Honda",
//     année : 2002
//        carac : {
//             nbKilometre : 20000,
//             couleur : "rouge",
//             puissance : 10
//         }
// }

var voiture = {
        immatriculation : "FF8DEMF89",
        marque : "Honda",
        annee : 2002,
        carac : {
            nbKilometre : 20000,
            couleur : "rouge",
            puissance : 10
        }
}

//solution 1
console.log("La voiture est immatriculée " + voiture.immatriculation + " de marque " + voiture.marque + " et son année est de "
+ voiture.annee + ", le nombre de kilomètres :" + voiture.carac.nbKilometre + ", la couleur : " + voiture.carac.couleur + ", la puissance "
+ voiture.carac.puissance + "cv .");

//solution 2
console.log(`La voiture est immatriculée ${voiture.immatriculation}, de marque ${voiture.marque}, et son année est de 
${voiture.annee}, nombre de kilomètres : ${voiture.carac.nbKilometre}, couleur :${voiture.carac.couleur}, puissance : 
${voiture.carac.puissance}.`);