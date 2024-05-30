

export class GameSize {
    defaultGameSize = 36;
    constructor() {
        this.createSizeOptions();
    }

    createSizeOptions() {
        const sizes = [
            {text: 'Small', value: 16},
            {text: 'Medium', value: 36},
            {text: 'Biggie', value: 64}
        ];

        const dropdown = document.getElementById("gameSize");
        const gameSize = this.getGameSize();

        sizes.forEach(size => {
            let option = document.createElement("option");
            option.text = size.text;
            option.value = size.value;

            if (size.value === gameSize) {
                option.selected = true;
            }

            dropdown.appendChild(option);
        });

        dropdown.addEventListener('change', () => {
            localStorage.setItem('gameSize', dropdown.value);
        });
    }

    getGameSize() {
        return Number(localStorage.getItem('gameSize')) || this.defaultGameSize;
    }
}