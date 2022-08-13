import React from "react";
import logo from './tinder.png'

class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-primary ">
            <div className="container-fluid ">
              <img className="me-4" src={logo} alt="" style={{width:"50px"}}/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active text-light fs-3 fw-bold" aria-current="page" href="/home">Home</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link text-light fs-3 fw-bold" href="/about">About</a>
                  </li>
                 
                  <li className="nav-item dropdown text-light ">
                    <a className="nav-link dropdown-toggle text-light  fs-3 fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Safety
                    </a>
                    <ul className="dropdown-menu ">
                      <li><a className="dropdown-item text-dark" href="#">Community Guide Lines</a></li>
                      <li><a className="dropdown-item text-dark" href="#">Safety Tips</a></li>
                      <li><a className="dropdown-item text-dark" href="#">Safety&Policy</a></li>
                    </ul>
                  </li>
                </ul>
                <div className="nav-text ms-lg-auto ms-1 me-5 fw-bold mt-2 mt-lg-0 ">
            <a className="nav-link text-light fs-3 fw-bold" href="/contact">Contact</a>
          </div>
          <div className="nav-text me-sm-5 ms-1 fw-bold mt-2 mt-lg-0 ">
            <a className="nav-link fs-3 text-light fw-bold" href="/login">LogIn</a>
          </div>
              </div>
            </div>
          </nav>
        )
    }

}


export default Navbar