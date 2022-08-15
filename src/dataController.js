const axios = require('axios')

const loginController = (username, password) => {
  axios.get('http://localhost:4000/login', {
    params: {
        username, 
        password
    }
  }).then((res) => {
    alert(res.data.username.toString() + ' ' + res.data.bio.toString());
  })
};

// Implement getUsers and set User Controllers (get and post) for /signup and for /home

module.exports = { loginController };