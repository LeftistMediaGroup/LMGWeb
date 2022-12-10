import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class Capitalism extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "test": "1"
        }
    };

    render() {
        return (
            <>
            
            <Paper variant = "outlined" sx = {{ p: 1, m: 1}}>    
                <Card sx = {{p: 1, m: 1}}>
                    <h1> What is Capitalism?</h1>           
                </Card>
                
            </Paper>

            </>
        );
    };
};