import React from 'react';

function Blurb(props) {
    return (
        <div className='container'>
                <div className='score-container'> 
                    {props.score} 
                </div>
                <div className='entry-container'>
                    {props.entry} <br />
                    Created on: {props.created_at}
                </div>
        </div>
    )
}

export default Blurb;