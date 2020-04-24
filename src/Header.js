import React from 'react';

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
                        <li>
                            Dashboard
                        </li><li>
                            Journal
                        </li><li>
                            Username
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;