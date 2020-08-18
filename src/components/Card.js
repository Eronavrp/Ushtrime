import React from 'react';
import './Card.css';

const card = (props) => {
    
    const style={
        width:'270px',
        padding:'15px 20px',
        margin:'10px auto',
        border:'2px solid #158467',
    };
    return(
        <div style={style}>
            <div className="votes">
                {props.votes}
            </div>
            <div className="lang">
                {props.name}
            </div>
            <button onClick={props.clicked}>Click here</button>
        </div>
     );
};

export default card;