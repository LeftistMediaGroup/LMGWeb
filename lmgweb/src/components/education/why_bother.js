import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class WhyBother extends React.Component {
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
                    <h1> Why Bother Overthrowing Capitalism Anyway? </h1>           
                </Card>
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <p>                        
                        Capitalism is the driving force between the death and destruction caused in the modern day.
                        <br/>

                        Capitalism forces the idea of infinite consumption in a finite world, these ideas are incompatible and will only lead to our destruction. 
                        <br/>
                        Capitalism forces extreme individuality, to the point where all basic necessities are held back from everyone, like a gun to the head of every person, where the only possibility of  survival is to either be born into generational wealth or sell your labour value. 
                        <br/>
                        Anarchism stresses community, and through community is our only salvation. 
                        <br/>
                        To be anti-capitalist is to promote community at all possible times. To defend and support each other at all costs.
                        <br/>
                        Without community, we will not survive climate change or a capitalist induced nuclear holocaust.
                        <br/>
                        So why bother? Because everything you love depends on it.
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};