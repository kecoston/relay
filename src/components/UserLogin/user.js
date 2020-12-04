import React, { Component } from "react";
import axios from 'axios'

class UserForm extends Component {

    state = {
        userName: "",
        password: "",
    };

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault()

        console.log('sign-up-form, username:');
        console.log(this.state.username);

    axios.post("/", {
        username: this.state.username,
        password: this.state.password
    })
        .then(response => {
            if (response.data) {
                console.log("successful signup")
                this.setState({
                    redirectTo: '/login'
                })
            } else {
                console.log("Sign-up error");
            }
        }).catch(error => {
            console.log("Sign up server error: ")
            console.log(error)
        })
        
    }

    render() {

        return (
        <form className="container">  
            <div className="form-group">
                <p>Please Enter Your Login Details</p>
                <input 
                    value={this.state.userName}
                    name="userName"
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    onChange={this.handleChange}
                />
                <small className="form-text text-muted">
                We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                 <input 
                    value={this.state.password}
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="form-control"
                    onChange={this.handleChange}
                />
                  <button 
                    className="btn btn-primary"
                    onClick={this.handleSubmit}>Enter</button>
            </div>
        </form>

        )
    }
}

export default UserForm