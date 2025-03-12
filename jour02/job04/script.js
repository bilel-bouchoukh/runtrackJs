document.addEventListener("keydown", function(event) {
    let textarea = document.getElementById("keylogger");
    let key = event.key;
    
    if (/^[a-z]$/.test(key)) { // Vérifie si c'est une lettre minuscule
        if (document.activeElement === textarea) {
            textarea.value += key + key; // Ajoute deux fois si focus
        } else {
            textarea.value += key; // Ajoute une seule fois sinon
        }
    }
});