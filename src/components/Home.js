import React, { Component } from "react";
import './Home.css'

import Button from '@mui/material/Button';
import axios from "axios";





class Home extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        name:'',
        imagesrc:'',
        imageindex: 0,
        data:undefined,
        like:0
       
    }
    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleX = this.handleX.bind(this);
}



componentWillMount() {
    // Perform the required
    // activity inside it
    let newimage;
    axios.get("http://localhost:4000/home")
    .then((response) => {
      
        let imagesrc = response.data[this.state.imageindex].imageurl;
        this.setState({
            
            imagesrc:imagesrc ,
            data:response.data
        })
    }
    )
    .catch((err) => console.log(err));

}



handleSwipe() {

    const newIndex = this.state.imageindex + 1;
    this.setState({imageindex: newIndex});
    this.setState({imagesrc:this.state.data[this.state.imageindex].imageurl});
    this.setState({like:this.state.like+1});
}

handleX() {

    const newIndex = this.state.imageindex + 1;
    this.setState({imageindex: newIndex});
    this.setState({imagesrc:this.state.data[this.state.imageindex].imageurl})
    
}

render(){
    

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const username = urlParams.get('user')
    const picture= urlParams.get('picture');
  
    

return(

      
    <div className="d-flex justify-content-center">
           
        <div className='  d-none d-lg-flex justify-content-center flex-column align-items-center  mt-5 profilebox'style={{width:'170px',height:'170px' ,backgroundColor:'#bbdbe9'}}>
    <div className='fs-4 fw-bold  mt-5'style={{fontFamily:'cursive'}}>{username}</div>
    
    <img src={picture} alt="" className="mb-2"/> 
    <Button variant="contained">CHECK LIKES </Button>
    <i  className="fa-solid fa-heart text-danger mt-3 mb-3">:{this.state.like}</i>
    <Button variant="contained">MATCHES</Button>

   
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
                <div className="fs-1 me-5 like" onClick={this.handleSwipe}><i  className="fa-solid fa-heart text-danger"></i></div>
                
                <div className="fs-1 dislike" onClick={this.handleX}><i className="fa-solid fa-xmark "></i></div>
                </div>
                </div>
            </div>
            </div>
            
            
)
}




}

export default Home;

