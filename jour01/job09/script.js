function tri(numbers, order) {
    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
        throw new Error("Le premier argument doit être un tableau de nombres.");
    }
    
    if (order !== "asc" && order !== "desc") {
        throw new Error("Le deuxième argument doit être 'asc' ou 'desc'.");
    }
    
    return numbers.sort((a, b) => order === "asc" ? a - b : b - a);
}

console.log(tri([5, 2, 9, 1, 5, 6], "asc"));  // [1, 2, 5, 5, 6, 9]
console.log(tri([5, 2, 9, 1, 5, 6], "desc")); // [9, 6, 5, 5, 2, 1]
