import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import ReactPlayer from 'react-player'


export default class Videos extends React.Component {
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
                    <h1> Videos </h1>           
                </Card>
            </Paper>

            <ReactPlayer url='https://wade.4a2ib8tj96gajw856jj7.xyz/' />

            </>
        );
    };
};