import React, { Component } from "react";
import './Home.css'



class Home extends React.Component{

render(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const username = urlParams.get('user')
    const picture= urlParams.get('picture')

return(

 
   
         
    <div className="d-flex justify-content-center">
           
        <div className='  d-none d-lg-flex justify-content-center flex-column align-items-center border border-light mt-5 profilebox'style={{width:'170px',height:'170px',borderRadius:'50%' ,backgroundColor:'#bbdbe9'}}>
    <div className='fs-4 fw-bold 'style={{fontFamily:'cursive'}}>{username}</div>
    <img src={picture} alt=""/> 
    
   
    </div>
    <div className="d-flex flex-column ">
            <div className="fs-1 text-dark fw-bold " style={{fontFamily:'cursive'}}>FIND YOUR LOVE </div>
            
            <div className="d-flex flex-column justify-content-center border border-dark p-2 bg-light "style={{maxWidth:'600px',borderRadius:'20px',backgroundImage: 'linear-gradient(#8ab5f6, #fff6d4, #dcd3ef, #f9edf6)'}}>
                <div className="d-flex justify-content-center"style={{maxWidth:'450px',maxHeight:'550px'}}>
                <img className="w-100" src='https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80' alt=""/>
                </div>
                <div className="d-flex justify-content-center">
                
                
                
                <div className="fs-1 ms-auto"><i className="fa-solid fa-paw text-info"></i></div>
                
                </div>
                <div className="d-flex justify-content-center">
                <div className="fs-1 me-5 like"><i className="fa-solid fa-heart text-danger"></i></div>
                <div className="fs-1 dislike"><i className="fa-solid fa-xmark "></i></div>
                </div>
                </div>
            </div>
            </div>
            
            
)
}




}

export default Home;

