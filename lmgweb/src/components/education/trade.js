import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class Trade extends React.Component {
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
                    <h1> The Myth of Trade </h1>           
                </Card>
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <p>
                    Within many conversations of introducing someone to anti-capitalism, the question arises "But what about trade, isn't that natural?".

                    The answer to that question is simply no, trade is not a natural state of the human condition. 

                    The easiest way to put the argument to bed is looking at indigenous cultures. Within indigenous cultures, it is not required to have wealth or possess some kind of labour value in order for one to survive. 

                    This is in sharp contrast to Capitalism where you must either be born with generational wealth or trade your labour value or survive. 
                    <br/>
                    <br/>
                    
                    Simply put, needing skill-labour to trade goods or services is a recent addition to history that we can easily do without once again.                 
                        
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};