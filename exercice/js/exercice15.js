//Exercice 15
//Sujet:
// Afficher pile ou face au clique du button

//Sans Jquery
const myButton = document.getElementById("button");
const divResultat = document.getElementById("madiv");

myButton.addEventListener("click", function(){
    divResultat.innerHTML = pileOuFace();
});

function pileOuFace(){
    var random = Math.floor(Math.random() * 2);
    return (random >= 1) ? "face" : "pile";
}

//Avec Jquery

// $("button").on("click", function(){
//     $("div").html(pileOuFace());
// });

// function pileOuFace(){
//     var random = Math.floor(Math.random() * 2);
//     return (random >= 1) ? "face" : "pile";
// }
