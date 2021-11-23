var mois = parseInt(prompt("Quel mois choisissez_vous", "saisir un chiffre entre 1 et 12"));

if(mois === 2){
    document.write("28 jours")
}else if ((mois === 4) || (mois === 6) || ( mois === 9 ) || (mois === 11)) {
    document.write("30 jours")
}else if ((mois === 1) || (mois === 3) || ( mois === 5 ) || (mois === 7) || (mois === 8) || (mois === 10) (mois === 12)) {
    document.write("31 jours");
    }else{
        document.write("pas dedans")
    }