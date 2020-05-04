import React from 'react';
import Header from './Header';
import JournalContainer from './JournalContainer';
import DashboardContainer from './DashboardContainer'
// import SettingsContainer from './SettingsContainer'
class MainContainer extends React.Component {
    

    
    render() {
        return (
            <div className='body-container'>
                {this.props.currentView === 'journal' ? 
                < JournalContainer /> :
                < DashboardContainer />}
                {/* < SettingsContainer /> */}
            </div>
        )
    }
}

export default MainContainer;