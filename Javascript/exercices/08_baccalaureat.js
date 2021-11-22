var name = prompt("Votre nom");
var moy = parseFloat(prompt("Votre moyenne")); // Float pour prendre en compte les nombres a virgules




if (!isNaN(moy)) {


    if (moy < 10) {
        document.write(   " Recalé" )

 } else if ((moy >= 10) && (moy < 12)) {
        document.write(  " Admis ")
 } else if ((moy >= 12) && (moy <= 20 )) {
        document.write(  " Mention ")
 }
    
} else {
    alert("Et de 0 à 20 ça donne?");
}

/* insNaN = is not a number */