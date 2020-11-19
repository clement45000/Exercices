//Exercice 26
// Realiser une page HTML qui permet de saisir un pseudo, un chiffre et qui dispose de deux boutons : 
//- Addition
// - Factorielle

//Vous ajouterez un programme Javascript qui, en fonction des saisies et du bouton cliqué,
//realisera le calcul et affichera le resultat

//Vous devez créer deux fichier Javascript : 
//1. exercice27a.js contenant les fonctioins de calcul
//2. exercice27b.js contenant le corps du preogramme Javascript
//Vous devez utliser les lignes HTML suivantes (ne pas modifier le fichier HTML directement)


//Fonction du calcule
var calculManager = {
    addition : function(chiffre){
        var resultat = 0;
        for(var i = 1; i <= chiffre; i++){
            resultat += i;
        }
        return resultat;
    },
    factorielle : function(chiffre){
        var resultat = 1;
        for (var i = 1; i < chiffre; i++){
            resultat *= i;
        }
        return resultat;
    }
}