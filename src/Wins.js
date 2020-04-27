import React from 'react';

function DashboardContainer() {
    return (
      <React.Fragment>
        <h1 className="title">Wins</h1>
        <div className="container small">
            <p className='small-description'>Use this space to share any wins from yesterday</p>
            <form> 
              <input type='text' className='new-item'/> <button className='add'> + </button>
            </form>
        </div>
      </React.Fragment>
    );
  }
  
  export default DashboardContainer;
  