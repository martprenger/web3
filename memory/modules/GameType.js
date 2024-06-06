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



    async getCats(amount) {
        let skip = Math.floor(Math.random() * 100);
        const response = await fetch(`https://cataas.com/api/cats?tags=funny&type=jpg&size=med&skip=${skip}&limit=${amount}`);
        const data = await response.json();

        // get _id from the object and create URL
        return data.map(cat => `https://cataas.com/cat/${cat._id}`);
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