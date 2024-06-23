export class JWT {
    jwtToken = localStorage.getItem('jwt_token');
    base64Url;
    base64;
    payload;

    constructor() {
        this.decode();
    }

    decode() {
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
}