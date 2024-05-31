export class GameColor {
    constructor() {
        this.defaultColorCard = '#ff0000';
        this.defaultColorOpen = '#00ff00';
        this.defaultColorFound = '#0000ff';
        this.setCardColors();
        this.createColorInputs();
    }

    getColorCard() {
        return localStorage.getItem('colorCard') || this.defaultColorCard;
    }

    getColorOpen() {
        return localStorage.getItem('colorOpen') || this.defaultColorOpen;
    }

    getColorFound() {
        return localStorage.getItem('colorFound') || this.defaultColorFound;
    }

    setColorCard(color) {
        localStorage.setItem('colorCard', color);
        this.setCardColors();
    }

    setColorOpen(color) {
        localStorage.setItem('colorOpen', color);
        this.setCardColors();
    }

    setColorFound(color) {
        localStorage.setItem('colorFound', color);
        this.setCardColors();
    }

    setCardColors() {
        const colorCard = this.getColorCard();
        const colorOpen = this.getColorOpen();
        const colorFound = this.getColorFound();

        //set css variables
        document.documentElement.style.setProperty('--color-card', colorCard);
        document.documentElement.style.setProperty('--color-open', colorOpen);
        document.documentElement.style.setProperty('--color-found', colorFound);
    }

    addEventToColorInput(inputId, setColor) {
        const colorInput = document.getElementById(inputId);

        colorInput.addEventListener('change', function () {
            setColor.call(this, colorInput.value);
        }.bind(this));
    }

    createColorInputs() {
        this.addEventToColorInput('colorcard', this.setColorCard);
        this.addEventToColorInput('coloropen', this.setColorOpen);
        this.addEventToColorInput('colorfound', this.setColorFound);
    }
}