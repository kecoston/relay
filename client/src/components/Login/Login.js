import React, { Component } from "react";
import axios from 'axios'

class Login extends Component {
	
	state = {
		userName: "",
		password: "",
	};

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		// if (name === "password") {
		// 	value = value.substring(0,15);
		// }

		this.setState({
			[name]: value 
		})
	}
	handFormSubmit = event => {
		
		event.preventDefault();
		
		//request to server to add a new username/password
		axios.post('/user/', {
			userName: this.state.userName,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
						
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

    render() {

        return (
        <form className="container">
            <p></p>  
            <div className="form-group">
                <input 
                    value={this.state.userName}
                    name="userName"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                 <input 
                    value={this.state.password}
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="form-control"
                    onChange={this.handleInputChange}
                />
				<br />
                  <button 
                    className="btn btn-primary"
                    onClick={this.handFormSubmit}>
					Log In
				  </button>
            </div>
        </form>

        )
    }
}

export default Login