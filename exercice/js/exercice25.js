//Exercice 9
//Créer un programme permettant de gérer une classe d'école ayant 3 élèves
//Vous devez réaliser la struture suivante : 
// - La classe est un objet Javascript qui contient:
// Chacun des élèves, qui sont eux meme des objet contenant : 
      // 1/ un nom, un age et un tableau de notes
      // 2/ 4 fonctions
      //   a) afficherEleve: function(eleve)
      ///  b) afficherClasse: function()
      //   c) calculerMyenneEleve : function(eleve)
      //   d) calculerMoyenneClassr : function
//Réaliser l'affichage comme le montre la photo 2 dans le dossier js/img/photo2


var classe = {
    marc : {
        nom : "Marc",
        age : 21,
        notes : [12,15,13,10,7]
    },
    eric : {
        nom : "Eric",
        age : 18,
        notes : [5,15,3,9,17]
    },
    marie : {
        nom : "Marie",
        age : 22,
        notes : [10,10,11,12,11]
    },
    afficherEleve : function(eleve){
        console.log("Nom : " + eleve.nom);
        console.log("age : " + eleve.age);
        console.log("notes : ");
        var noteTxt = "";
        for(var i = 0 ; i <eleve.notes.length; i++){
            noteTxt += "num" + i + " - " + eleve.notes[i] + "\n";
        }
        console.log(noteTxt)
    },
    calculerMoyenneEleve : function(eleve){
        var moyenne = 0;
        for(var i = 0 ; i <eleve.notes.length; i++){
          moyenne += eleve.notes[i];
        }
        return moyenne/eleve.notes.length;
    },
    afficherClasse : function(){
        this.afficherEleve(this.marc);
        this.afficherEleve(this.eric);
        this.afficherEleve(this.marie);
    },
    calculerMoyenneClasse : function(){
        var moyenneMarc = this.calculerMoyenneEleve(this.marc);
        var moyenneEric = this.calculerMoyenneEleve(this.eric);
        var moyenneMarie = this.calculerMoyenneEleve(this.marie);
        return (moyenneMarc + moyenneEric + moyenneMarie) / 3;
    }
}

console.log("Voici vos élèves : ");
classe.afficherClasse();
console.log(`Voici la moyenne de la classe: ${classe.calculerMoyenneClasse()}`);

//classe.afficherEleve(classe.marie);
//console.log(classe.calculerMoyenneEleve(classe.eric));
