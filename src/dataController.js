const axios = require('axios')

const loginController = (username, password) => {
  axios.get('http://localhost:4000/login', {
    params: {
        username, 
        password
    }
  }).then((err, res)=>{
    if(err){return next(err)}
  })
};

module.exports = { loginController };