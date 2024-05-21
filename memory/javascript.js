// Default colors
const defaultColorCard = '#ff0000';
const defaultColorOpen = '#00ff00';
const defaultColorFound = '#0000ff';

//add cards to the board
const createMemoryBoard = (rows, cols) => {
    let html = '';
    const numPairs = (rows * cols) / 2;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    // Fisher-Yates shuffle
    for (let i = alphabet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
    }

    let pairs = [];

    // Create pairs
    for (let i = 0; i < numPairs; i++) {
        pairs.push(alphabet[i]);
        pairs.push(alphabet[i]);
    }

    // Shuffle the pairs using Fisher-Yates shuffle again
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }


    // Create the HTML for the board
    pairs.forEach((pair, index) => {
        let cardClass = 'closed';
        html += `<div class="card ${cardClass}" data-value="${pair}">?</div>`;
    });

    // Set the HTML to the board element
    const board = document.getElementById('board');
    board.innerHTML = html;

    // Add event listener to each card
    const cards = board.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            clickOnCard(this);
        });
    });
};

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

document.addEventListener('DOMContentLoaded', function () {
    // Color input fields
    const colorCardInput = document.getElementById('colorcard');
    const colorOpenInput = document.getElementById('coloropen');
    const colorFoundInput = document.getElementById('colorfound');

    // Set color input fields to saved values or default colors
    colorCardInput.value = localStorage.getItem('colorCard') || defaultColorCard;
    colorOpenInput.value = localStorage.getItem('colorOpen') || defaultColorOpen;
    colorFoundInput.value = localStorage.getItem('colorFound') || defaultColorFound;

    // Save new color values to localStorage when they change
    colorCardInput.addEventListener('change', function () {
        localStorage.setItem('colorCard', this.value);
        setCardColors();
    });

    colorOpenInput.addEventListener('change', function () {
        localStorage.setItem('colorOpen', this.value);
        setCardColors();
    });

    colorFoundInput.addEventListener('change', function () {
        localStorage.setItem('colorFound', this.value);
        setCardColors();
    });
    setCardColors();
});

let openCard = null;
let secondOpenCard = null;

function clickOnCard(card) {
    // if card is already open, do nothing
    if (card.classList.contains('open')) {
        return;
    }

    // if there are two open cards, close them immediately
    if (openCard && secondOpenCard) {
        openCard.classList.remove('open');
        openCard.classList.add('closed');
        openCard.textContent = '?';
        secondOpenCard.classList.remove('open');
        secondOpenCard.classList.add('closed');
        secondOpenCard.textContent = '?';
        openCard = null;
        secondOpenCard = null;
    }

    console.log(card);
    // if closed card make it open
    if (card.classList.contains('closed')) {
        card.classList.remove('closed');
        card.classList.add('open');
        card.textContent = card.dataset.value;
    }

    // if no card is open, this card becomes the open card
    if (!openCard) {
        openCard = card;
    } else if (!secondOpenCard) {
        // if another card is open, check if they match
        secondOpenCard = card;
        if (openCard.dataset.value === secondOpenCard.dataset.value) {
            // if they match, they both become found
            openCard.classList.remove('open');
            openCard.classList.add('found');
            secondOpenCard.classList.remove('open');
            secondOpenCard.classList.add('found');
            openCard = null;
            secondOpenCard = null;
        }
    }
}

function setCardColors() {
    const colorCard = localStorage.getItem('colorCard') || defaultColorCard;
    const colorOpen = localStorage.getItem('colorOpen') || defaultColorOpen;
    const colorFound = localStorage.getItem('colorFound') || defaultColorFound;

    //set css variables
    document.documentElement.style.setProperty('--color-card', colorCard);
    document.documentElement.style.setProperty('--color-open', colorOpen);
    document.documentElement.style.setProperty('--color-found', colorFound);
}