import React from 'react';
import Blurb from './Blurb';
class BlurbsContainer extends React.Component {
    
    state = {
        journal_entries: [],
        hasMore: true,
        currentIndex: 0
    }

    // fetch request to get all of journal entries once the component has mounted
    componentDidMount() {
        fetch(`http://localhost:3000/journal_entries`)
        .then(resp => resp.json())
        .then(data => this.setState({journal_entries: data}))
    }

    next = () => {
        this.setState((prevState) => ({currentIndex: prevState.currentIndex + 3}))
    }
    
    previous = () => this.setState((prevState) => ({currentIndex: prevState.currentIndex - 3}))

    render() {
        const sorted_entries = [...this.state.journal_entries].sort((a,b)=>b.id-a.id)
        
        let current_entries = sorted_entries.slice(this.state.currentIndex, this.state.currentIndex + 3)

        console.log(current_entries[0] === sorted_entries[0])
        console.log(current_entries[0])
        console.log(this.state.journal_entries[0])
        return (
            <div>
                {current_entries.map(journal_entry => < Blurb {...journal_entry} key={journal_entry.id} /> )}<br />
                <div className='prev-next-buttons'>
                    <button 
                        disabled={current_entries[0] === sorted_entries[0]} 
                        onClick={this.previous}> Previous </button>
                    <button 
                        disabled={current_entries[current_entries.length - 1] === sorted_entries[sorted_entries.length - 1]} 
                        onClick={this.next}> Next </button>
                </div>
            </div>
        )
    }
    
}

export default BlurbsContainer;