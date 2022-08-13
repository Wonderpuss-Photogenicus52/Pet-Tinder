import React from "react";


class Signup extends React.Component {

    render(){
        return(
            <div className="d-flex d-column">
                <h5>Signup</h5>
                <div>
                <input className="form-control form-control-lg" type="text" placeholder="username" aria-label=".form-control-lg example"/>
                
                <input className="form-control form-control-lg" type="text" placeholder="password" aria-label=".form-control-lg example"/>
           </div>
            </div>
        );
    }
}


export default Signup; 