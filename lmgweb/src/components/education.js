import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import Capitalism from "./education/capitalism.js";

export default class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "test": "1"
        }
    };

    render() {
        return (
            <>

            <Paper elevation = {1} variant = "outlined" sx = {{p: 1, m: 1}}>

                <Card variant = "outlined" sx = {{p: 1, m: 1}}>

                    <h1> Education </h1>           
                </Card>

                <Capitalism></Capitalism>

            </Paper>

            <Card sx = {{p: 1, m: 1}}>
                <p>
                    This site is currently under development as a proof of concept. <br></br>
                    If you would like to contact the admin, please send an email to LeftistMediaGroup.com<br></br>
                </p>
            </Card>

            </>
        );
    };
};