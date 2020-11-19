//Exercice24
//Sujet 
// Vous devez réaliser un programme permettant de comparer deux sportifs.
// Vous aller créer les deu objets qui contiendront:
// - un nom
// - un age
// - Un poids
// - Une taille

//Les deux objets js contiennent tou les deux, deux fonctions:
//affichage(): permet à l'objet de s'afficher lui même
//getForce : permet à l'objet de calculer et retourner sa force suivant la formule :
// Force = (taille * poids)/ age
//Réaliser l'affichage demandé

var toto = {
nom : "toto",
    age : 25,
    poids : 80,
    taille : 180,
    affichage : function(){
        var txt = "Nom : " + this.nom + "\n";
        txt+= "Age : " + this.age + "\n";
        txt+= "Poids : " + this.poids + "\n";
        txt+= "Taille: " + this.taille + "\n";
        console.log(txt);
    },
    getForce : function(){
        return (this.poids * this.taille) / this.age;
    }
}

var marcel = {
    nom : "marcel",
    age : 32,
    poids : 100,
    taille : 175,
    affichage : function(){
        var txt = "Nom : " + this.nom + "\n";
        txt+= "Age : " + this.age + "\n";
        txt+= "Poids : " + this.poids + "\n";
        txt+= "Taille: " + this.taille + "\n";
        console.log(txt);
    },
    getForce : function(){
        return (this.poids * this.taille) / this.age;
    }
}

if(marcel.getForce() > toto.getForce()){
    console.log("Marcel est plus fort que Toto");
    marcel.affichage();
    console.log(`Force : ${marcel.getForce()}`);
} else {
    console.log("Toto est plus fort que Marcel");
    marcel.affichage();
    console.log(`Force : ${toto.getForce()}`);
}

console.log("La force de Marcel est de "  + marcel.getForce());
console.log("La force de Toto est de " + toto.getForce());
