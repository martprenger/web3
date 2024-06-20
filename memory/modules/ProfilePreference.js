export class ProfilePreference{

    constructor(){
        this.setPreferenceButton();
    }


    setPreferenceButton(){
        document.getElementById('profileSettings').addEventListener('click', function(){
            window.location.href = './preference.html';
        });
    }

}

