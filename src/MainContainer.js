import React from 'react';
import Header from './Header'

class MainContainer extends React.Component {
    render() {
        return (
            <div className='main-conatiner'>
                < Header />
                <div className='body-container'>
                    <p> this is where the content will go</p>
                </div>
            </div>
        )
    }
}

export default MainContainer;