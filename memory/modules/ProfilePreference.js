export class ProfilePreference{

    constructor(JWT){
        this.JWT = JWT;
    }


    setPreferenceButton(){
        document.getElementById('profileSettings').addEventListener('click', function(){
            window.location.href = './preference.html';
        });
    }

    changePreference(){
        document.addEventListener('DOMContentLoaded', function () {
            const playerId = this.JWT.getPlayerId();
        
            // Use the extracted player ID in your fetch request
            fetch(`http://localhost:8000/api/player/${playerId}`, {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
        
                document.title = `${data.name}'s Preferences`;
                document.getElementById('page-title').textContent = `${data.name}'s Preferences`;
        
                document.getElementById('email').value = data.email || '';
                document.getElementById('found-color').value = data.preferred_color_found || '#000000';
                document.getElementById('closed-color').value = data.preferred_color_closed || '#000000';
            })
            .catch(error => {
                console.error('Error fetching player data:', error);
            });
        
            // Handle form submission
            document.getElementById('preferences-form').addEventListener('submit', function (event) {
                event.preventDefault();
                const formData = new FormData(event.target);
                const data = {
                    email: formData.get('email'),
                    preferred_color_found: formData.get('foundColor'),
                    preferred_color_closed: formData.get('closedColor')
                };
        
                console.log('Form data to be sent:', data);  // Debugging form data
                const json = JSON.stringify(data);
                console.log('JSON data:', json);
        
                fetch(`http://localhost:8000/api/player/${playerId}/preferences`, {
                    method: 'POST',
                    body: json
                })
                .then(response => {
                    if (response.ok) {
                        alert('Preferences updated successfully!');
                    } else {
                        alert('Failed to update preferences.');
                    }
                })
                .catch(error => {
                    console.error('Error updating preferences:', error);
                });
            });
        });
        
        
        
        
    }        
}


    



