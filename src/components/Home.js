import React, { Component } from "react";
import './Home.css'

import Button from '@mui/material/Button';
import axios from "axios";





class Home extends React.Component{


state = {
    name:'',
    imagesrc:'',
    imageindex:0
}


componentWillMount() {
    // Perform the required
    // activity inside it
    axios.get("http://localhost:4000/home")
    .then((response) => {
    let imagesrc =response.data[this.state.imageindex].imageurl;
    this.setState({name:response.data[0].username,
    imagesrc:imagesrc
    })
    }
    )
    .catch((err) => console.log(err));

}



render(){





    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const username = urlParams.get('user')
    const picture= urlParams.get('picture')
    

return(

 
   
         
    <div className="d-flex justify-content-center">
           
        <div className='  d-none d-lg-flex justify-content-center flex-column align-items-center  mt-5 profilebox'style={{width:'170px',height:'170px' ,backgroundColor:'#bbdbe9'}}>
    <div className='fs-4 fw-bold  mt-5'style={{fontFamily:'cursive'}}>{username}</div>
    <img src={picture} alt="" className="mb-2"/> 
    <Button variant="contained">CHECK LIKES  {this.state.name}</Button>;
    <Button variant="contained">MATCHES</Button>;

   
    </div>

    <div className="d-flex flex-column text-center">
            <div className="fs-1 text-dark fw-bold " style={{fontFamily:'cursive'}}>FIND YOUR LOVE </div>
            
            <div className="d-flex flex-column justify-content-center border border-dark p-2 bg-light "style={{maxWidth:'600px',borderRadius:'20px',backgroundImage: 'linear-gradient(#8ab5f6, #fff6d4, #dcd3ef, #f9edf6)'}}>
                <div className="d-flex justify-content-center"style={{maxWidth:'450px',maxHeight:'550px'}}>
                <img className="w-100" src={this.state.imagesrc} alt=""/>
                </div>
                <div className="d-flex justify-content-center">
                
                
                
                <div className="fs-1 ms-auto paw"><i className="fa-solid fa-paw text-info"></i></div>
                
                </div>
                <div className="d-flex justify-content-center">
                <div className="fs-1 me-5 like"><i  className="fa-solid fa-heart text-danger"></i></div>
                <div className="fs-1 dislike"><i className="fa-solid fa-xmark "></i></div>
                </div>
                </div>
            </div>
            </div>
            
            
)
}




}

export default Home;

