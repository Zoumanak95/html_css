// -- structure de base IF

if (true) {// entre parenthèse la condition
    /* code */
}

var nb1 = 10;
if (nb1 < 50) {
    console.log("nb1 est bien inférieur à 50");
}

if (true) {
    // code
} else {
    // code sinon
}
nb1 = 60

if (nb1 < 50) {
    console.log("nb1 est bien inférieur à 50");
} else {
    console.log("nb1 est bien suppérieur à 50");
}

// on utilise le If pour vérifer l'âge de l'internaute
// Si il est majeur on li souhaite la bienvenue
// Sinon [1] je lui signale et [2] je le renvoie vers un autre site

var internaute = prompt('Quelle est votre âge')

if (internaute >= 18) {

    document.write("Bienvenue à vous !");

} else {

    window.location.href = 'http://www.w3docs.com/'
}