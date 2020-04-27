import React from 'react';
import { FaSmile, FaGrinBeam, FaFrown, FaFrownOpen, FaMeh} from 'react-icons/fa';

class Mood extends React.Component {
    
    state = {
        user_id: 1, 
        feeling: ''
    }
    
    updateMood = (e) => {
        this.setState({
            feeling: e.currentTarget.value
        })

    }
    
    render() {
        return (
            <React.Fragment>
            <h1 className="title">Today I feel</h1>
                <div className="container">
                    
                    <button onClick={this.updateMood}
                        value='ecstatic'
                        className='mood-icon'>
                        < FaGrinBeam size={50} color={this.state.feeling === 'ecstatic' ? 'pink' : 'grey'}/>
                    </button>

                    <button onClick={this.updateMood}
                        value='happy'
                        className='mood-icon'>
                        < FaSmile size={50} color={this.state.feeling === 'happy' ? 'pink' : 'grey'}/>
                    </button>
                    <button onClick={this.updateMood}
                        value='neutral'
                        className='mood-icon'>
                        < FaMeh  size={50} color={this.state.feeling === 'neutral' ? 'pink' : 'grey'}/>
                    </button>
                    <button onClick={this.updateMood}
                        value='sad'
                        className='mood-icon'>
                        < FaFrown size={50} color={this.state.feeling === 'sad' ? 'pink' : 'grey'}/>
                    </button>
                    <button onClick={this.updateMood}
                        value='despondent'
                        className='mood-icon'>
                        < FaFrownOpen size={50} color={this.state.feeling === 'despondent' ? 'pink' : 'grey'}/>
                    </button>
                </div>
            </React.Fragment>
        );
    }
  }
  
  export default Mood;
  