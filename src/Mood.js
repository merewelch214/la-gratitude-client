import React from 'react';
import { FaBeer } from 'react-icons/fa';


function Mood() {
    return (
        <React.Fragment>
        <h1 className="title">Mood</h1>
            <div className="container">
                <button>
                    < FaBeer />
                </button>
                <button>
                    Happy
                </button>
                <button>
                    Neutral
                </button>
                <button>
                    Sad
                </button>
                <button>
                    Despondent
                </button>
            </div>
        </React.Fragment>
    );
  }
  
  export default Mood;
  