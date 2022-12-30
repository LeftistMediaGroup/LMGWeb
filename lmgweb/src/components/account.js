import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default class Account extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "loggedIn": "No user logged in",
            "loginFormStatus": false,
            "registerFormStatus": false,
            "usernameInput": null,
            "passwordInput": null,
            "password2Input": null,
        }
    };

    handleUsernameChange(event) {
        this.setState({
            "usernameInput": event.target.value
        });
    };

    handlePasswordChange(event) {
        this.setState({
            "passwordInput": event.target.value
        });
    };

    handlePassword2Change(event) {
        this.setState({
            "password2Input": event.target.value
        });
    };

    handleInitUserFormSubmit(event) {
        event.preventDefault();
        
        if (this.state.passwordInput === this.state.password2Input) {
            console.log("Passwords are good");

            fetch('https://100.69.19.3:3001/system/newUser', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": this.state.usernameInput,
                    "password": this.state.passwordInput
                }),
            });
        }
        else {
            console.log("Passwords Didn't match, Try again");
        }
    };

    handleLoginFormSubmit(event) {
        event.preventDefault();

        fetch('https://100.69.19.3:3001/system/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                "username": this.state.usernameInput,
                "password": this.state.passwordInput
            }),
            credentials: "include"
        })
    };

    render() {
        return (
            <>

            <Paper elevation = {1} variant = "outlined" sx = {{p: 1, m: 1}}>

                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <h1> Account </h1>           
                </Card>

                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <h1> Account info </h1>

                    <p> Logged in?: {this.state.loggedIn}</p>

                    <Button variant="outlined" 
                    onClick={() => {
                        this.setState({
                            "loginFormStatus": true,
                            "registerFormStatus": false,
                        });
                    }}
                    > Log in </Button>

                    <Button variant="outlined"
                    onClick={() => {
                        this.setState({
                            "registerFormStatus": true,
                            "loginFormStatus": false
                        });
                    }}
                    > Register </Button>


                </Card>

                {this.state.registerFormStatus && 
                <Card>
                    <form onSubmit={this.handleRegisterFormSubmit}>
                        <p> New username </p>

                        <input
                        name="username"
                        value={this.state.usernameInput} 
                        onChange={this.handleUsernameChange} />
                    
                        <p> New password </p>

                        <input
                        name="password"
                        type="password" 
                        value={this.state.passwordInput}
                        onChange={this.handlePasswordChange} />
                        
                        <p> Confirm new password </p>

                        <input
                        name="password2" 
                        type="password"
                        value={this.state.password2Input}
                        onChange={this.handlePassword2Change} />
                        
                        <br></br>
                        
                        <input type="submit" value="Submit" />
                    </form>
                </Card>
                }

                {this.state.loginFormStatus &&
                <Card>
                    <form onSubmit={this.handleLoginFormSubmit}>
                        <h3> Login </h3>

                        <p>username </p>

                        <input
                        name="usernameLogin"
                        value={this.state.usernameInput} 
                        onChange={this.handleUsernameChange} />
                        
                        <p> password </p>

                        <input
                        name="passwordLogin"
                        type="password" 
                        value={this.state.passwordInput}
                        onChange={this.handlePasswordChange} />

                        <br></br>
                        
                        <input type="submit" value="Log-in" />
                    </form>        
                </Card>
                }
                
            </Paper>

            </>
        );
    };
};