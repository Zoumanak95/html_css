/* 
Les boucles
*/

// La boucle FOR
/*
for ( 3 argument){
    /*code
}
 1. Initialise un compteur, par défaut on uitilise i
 2. Condition à vérifier (vrai)
 3. "Pas" d'incrémentation -> combien j'ajoute par tour (i++)
*/

for ( var i = 1; i<= 10; i+= 2){
    document.write("<p> Instruction exécutée : " + i +"fois.</p>");
}

// La boucle WHILE ( tant que)

var j = 1;
while(j <= 10){
    document.write("<p> Instruction exécutée : " + j +"fois.</p>");
    j++;
}

/* Exercice

J'ai 1000€ sur mon compte, chaque mois j'ajoute 50€, combien de temps me faut-il pour avoir 2000€ sur mon compte ? */

for ( var i = 1; i<= 1000; i+= 50){
    document.write("<p> Instruction exécutée : " + i +"fois.</p>");
}