let button = document.getElementById('button');
button.addEventListener('click',addOne);

function addOne(){
    let compteur = document.getElementById('compteur');
    compteur.textContent = parseInt(compteur.textContent) + 1; 
}