import React from 'react';

function Blurb(props) {
    return (
        <div className='blurb-container'>
            <div> 
                Score: {props.score} 
            </div><br />
            Entry: {props.entry} <br />
            Date: {props.createdAt}
        </div>
    )
}

export default Blurb;