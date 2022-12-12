import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class Anarchism extends React.Component {
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
                    <h1> Anarchism </h1>           
                </Card>
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <p>                        
                        Anarchism is one of the many alternatives to Capitalism. 
                        <br/>
                        <br/>
                        Within Anarchism, there are many different philosophies. The main point behind Anarchism is that there is no central government.
                        <br/>
                        <br/>

                        The specific philosophy under Anarchism that LMG subscribes to is Anarcho-Syndicalism. Within Anarcho-Syndicalism, the biggest decisions in society are made by the specific workers in it's respective industry.
                        <br/>
                        <br/>

                        This is in sharp contrast to our current system, where we essentially "elect" some random person to in theory, represent our personal views about how the world should be run. Then the person that's convinced the most people to elect them, get's to essentially run the geopolitical stage. 
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};