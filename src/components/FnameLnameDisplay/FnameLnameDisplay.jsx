import React from 'react';
import './FnameLnameDisplay.css'

const FnameLnameDisplay = (props) => {
    return ( 
        <div className="outterbox">
            <div className="innerbox">
                <h1 className="fname">{props.fname}</h1>
                <h4 className="lname">{props.lname}</h4>
            </div>
        </div>
    );
}

export default FnameLnameDisplay;