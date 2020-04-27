import React from 'react';

function Goals() {
    return (
      <React.Fragment>
        <h1 className="title">Goals</h1>
        <div className="container small">
            <p className='small-description'>Use this space to add your goals for today</p>
            <form> 
              <input type='text' className='new-item'/> <button className='add'> + </button>
            </form>
        </div>
      </React.Fragment>
    );
  }
  
  export default Goals;
  