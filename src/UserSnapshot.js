import React from 'react';
import faces from './images/faces.png';
class UserSnapshot extends React.Component {
    
    
    render() {
        return (
            <React.Fragment>
            <h1 className="title">Username </h1>
                <div className="container columns">
                    <div id='user-icon'>
                        <img className='user-img' src={faces} alt='face' />
                    </div>
                    <p className='user-history'>Journaling since May 2020.</p>
                    <div className='flex-d-row'>
                        <span className='user-details'>Brooklyn, NY</span>
                        <span> 
                            <button className='user-details'>Settings</button>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
  }
  
  export default UserSnapshot;
  