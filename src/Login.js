import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Login extends React.Component {

    state = {
        name: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const adapter = new APICommunicator(); 
        // adapter.loginUser(this.state)
        // .then(data => { 
        //     if (data.errors) {
        //       alert(data.errors);
        //     } else {
        //       this.props.setUser(data)
        //     }
        // });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='user-div'>
                <div className='user-auth'>
                    <form onSubmit={this.handleSubmit}>
                        <ul className='user-outer'>
                            <li>
                                <label name='name'>Username</label>
                                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                            </li>
                            <li>
                                <label name='password'>Password</label>
                                <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                            </li>
                            <li><button type='submit' name='submit'>Log In</button></li>          
                        </ul>
                    </form>
                    <p> Don't have an account yet? Sign up <Link to='/signup' >here</Link>.</p>
                </div>
            </div>
        )
    }
}

export default Login;