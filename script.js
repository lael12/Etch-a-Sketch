document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resetButton = document.getElementById('reset-button');

    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            container.appendChild(square);
        }

        // Add hover effect
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = '#6200ea';
            });
        });
    }

    function resetGrid() {
        let size = parseInt(prompt('Enter the number of squares per side (max 100):'));
        if (size > 100) size = 100;
        if (size && size > 0) {
            createGrid(size);
        } else {
            alert('Invalid input! Please enter a number between 1 and 100.');
        }
    }

    // Initial grid
    createGrid(16);

    // Reset button event listener
    resetButton.addEventListener('click', resetGrid);
});
