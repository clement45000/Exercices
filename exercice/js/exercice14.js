//Exercice14
//Sujet:
// A partir du fichier html compléter la partie pour afficher la table
//de multiplication dans le div

const myButton = document.querySelector("button");
const divResultat = document.getElementById("table");

myButton.addEventListener("click", function(){
    var txt = "";
    for( let i = 1; i <=10; i++){
        txt += "3 * " + i + " = " + (3* i) + "<br />";
    }
    divResultat.innerHTML = txt;
});
