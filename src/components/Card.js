import React from 'react';
import './Card.css';

const card = ({votes,name,clicked}) => {
    return(
        <div className="card">
            <div className="votes">
                {votes}
            </div>
            <div className="lang">
                {name}
            </div>
            <button onClick={clicked}>Click here</button>
        </div>
     );
};

export default card;