function createGrid(gridSize) {
    const container = document.querySelector(".container");

    // Clear the existing grid
    container.innerHTML = "";

    // Limit the gridSize to a maximum of 96 and calculate the cell size dynamically
    gridSize = Math.min(gridSize, 96);
    const cellSize = 800 / gridSize; // Maximum height is set to 600px

    // Set the container's width and height to 600px
    container.style.maxWidth = "800px";
    container.style.maxHeight = "800px";

    // Create the new grid
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            row.appendChild(cell);

            // Add event listeners for the hover effect
            cell.addEventListener("mouseenter", function () {
                cell.classList.add("pixelated");
            });
        }
    }
}

function changeGridSize() {
    let input = prompt("Enter grid size (max 96):");
    let gridSize = parseInt(input);

    if (gridSize < 1 || isNaN(gridSize)) {
        alert("Invalid input. Please enter a valid number.");
    } else {
        gridSize = Math.min(gridSize, 96); // Set the maximum allowed size to 96
        createGrid(gridSize);
    }
}

// Initial grid creation with default size of 16x16
createGrid(16);
