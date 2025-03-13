document.addEventListener("DOMContentLoaded", function() {
    const gridSize = 3; // Grille 9x9
    const totalCells = gridSize * gridSize;
    const grid = document.getElementById("grid");

    let positions = [];
    
    // Ajouter 8 images et des cases vides
    for (let i = 1; i <= 8; i++) {
        positions.push(`<img src="logo${i}.PNG" alt="image${i}" class="image">`);
    }
    while (positions.length < totalCells - 1) {
        positions.push(""); // Ajouter des cases vides
    }
    positions.push(""); // Dernière case vide

    // Mélanger les positions
    positions = shuffle(positions);

    // Générer la grille
    positions.forEach((content, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (content === "") {
            cell.classList.add("empty");
        } else {
            cell.innerHTML = content;
        }
        grid.appendChild(cell);
    });

    // Mettre à jour les événements après chaque déplacement
    function updateClickEvents() {
        document.querySelectorAll(".image").forEach(img => {
            img.onclick = function() {
                let imgParent = this.parentElement;
                let emptyCell = document.querySelector(".empty");

                if (areAdjacent(imgParent, emptyCell)) {
                    emptyCell.innerHTML = imgParent.innerHTML;
                    imgParent.innerHTML = "";
                    emptyCell.classList.remove("empty");
                    imgParent.classList.add("empty");
                    updateClickEvents(); // Mettre à jour les événements
                }
            };
        });
    }
    
    updateClickEvents(); // Initialiser les événements

    // Mélanger un tableau (Fisher-Yates)
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Vérifier si deux cases sont adjacentes
    function areAdjacent(cell1, cell2) {
        let cells = Array.from(grid.children);
        let index1 = cells.indexOf(cell1);
        let index2 = cells.indexOf(cell2);
        let row1 = Math.floor(index1 / gridSize);
        let col1 = index1 % gridSize;
        let row2 = Math.floor(index2 / gridSize);
        let col2 = index2 % gridSize;

        return (Math.abs(row1 - row2) === 1 && col1 === col2) || 
               (Math.abs(col1 - col2) === 1 && row1 === row2);
    }
});