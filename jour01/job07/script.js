function jourTravaille(date){
    let joursFeries = [
        "2024-01-01", // Jour de l'An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    let nbJoursFerier = joursFeries.lenght

    for (let i = 0 ; i<nbJoursFerier ; i++){
        if (date == joursFeries){
            console.log("Le jour mois année est un jour férié.")
        }
    }
}


