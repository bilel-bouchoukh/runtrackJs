function sommeNombresPremiers(x, y){
    const NombrePremier = (a) => {
        if (a < 2) return(false) ;
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) return(false);
        }
        return(true);
    }

    return NombrePremier(x) && NombrePremier(y) ? x + y : "Un des nombres est pas premiers";
}


console.log(sommeNombresPremiers(3,5));
