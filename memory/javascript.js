import {MemoryGame} from './modules/MemoryGame.js';
import {GameSize} from './modules/GameSize.js';

// Default colors
const defaultColorCard = '#ff0000';
const defaultColorOpen = '#00ff00';
const defaultColorFound = '#0000ff';

// use new memory game clas
const gameSize = new GameSize();
const memory = new MemoryGame(gameSize);

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

function setCardColors() {
    const colorCard = localStorage.getItem('colorCard') || defaultColorCard;
    const colorOpen = localStorage.getItem('colorOpen') || defaultColorOpen;
    const colorFound = localStorage.getItem('colorFound') || defaultColorFound;

    //set css variables
    document.documentElement.style.setProperty('--color-card', colorCard);
    document.documentElement.style.setProperty('--color-open', colorOpen);
    document.documentElement.style.setProperty('--color-found', colorFound);
}