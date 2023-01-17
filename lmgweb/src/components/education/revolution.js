import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class Revolution extends React.Component {
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
                    <h1> Revolution </h1>           
                </Card>
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <h2> What is Revolution </h2>

                    <p>
                    Revolution is the process of going from our current economic and governmental system, Capitalism to Anarchism (or Anarcho-Syndicalism for our purposes).
                    <br/>

                    Angela Davis summarizes expectations on Revolution by saying
                    <br/>
                    <br/>
                    
                    “When you talk about a revolution, most people think violence, without realizing that the real content of any kind of revolutionary thrust lies in the principles, in the goal that you’re striving for, not in the way you reach them, On the other hand, because of the way this society is organized, because of the violence that exists on the surface everywhere, you have to expect that there are going to be such explosions. You have to expect things like that as reactions.”
                    <br/>
                    <br/>
                    
                    By saying this, Davis outlines that in order to accomplish a transition from Capitalism to Anarchism, one must expect the capitalist's to push back with force, deadly force in most cases.
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};