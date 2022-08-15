const axios = require('axios');

const loginController = (username, password) => {
  axios.get('http://localhost:4000/login', {
    params: {
        username, 
        password
    }
  }).then((res) => {
    
    console.log(res)

    if(res.data.foundUser){
      window.location.href = 'http://localhost:3000/home'
      console.log('success');
    }
   else if(!res.data.foundUser){ 
    
    const incorrect = document.querySelector('#incorrect')
    incorrect.innerText = "wrong username or password"


   }
    
  }).catch((err) => alert(err.response.data));
};

// Implement getUsers and set User Controllers (get and post) for /signup and for /home

module.exports = { loginController };