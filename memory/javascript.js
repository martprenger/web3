//add cards to the board
const createMemoryBoard = (rows, cols) => {
    let html = '';
    let numPairs = (rows * cols) / 2;
    let pairs = [];

    // Create pairs
    for (let i = 1; i <= numPairs; i++) {
        pairs.push(i);
        pairs.push(i);
    }

    // Shuffle pairs
    pairs = pairs.sort(() => 0.5 - Math.random());

    // Randomly select indices for found and picked cards
    const totalCards = rows * cols;
    const numFound = Math.floor(totalCards * 0.2); // 20% of the cards are found
    const foundIndices = new Set();

    while (foundIndices.size < numFound) {
        foundIndices.add(Math.floor(Math.random() * totalCards));
    }

    let pickedIndex;
    do {
        pickedIndex = Math.floor(Math.random() * totalCards);
    } while (foundIndices.has(pickedIndex));

    // Create the HTML for the board
    pairs.forEach((pair, index) => {
        let cardClass = 'closed';
        if (foundIndices.has(index)) {
            cardClass = 'found';
        } else if (index === pickedIndex) {
            cardClass = 'picked';
        }

        html += `<div class="card ${cardClass}" data-value="${pair}">${cardClass === 'closed' ? '?' : pair}</div>`;
    });

    // Set the HTML to the board element
    document.getElementById('board').innerHTML = html;
}

// Call the function to create a 6x6 memory board
createMemoryBoard(6, 6);


// JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    // Variables to store game state
    let score = 0;
    let elapsedTime = 0;
    let remainingTime = 60; // in seconds

    // DOM elements
    const scoreDisplay = document.getElementById('score');
    const elapsedTimeDisplay = document.getElementById('elapsed-time');
    const remainingTimeDisplay = document.getElementById('remaining-time');
    const startBtn = document.getElementById('start-btn');
    const board = document.querySelector('.board');

    // Function to update time display
    function updateTimeDisplay() {
        elapsedTimeDisplay.textContent = `Elapsed Time: ${elapsedTime}s`;
        remainingTimeDisplay.textContent = `Remaining Time: ${remainingTime}s`;
    }

    // Function to start the game
    function startGame() {
        // Reset game state
        score = 0;
        elapsedTime = 0;
        remainingTime = 60;

        // Update display
        scoreDisplay.textContent = `Score: ${score}`;
        updateTimeDisplay();

        // Start timer
        const timerInterval = setInterval(function () {
            elapsedTime++;
            remainingTime--;

            updateTimeDisplay();

            // Check if time's up
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                alert('Time\'s up! Game over.');
                // You can add more game over logic here
            }
        }, 1000);

        // Add logic for generating cards and game mechanics
        // This is where you'll add logic for card flipping, matching, etc.
    }

    // Event listener for start button
    startBtn.addEventListener('click', startGame);
});