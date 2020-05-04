import React from 'react';

class DashboardContainer extends React.Component {
  
  state = {
    user_id: 1,
    wins: ['']
  }

  componentDidMount() {
    // get the wins already submitted for today
  }

  addRow = () => {
    // add fetch here, adding each row should send fetch request to add the wins to the backend
    // after the button clicked the plus sign should turn into an x to delete or a edit button

  }
  
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Wins</h1>
        <div className="container small">
            <p className='small-description'>Use this space to share your wins from yesterday</p>
            <form> 
              <input type='text' className='new-item'/> <button className='add' onClick={this.addRow}> + </button>
            </form>
        </div>
      </React.Fragment>
    );
  }
}
  
export default DashboardContainer;
  