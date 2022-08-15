import React from "react";
import { Link } from "react-router-dom";
import logo from './tinder.png'
import {loginController} from '../dataController';
import jwtDecode from "jwt-decode";
const axios = require('axios');

function handleCredentialResponse(response) {



    const jwtcode =  jwtDecode(response.credential);
    
    axios.post("http://localhost:4000/signup", {
     
      username: jwtcode.family_name+jwtcode.given_name,
      password:'',
      bio:''
     
    })
    .then((response) => alert(response))
    .catch((err) => console.log(err));
   
    window.location.href = 'http://localhost:3000/home?user=' + jwtcode.family_name + jwtcode.given_name+'&picture='+jwtcode.picture;


  }
  window.onload = function () {
    /* global google */
    google.accounts.id.initialize({
      client_id: "298306516441-dnbsq4lb4afppq20nu6bkvb2u2gnd8hh.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", width:'400px' }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }


class Login extends React.Component {

    handleLogin(e) {
        e.preventDefault();
        const username = document.querySelector('#username').value; 
        const password = document.querySelector('#password').value;
        loginController(username, password);
    };

    render(){

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
  
      const exist = urlParams.get('exist')
      let usernameExist;
      if(exist === 'true') usernameExist='username exists'
      //check whether the response is telling use username exists
      //change the text to username exists
        return(
            
        <div className="d-flex justify-content-center mt-5 ">

            <div className="d-flex flex-column justify-content-center border border-dark p-2 bg-light "style={{maxWidth:'600px',borderRadius:'20px'}}>
                
                <img src={logo} alt=""/>
                <form action="http://localhost:4000/login" method="post">
                <input name='username' id="username" className="form-control form-control-lg mt-5" type="text" placeholder="username" aria-label=".form-control-lg example"/>
                <input name='password' id="password" className="form-control form-control-lg mt-1" type="password" placeholder="password" aria-label=".form-control-lg example"/>
                <div id="incorrect" className="fs-1 text-danger d-flex justify-content-center"></div>
                <div className="fs-1 text-danger d-flex justify-content-center">{usernameExist}</div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-lg btn-primary mt-3 mb-3 me-3" type="submit" onClick={this.handleLogin}>LOGIN</button>
                
                <Link to='/Signup'><button className="btn btn-lg btn-success mt-3 me-3 mb-3"  > SIGN UP</button></Link>
                </div>
                </form>
                <div className="d-flex justify-content-center">
                <div className="googlebtn mt-3 mb-3" id="buttonDiv"></div>
                </div>
                </div>
            </div>
        );
    }
}


export default Login; 