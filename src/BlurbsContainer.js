import React from 'react';
import Blurb from './Blurb'

class BlurbsContainer extends React.Component {
    
    state = {
        journal_entries: []
    }

    // fetch request to get all of journal entries once the component has mounted
    componentDidMount() {
        fetch(`http://localhost:3000/journal_entries`)
        .then(resp => resp.json())
        .then(data => this.setState({journal_entries: data}))
    }

    render() {
        const sorted_entries = [...this.state.journal_entries].sort((a,b)=>b.id-a.id)
        console.log(sorted_entries)
        return (
            <div>
                {sorted_entries.map(journal_entry => < Blurb {...journal_entry} key={journal_entry.id} /> )}
            </div>
        )
    }
    
}

export default BlurbsContainer;