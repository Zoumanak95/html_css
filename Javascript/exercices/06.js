
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2);//true
// == compare les valeurs

console.log(nb1 === nb2) // false
//=== compare les valeurs et les types 

console.log(nb1 != nb2)// false
// != différent en valeur

console.log( nb1 !== nb2)// true
// !== les différent en valeur et en type

// ------- Exercie----------

var prenom, monAge, prenomLogin, ageLogin;
prenom = "Zoumana";
monage = 21;

prenomLogin = prompt("Quel est votre prénom?");
if(prenomLogin === prenom){

    ageLogin = parseInt(prompt("Votre age ?"));
    if(ageLogin === monage){
        alert("Bienvue"+prenomLogin);
    }else{
        alert("Votre age n'est pas celui stocké en BDD")
    }
}else{
    alert("Attention, prénom non reconnu");
}