var nb1 = parseInt(prompt("Valeur nb1"));
var nb2 = parseInt(prompt("Valeur nb2"));



if ((!isNaN(nb1)) && (!isNaN(nb2))) {
    if (nb1 < nb2) {
        document.write(  nb1 + " est plus petit que:" + nb2)
    } else if (nb1 > nb2) {
        document.write( nb1 + " est plus grand que " + nb2)

    }
    else {
        document.write("Vos deux valeurs sont égales" )

    }
} else {
    alert("Vous n'avez pas saisi de chifres(s)");
}

/* insNaN = is not a number */