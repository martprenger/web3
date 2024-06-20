
export class CheckUser {
    addLoginForm() {
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
        
            loginForm.addEventListener('submit', async (event) => {
                event.preventDefault();
        
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
        
                if (!username || !password) {
                    alert('Please fill in both username and password.');
                    return;
                }
        
                const data = { username, password };
        
                try {
                    const response = await fetch('http://localhost:8000/api/login_check', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
        
                    if (!response.ok) {
                        throw new Error('Login failed. Please try again.');
                    }
        
                    const result = await response.json();
        
                    if (result.token) {
                        localStorage.setItem('jwt_token', result.token);
                        window.location.href = '../index.html';
                    } else {
                        alert('Invalid username or password.');
                    }
                } catch (error) {
                    alert(error.message);
                }
            });
        });

    }
}