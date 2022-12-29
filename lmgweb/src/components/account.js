import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';


export default class Account extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "loggedIn": "No user logged in"
        }
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
                </Card>
                
            </Paper>
            </>
        );
    };
};