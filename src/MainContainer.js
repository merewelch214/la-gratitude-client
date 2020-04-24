import React from 'react';
import Header from './Header';
import JournalContainer from './JournalContainer';
// import DashboardContainer from './DashboardContainer'
// import SettingsContainer from './SettingsContainer'

class MainContainer extends React.Component {
    render() {
        return (
            <div className='main-conatiner'>
                < Header />
                <div className='body-container'>
                    < JournalContainer />
                    {/* < DashboardContainer />
                    < SettingsContainer /> */}
                </div>
            </div>
        )
    }
}

export default MainContainer;