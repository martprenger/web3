export class TopScores {
    constructor() {
        this.createTopScores();
    }

    async createTopScores() {
        const scores = await this.getScores();
        const topScores = document.getElementById('ranking');
        topScores.innerHTML = '<h1>Rankings</h1>';
        scores.forEach((score, index) => {
            const p = document.createElement('p');
            p.textContent = `${index + 1}. ${score.username}: ${score.score}`;
            topScores.appendChild(p);
        });
    }

    async getScores() {
        // GET /scores return a list of scores with username and score
        // sort this list and return if more than 5 the top 5
        // if less than 5 return all

        return await fetch('http://localhost:8000/scores')
            .then(response => response.json())
            .then(scores => {
                scores.sort((a, b) => b.score - a.score);
                return scores.slice(0, 5);
            });
    }
}