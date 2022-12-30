import React from "react";

import io from 'socket.io-client';

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import SocketHandler from "./admin/socketHandler.js";



export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "serverFound": false,
            "serverFoundStatus": true,
            "socket": null
        };
    };


    render() {
        return (
            <>

            <Paper elevation = {1} variant = "outlined" sx = {{p: 1, m: 1}}>

                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <h1> Admin </h1>           
                </Card>
                
                { this.state.serverFoundStatus && 
                <>
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <h2> Server Found?: {this.state.serverFound}</h2>
                </Card>

                <SocketHandler>
                </SocketHandler>

                </>
                }

            </Paper>

            <Card sx = {{p: 1, m: 1}}>
                <p>
                    This site is currently under development as a proof of concept. <br></br>
                    If you would like to contact the admin, please send an email to LeftistMediaGroup@Gmail.com<br></br>
                </p>
            </Card>

            </>
        );
    };
};