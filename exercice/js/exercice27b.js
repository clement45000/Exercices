// Corps du programme
const inputPseudo = document.getElementById("pseudo");
const chiffreSaisi = document.getElementById("chiffre");
const buttonAddition = document.getElementById("addition");
const buttonFactorielle = document.getElementById("factorielle");
const resultat = document.getElementById("resultat");

function afficherResultat(calcul){
    resultat.innerHTML = "<h1>Bonjour" + inputPseudo.value + "</h1>";
    resultat.innerHTML = "<div>Le resultat du calcul demandé est : " + calcul + "</h1>";
}

buttonAddition.addEventListener("click", function(){
    var calculResultat = calculManager.addition(parseInt(chiffreSaisi.value));
    afficherResultat(calculResultat);
});

buttonFactorielle.addEventListener("click", function(){
    var calculResultat = calculManager.factorielle(parseInt(chiffreSaisi.value));
    afficherResultat(calculResultat);
});
console.log("feuilleb.js");