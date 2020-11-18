//Exercice13
//Sujet:
//Compter le nombre de fois que l'on a cliqué sur le bouton et 
// afficher le resultat sur notre page html.

var nbClick = 0;
const monDiv = document.getElementById("nbclick");

function incrementer(){
    nbClick++;
    monDiv.innerHTML ="Vous avez cliquez " + nbClick + " fois.";
}