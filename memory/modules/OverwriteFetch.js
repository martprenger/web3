export class OverwriteFetch {
    constructor() {
        (function (){
            var orginalFetch = fetch;
            // Step 1: Retrieve the JWT token from localStorage
            const jwtToken = localStorage.getItem('jwt_token');
            window.fetch = function(input, init){
                init = init || {};
                if (arguments[0].indexOf('localhost') > 0) {
                    console.log('fetching from localhost')
                    init.headers = {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}`,
                        ...init.headers
                    };

                }

                return orginalFetch.apply(this, arguments);
            }

        })();
    }
}