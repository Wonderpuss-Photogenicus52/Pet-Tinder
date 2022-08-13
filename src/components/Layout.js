import React from "react";

import './Layout.css'

class Layout extends React.Component{

    render(){
        return(

            
            <div className='d-md-flex d-none justify-content-center align-items-center p-5'>
            <div id="carouselExampleIndicators" className="carousel slide slides mt-5" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.rover.com/blog/wp-content/uploads/2018/02/shar-pei-kissing.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.rover.com/blog/wp-content/uploads/2018/10/dogs-2633127_1920.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://pawleaks.com/wp-content/uploads/2020/09/dogs-love-bite.png" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        
          </div>
            
           
            </div>
           
        )
    }
}

export default Layout; 