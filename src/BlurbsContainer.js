import React from 'react';
import Blurb from './Blurb';
// import InfiniteScroll from 'react-infinite-scroll-component';

class BlurbsContainer extends React.Component {
    
    state = {
        journal_entries: [],
        hasMore: true
    }

    // fetch request to get all of journal entries once the component has mounted
    componentDidMount() {
        fetch(`http://localhost:3000/journal_entries`)
        .then(resp => resp.json())
        .then(data => this.setState({journal_entries: data}))
    }

    // to do:
    fetchMoreData = () => {
        if (this.state.journal_entires.length >= 500) {
            this.setState({ hasMore: false });
        // return;
        }
    }

    render() {
        const sorted_entries = [...this.state.journal_entries].sort((a,b)=>b.id-a.id)
        return (
            <div>
                {sorted_entries.map(journal_entry => < Blurb {...journal_entry} key={journal_entry.id} /> )}

                
                {/* <InfiniteScroll
                    dataLength={this.state.journal_entries.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    refreshFunction={this.refresh}
                    pullDownToRefresh
                    pullDownToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                    }>
                    {sorted_entries.map(journal_entry => < Blurb {...journal_entry} key={journal_entry.id} /> )}
leen                </InfiniteScroll>
                 */}
            </div>
        )
    }
    
}

export default BlurbsContainer;