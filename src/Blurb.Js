import React from 'react';

function Blurb(props) {
    return (
        <div>
            <h1 className="title"> {props.created_at.slice(5,10)}-{props.created_at.slice(0,4)} </h1>
                <div className='container'>
                    <div className='score-container'> 
                        {props.score} 
                    </div>
                    <div className='entry-container'>
                        {props.entry} <br />  
                    </div>
                </div>
        </div>
    )
}

export default Blurb;