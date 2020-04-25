import React from 'react';
import { FaSmile, FaGrinBeam, FaFrown, FaFrownOpen, FaMeh} from 'react-icons/fa';

function Mood() {
    return (
        <React.Fragment>
        <h1 className="title">Mood</h1>
            <div className="container">
                
                <button className='mood-icon'>
                    < FaGrinBeam size={50}/>
                </button>
                <button className='mood-icon'>
                    < FaSmile size={50} />
                </button>
                <button className='mood-icon'>
                    < FaMeh  size={50}/>
                </button>
                <button className='mood-icon'>
                    < FaFrown size={50} />
                </button>
                <button className='mood-icon'>
                    < FaFrownOpen size={50} />
                </button>
            </div>
        </React.Fragment>
    );
  }
  
  export default Mood;
  