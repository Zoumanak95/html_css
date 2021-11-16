//alert("ok");

//-- 1 Addition 


// Je déclare plusieurs variables
var nb1, nb2, resultat;

// j'affectre des valeurs 
nb1 = 10;
nb2 = 2;

// j'utilise mes varibles avec un calcul

resultat = nb1 + nb2;

// J'affiche le resultat 
console.log(resultat);

// -- 2 Les soustraction

resultat = nb1 - nb2;
console.log(resultat)

// -- 3 Les multiplications
resultat = nb1 * nb2;
console.log(resultat)

// -- Les divisions

resultat = nb1 / nb2
console.log(resultat);

//-- 5 Modulo
// Le Modulo retourne le reste d'une division

resultat = nb1 % nb2;
console.log(resultat);

nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égale à : " + resultat);

//-- 6 Les Ecriturees simplifiées

nb1 = 15;
nb1 = nb1 + 5; //égale à 20

nb1 += 10 //nb1 = nb1 +10
console.log('Le résultat de "nb1 +=10" est ' +nb1);

nb2 -= 2;  // nb2 = nb2 - 2
console.log(nb2); // L'écriture simplifiée fonctionne aussi avec les autres opérateurs

// Je peux échapper un caractère avec un anti-slash (alt r + 8)