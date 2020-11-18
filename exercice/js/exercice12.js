//Exercice 12
// *********---------------*********

//Sujet :
//Changer la couleur des inputs
//L'input nom doit avoir un background rouge
//L'input prenom doit avoir un background blue

// ********----------------**************

//Solution 1
//sans Jquery

// var inputName = document.getElementById("nom");
// inputName.style.backgroundColor = "red";

// var inputFirstName = document.getElementById("prenom");
// inputFirstName.style.backgroundColor = "blue";

//Solution 2
//Avec Jquery

var inputName = $("#nom");
var inputFirstName = $("#prenom");

inputName.css("background-color","red");
inputFirstName.css("background-color","blue");