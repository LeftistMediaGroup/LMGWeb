import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import ReactPlayer from 'react-player'


export default class Music extends React.Component {
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
                    <h1> Music </h1>           
                </Card>
            </Paper>

            <ReactPlayer controls = {true} url='https://wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=1' />
            <ReactPlayer controls = {true} url='https://wade.4a2ib8tj96gajw856jj7.xyz/vidChunk?id=2' />

            </>
        );
    };
};