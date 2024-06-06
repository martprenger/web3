export class GameType {
    defaultGameType = 'alphabet';
    constructor() {
        this.createTypeOptions();
    }

    createTypeOptions() {
        const types = [
            {text: 'Cats', value: 'cats'}
        ];

        const dropdown = document.getElementById("gameType");
        const gameType = this.getGameType();

        types.forEach(type => {
            let option = document.createElement("option");
            option.text = type.text;
            option.value = type.value;

            if (type.value === gameType) {
                option.selected = true;
            }

            dropdown.appendChild(option);
        });

        dropdown.addEventListener('change', () => {
            localStorage.setItem('gameType', dropdown.value);
        });
    }

    getGameType() {
        return localStorage.getItem('gameType') || this.defaultGameType;
    }

    getCardValues(amount) {
        switch (this.getGameType()) {
            case 'cats':
                return this.getCats(amount);
            default:
                return this.getCats(amount);
        }
    }

    getCats(amount) {
        // get amount of random cat images from https://cataas.com/

        const cats = [];

        for (let i = 0; i < amount; i++) {
            // whole numbers only
            const random = Math.floor(Math.random() * 1000);
            cats.push(`https://cataas.com/cat/${random}`);
        }

        return cats;

    }

    getAlphabet() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    }

    getNumbers() {
        return '0123456789'.split('');
    }

    getColors() {
        return [
            'red',
            'blue',
            'green',
            'yellow',
            'purple',
            'orange',
            'pink',
            'brown',
            'black',
            'white'
        ];
    }
}