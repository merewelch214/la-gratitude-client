import React from 'react';

function Blurb(props) {
    return (
        <div className='container'>
                <div className='score-container'> 
                    {props.score} 
                </div>
                <div>
                    {props.created_at.slice(5,10)}-{props.created_at.slice(0,4)}
                </div>< br />
                <div className='entry-container'>
                    {props.entry} <br />
                    
                </div>
        </div>
    )
}

export default Blurb;