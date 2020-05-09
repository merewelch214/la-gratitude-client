import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

    state = {
        name: '',
        password: '',
        password_confirmation: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        
        if (this.state.password !== this.state.password_confirmation) {
            alert('Passwords must match') }
        else {
            // FETCH REQUEST
            // const adapter = new APICommunicator();
            // const copiedState = this.state
            // const { password_confirmation, ...newUser } = copiedState
            // adapter.createUser(newUser)
            // .then(user => this.props.setUser(user))
    }}

    handleChange = e => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }


    render() {
        return (
            <div className='user-div'>
                <div className='user-auth'>
                    <form onSubmit={this.handleSubmit}>
                    <ul className='user-outer'>
                        <li>
                            <label name='name'>Username*</label> 
                            <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                        </li>
                        <li>
                            <label name='password'>Password*</label>
                            <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                        </li>
                        <li>
                            <label name='password_confirmation'>Confirm Password*</label>
                            <input type='password' name='password_confirmation' value={this.state.password_confirmation} onChange={this.handleChange}/>
                        </li>
                        <li>
                            <button type='submit' name='submit'>Sign Up</button>          
                        </li>
                        </ul>
                    </form>
                    <p>Already have an account? Log in <Link to='/login'>here</Link>.</p>
                </div>
            </div>
        )
    }
}

export default SignUp;