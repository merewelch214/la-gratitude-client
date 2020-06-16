import React from 'react';


class Blurb extends React.Component() {
    render() {
        return (
            <div> 
                Created on: {this.props.date}
                Score: {this.props.score}
            </div>
        )
    }
}

export default Blurb;