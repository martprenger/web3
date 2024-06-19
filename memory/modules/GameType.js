
export class GameType {
    defaultGameType = 'alphabet';
    constructor() {
        this.createTypeOptions();
    }

    createTypeOptions() {
        const types = [
            {text: 'Cats', value: 'cats'},
            {text: 'Dogs', value: 'dogs'},
            {text: 'Countries', value: 'countries'}
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
            case 'dogs':
                return this.getDogs(amount);
            case 'countries':
                return this.getFlags(amount);
            default:
                return this.getCats(amount);
        }
    }

    async getCats(amount) {
        let skip = 0;
        const response = await fetch(`https://cataas.com/api/cats?tags=cute&type=jpg&size=med&skip=${skip}&limit=${amount}`);
        const data = await response.json();

        // get _id from the object and create URL
        return data.map(cat => `https://cataas.com/cat/${cat._id}`);
    }

    async getDogs(amount) {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${amount}`);
        const data = await response.json();

        // The Dog API returns the images in the 'message' field of the response
        return data.message;
    }

    async getFlags(amount) {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/all`);
            const data = await response.json();

            // Extract flag URLs from the response
            const flags = data.map(country => country.flags.png);

            // Randomly select 'amount' flag URLs
            return flags.sort(() => 0.5 - Math.random()).slice(0, amount);
        } catch (error) {
            console.error('Error fetching flag data:', error);
            return [];
        }

    }
}