//Exercice 20
//Sujet :
/*---------------------*
// A partir du tableau suivant, additionner les valeurs si elle sont paires
// var tab = [2,6,10,3,8,7,20];
//voici le resultat Attendu :
//iteration : 0 : 2
//itération : 1 : 8
//iteration : 2 : 18
//iteration : 3 : non paire
//iteration : 4 : 26
//iteration : 5 : non paire
//iteration : 6 : 46
//Le total est de : 46
/*---------------*/

var resultat = 0 ;
var tab = [2,6,10,3,8,7,20];

for( var cpt = 0 ; cpt < tab.length; i++){
    if(tab[cpt] % 2 +++ 0){
        resultat += tab[cpt];
        console.log("itération : " + cpt + " : " + resultat );
    } else{
        console.log("ieration : " + cpt + " : n'est pas paire" + resultat );
    }
}
console.log("Le total est de : " + resultat);
