import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div id='header'>
                <div className='branding'>
                    <h1>
                        
                        La Gratitude
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li className='nav-link'>
                            <NavLink to="/dashboard"
                            exact onClick={this.props.showDashboard}>
                            Dashboard
                            </NavLink>
                        </li><li className='nav-link'> 
                            <NavLink to="/journal"
                                exact onClick={this.props.showJournal}>
                                Journal
                            </NavLink>
                        </li><li className='nav-link'>
                            <NavLink to="/user_settings"
                            exact onClick={this.props.showSettings}>
                            Username
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;