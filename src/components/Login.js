import React from "react";
import { Link } from "react-router-dom";
import logo from './tinder.png'
import {loginController} from '../dataController';


class Login extends React.Component {

    handleLogin(e) {
        e.preventDefault();
        const username = document.querySelector('#username').value; 
        const password = document.querySelector('#password').value;
        loginController(username, password);
    };

    render(){
        return(
            
        <div className="d-flex justify-content-center mt-5 ">

            <div className="d-flex flex-column justify-content-center border border-dark p-2 bg-light "style={{maxWidth:'600px',borderRadius:'20px'}}>
                
                <img src={logo} alt=""/>
                <form action="http://localhost:4000/login" method="post">
                <input name='username' id="username" className="form-control form-control-lg mt-5" type="text" placeholder="username" aria-label=".form-control-lg example"/>
                <input name='password' id="password" className="form-control form-control-lg mt-1" type="password" placeholder="password" aria-label=".form-control-lg example"/>
                <div className="d-flex justify-content-center">
                <button className="btn btn-lg btn-primary mt-3 mb-3 me-3" type="submit" onClick={this.handleLogin}>LOGIN</button>
                
                <Link to='/Signup'><button className="btn btn-lg btn-success mt-3 me-3 mb-3"  > SIGN UP</button></Link>
                </div>
                </form>
                </div>
            </div>
        );
    }
}


export default Login; 