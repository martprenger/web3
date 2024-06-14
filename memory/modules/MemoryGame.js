export class MemoryGame {
    constructor(gameSizeInstance, gameTypeInstance) {
        this.gameSizeInstance = gameSizeInstance;
        this.gameTypeInstance = gameTypeInstance;

        this.score = 0;
        this.elapsedTime = 0;
        this.remainingTime = 60; // in seconds
        this.timerInterval = null;
        this.scoreDisplay = document.getElementById('score');
        this.elapsedTimeDisplay = document.getElementById('elapsed-time');
        this.remainingTimeDisplay = document.getElementById('remaining-time');
        this.startBtn = document.getElementById('start-btn');
        this.board = document.querySelector('.board');
        this.totalPairs = 0;
        this.gameStarted = false;

        this.openCard = null;
        this.secondOpenCard = null;
        this.foundPairs = 0;

        this.createMemoryBoard(this.gameSizeInstance.getGameSize());
        this.startGame = this.startGame.bind(this);
        this.startBtn.addEventListener('click', this.startGame);
    }

    async createMemoryBoard(size) {
        let html = '';
        const numPairs =  size / 2;
        this.totalPairs = numPairs;

        // get a random order list of the value for the list
        const cardsValues = await this.gameTypeInstance.getCardValues(numPairs);
        console.log(cardsValues);

        // Fisher-Yates shuffle
        for (let i = cardsValues.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardsValues[i], cardsValues[j]] = [cardsValues[j], cardsValues[i]];
        }

        let pairs = [];

        // Create pairs
        for (let i = 0; i < numPairs; i++) {
            pairs.push(cardsValues[i]);
            pairs.push(cardsValues[i]);
        }

        // Shuffle the pairs using Fisher-Yates shuffle again
        for (let i = pairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
        }


        // Create the HTML for the board
        pairs.forEach((pair, index) => {
            let cardClass = 'closed';
            html += `<div class="card ${cardClass}" data-value="${pair}">
                        <p class="text">?</p>
                        <img src="${pair}" class="img" alt="Card image">
                     </div>`;
        });

        // Set the HTML to the board element
        const board = document.getElementById('board');
        board.className = `board size-${size}`;
        board.innerHTML = html;

        // Add event listener to each card
        const cards = board.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.clickOnCard(card);
            });
        });
    }

    updateTimeDisplay() {
        this.elapsedTimeDisplay.textContent = `Elapsed Time: ${this.elapsedTime}s`;
        this.remainingTimeDisplay.textContent = `Remaining Time: ${this.remainingTime}s`;
    }

    startGame() {
        this.score = 0;
        this.elapsedTime = 0;
        this.remainingTime = 60;
        this.openCard = null;
        this.secondOpenCard = null;
        this.foundPairs = 0;

        this.gameStarted = true;

        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.createMemoryBoard(this.gameSizeInstance.getGameSize()).then(r => console.log('Board created'));

        this.scoreDisplay.textContent = `Score: ${this.score}`;
        this.updateTimeDisplay();

        this.timerInterval = setInterval(() => {
            this.elapsedTime++;
            this.remainingTime--;

            this.updateTimeDisplay();

            if (this.remainingTime <= 0) {
                clearInterval(this.timerInterval);
                alert('Time\'s up! MemoryGame over.');
                this.gameStarted = false;
            }
        }, 1000);
    }

    clickOnCard(card) {
        // if game is not started or already finished start new game
        if (!this.gameStarted) {
            this.startGame();
            return;
        }

        // if card is already open, do nothing
        if (card.classList.contains('open') || card.classList.contains('found')) {
            return;
        }

        // if there are two open cards, close them immediately
        if (this.openCard && this.secondOpenCard) {
            this.openCard.classList.remove('open');
            this.openCard.classList.add('closed');
            this.secondOpenCard.classList.remove('open');
            this.secondOpenCard.classList.add('closed');
            this.openCard = null;
            this.secondOpenCard = null;
        }

        console.log(card);
        // if closed card make it open
        if (card.classList.contains('closed')) {
            card.classList.remove('closed');
            card.classList.add('open');
        }

        // if no card is open, this card becomes the open card
        if (!this.openCard) {
            this.openCard = card;
        } else if (!this.secondOpenCard) {
            this.secondOpenCard = card;
            if (this.openCard.dataset.value === this.secondOpenCard.dataset.value) {
                this.openCard.classList.remove('open');
                this.openCard.classList.add('found');
                this.secondOpenCard.classList.remove('open');
                this.secondOpenCard.classList.add('found');
                this.openCard = null;
                this.secondOpenCard = null;
                this.foundPairs++;
                this.score += 10;
                this.scoreDisplay.textContent = `Score: ${this.score}`;
                console.log('Found pairs: ', this.foundPairs);
                console.log('Total pairs: ', this.totalPairs);
                if (this.foundPairs === this.totalPairs) {
                    clearInterval(this.timerInterval);
                    setTimeout(() => {
                        alert('Congratulations! You found all pairs!');
                    }, 0);
                    this.gameStarted = false;
                }
            }
        }
    }
}
