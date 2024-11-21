const axios = require('axios');

axios.get('https://my-api-3p4f.onrender.com/greet', {
    params: { name: 'John' }
}).then(response => {
    console.log(response.data); // Output: { message: 'Hello, John!' }
}).catch(error => {
    console.error('Error occurred:', error.message);
});
