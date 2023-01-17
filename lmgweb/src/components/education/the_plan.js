import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class ThePlan extends React.Component {
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
                    <h1> The Plan </h1>           
                </Card>
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <p>                        
                    Educate globally on the effects of capitalism.
                    <br/>
                    <br/>

                    Organize a revolutionary movement.
                    <br/>
                    <br/>

                    Take to the streets, stop all production, demand Revolution, defend and protect each other.
                    <br/>
                    <br/>

                    Rebuild a better society.
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};