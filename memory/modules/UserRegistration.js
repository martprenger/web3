document.getElementById('RegistrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    try {
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 201) {
            alert('User registered successfully');
            window.location.href = './login.html';
        } else if (response.status === 400) {
            alert('Error registering user in database');
        } else {
            alert('Error registering user could not connect to server');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error registering user could not connect to server');
    }
});
