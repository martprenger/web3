export class RequireLogin {
constructor(JWT) {
        this.JWT = JWT;
        this.requireLogin();
    }

    requireLogin() {
        if (this.JWT.checkToken()){
            window.location.href = './login.html';
            return;
        }

        const expirationDate = this.JWT.getTokenExpirationDate();
        const currentTime = new Date();
        const delay = expirationDate.getTime() - currentTime.getTime();

        if (delay > 0) {
            setTimeout(() => {
                window.alert('Your session has expired. Please log in again.');
                window.location.href = './login.html';
            }, delay);
        } else {
            window.alert('Your session has expired. Please log in again.');
            window.location.href = './login.html';
        }

    }

}