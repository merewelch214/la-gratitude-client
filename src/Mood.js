import React from 'react';
import { FaSmile, FaGrinBeam, FaFrown, FaFrownOpen, FaMeh} from 'react-icons/fa';

class Mood extends React.Component {
    
    state = {
        user_id: 1, 
        score: ''
    }
    
    componentDidMount() {
        fetch(`http://localhost:3000/feeling`)
        .then(resp=>resp.json())
        .then(data=> this.setState({score: data.score})
        )
    }
    
    addMood = (e) => {
        this.setState({
            score: e.currentTarget.value
        })
        fetch(`http://localhost:3000/feeling`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }
    
    render() {
        return (
            <React.Fragment>
            <h1 className="title">Today I feel {this.state.score} </h1>
                <div className="container">
                    
                    <button onClick={this.addMood}
                        value='ecstatic'
                        className='mood-icon'>
                        < FaGrinBeam size={50} color={this.state.score === 'ecstatic' ? 'pink' : 'grey'}/>
                    </button>

                    <button onClick={this.addMood}
                        value='happy'
                        className='mood-icon'>
                        < FaSmile size={50} color={this.state.score === 'happy' ? 'pink' : 'grey'}/>
                    </button>
                    <button onClick={this.addMood}
                        value='neutral'
                        className='mood-icon'>
                        < FaMeh  size={50} color={this.state.score === 'neutral' ? 'pink' : 'grey'}/>
                    </button>
                    <button onClick={this.addMood}
                        value='sad'
                        className='mood-icon'>
                        < FaFrown size={50} color={this.state.score === 'sad' ? 'pink' : 'grey'}/>
                    </button>
                    <button onClick={this.addMood}
                        value='despondent'
                        className='mood-icon'>
                        < FaFrownOpen size={50} color={this.state.score === 'despondent' ? 'pink' : 'grey'}/>
                    </button>
                </div>
            </React.Fragment>
        );
    }
  }
  
  export default Mood;
  