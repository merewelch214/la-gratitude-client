import React from 'react';
import moment from 'moment';


// to do: each blurb should be a link to the daily summary. 

function Blurb(props) {
    return (
        <div>
            <h1 className="title"> {moment(props.created_at).format('ll')} Entry </h1>
            {/* {props.created_at.slice(5,10)}-{props.created_at.slice(0,4)} */}
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