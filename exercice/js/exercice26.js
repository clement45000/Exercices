//Exercice 10 
// Vérification login / mdp
// Sujet :
//*---------------------------------------------------------------------*
//Realiser une page Html qui permet de saisir un login et un password
// AJouter un programme javascript qui va vérifier la saisie du login et du 
//password afin que l'utilisateur respecte les règles suivantes:
// - Login : format du mail, doit contenur un @ et un .
//Le password doit contenir:
// - Entre 6 et 8 caractères
// - 1 catactère spécial minimum
// - 1 chiffre
//Vous realiserez l'affichage comme le montre les impressions d'écran :
//-  Si le login n'est pas conforme, le champs est en rouge sinon il est en vert 
//-  Si le password n'est pas conform, nous avons l'explication en dessous
// *---------------------------------------------------------------------------*
const login = document.getElementById("login");
const password = document.getElementById("password");
const resultatPassword = document.getElementById("resultatPassword");
console.log(login);
console.log(password);
console.log(resultatPassword);

//verification du login
login.addEventListener("keyup", function(){
    var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    if(!regex.test(login.value)){
        login.style.backgroundColor="red";
    } else{
        login.style.backgroundColor= "green";
    }
});

//verification du password
password.addEventListener("blur", function(){
   var carDecial = /\d/
   var caracSpeciaux = /[$&@!]/
   var error = "";

   if(password.value.length < 6){
       error += "<li>trop court</li>";
   } else if(password.value.length > 8){
       error += "<li>trop long</li>";
   }
   if(!password.value.match(carDecial)){
        error += "<li>doit contenir un chiffre</li>";
   }
   if(!password.value.match(caracSpeciaux)){
       error += "<li>doit contenir un caractère spécial $, &, @, ! </li>";
   }

   if(error !== ""){
       resultatPassword.innerHTML = "Le password : <ul>" + error + "</ul>";
       resultatPassword.style.border = "2px solid red";
   } else {
       resultatPassword.innerHTML = "Le password est valide";
       resultatPassword.style.border = "2px solid green";
   }
});


console.log("jojo");