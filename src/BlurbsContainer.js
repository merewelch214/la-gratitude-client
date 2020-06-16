import React from 'react';
import Blurb from 'Blurbs.js'

class BlurbsContainer extends React.Component() {
    
    state = {
        journal_entries: {}
    }

    componentDidMount() {
        //fetch request to get all of the journal entries
    }

    render() {
        return (
            {this.state.journal_entries.map(journal)=> return (< Blurb /> ) }
        )
    }
    
}

export default BlurbsContainer;