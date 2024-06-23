export class JWT {
    jwtToken = localStorage.getItem('jwt_token');
    base64Url;
    base64;
    payload;

    constructor() {
        this.decode();
    }

    decode() {
        if (this.jwtToken === null) {
            window.location.href = './login.html';
            return;
        }
        this.base64Url = this.jwtToken.split('.')[1];
        this.base64 = this.base64Url.replace(/-/g, '+').replace(/_/g, '/');
        this.payload = decodeURIComponent(window.atob(this.base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    getPlayerId() {
        const parsedPayload = JSON.parse(this.payload);
        return parsedPayload.sub;
    }

    getTokenExpirationDate() {
        const parsedPayload = JSON.parse(this.payload);
        return new Date(parsedPayload.exp * 1000);
    }

    checkIdOnServer() {
        const playerId = this.getPlayerId();
        return fetch(`http://localhost:8000/api/player/${playerId}`, {
            method: 'GET',
        })
            .then(response => {
                return response.status === 200;
            })
            .catch(error => {
                console.error('Error fetching player data:', error);
                return false;
            });
    }

    checkToken() {
        if (this.jwtToken === null) {
            return false;
        } else if (this.getTokenExpirationDate() > new Date()) {
            return false;
        } else if (!this.checkIdOnServer()){
            return false;
        }
        return true;
    }


}