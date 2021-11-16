import React from 'react';
import './NamesList.css'

const NamesList = (props) => {
    return ( 
        <div className="outterbox">
            <div className="innerbox2">
                <h1 className="fname">{props.names[0]}</h1>
                <h1 className="fname">{props.names[1]}</h1>
                <h1 className="fname">{props.names[2]}</h1>
                <h1 className="fname">{props.names[3]}</h1>
                <h1 className="fname">{props.names[4]}</h1>
            </div>
        </div>
    );
}

export default NamesList;