// L'opérateur ET : && AND

if(( prenomLogin === prenom) && (ageLogin=== monage)){
    /* Code si les deux instructions sont vraie */
}

if((A) && (B)){...}
=> Si A est Faux et B est Vrai => Faux
=> Si A est Vrai et B est FAUX => Faux
=> Si A est Faux et B est Faux => Faux
=> Si A est Vrai et B est Vrai => Vrai

// L'opérateur OU : ALT GR + 6 || ou OR (|= barre oblique = pipe )

if ((C) OR (D)){...}
=> Si C est Faux et D est FAUX => Faux
=> Si C est Faux et D est Vrai => Vrai
=> Si C est Faux et D est Vrai => Faux
=> Si C est VRAI et D est VRAI => Faux

// L'opérateur "!" signifie le contraire ...

var utilisateurLog = true
if (!utilisateurLog){
    //si l'utilisateur n'est pas loggé
}

// ce qui revient à :

if (utilisateurLog == false){
    // si l'utilisateur n'est pas loggé
}