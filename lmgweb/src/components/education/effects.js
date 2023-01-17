import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


export default class Effects extends React.Component {
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
                    <h1> The effects of Capitalism </h1>           
                </Card>
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <p>                       
                    Capitalism has resulted in an unimaginably large amount of human, animal, and ecological suffering and death paralleled only by Mass Extinction events.
                    <br/>
                    
                    How can this be? How can the concept of buying things in order to survive lead to such death and destruction?

                    To start, we must evaluate who is causing this destruction. The initial thought, the one perpetuated by liberal media, states that it's humanity as a whole that has caused climate change, for example. 

                    This is far from the case, when the raw data is examined, it clearly shows that the majority of climate change is caused by the top 100ish companies, not the sum of each individuals carbon footprint.

                    If it's just the top 100 companies that are destroying the planet, then that means that there are 100 CEO's that are directly responsible for climate change. 

                    100 people are the cause of all the death and destruction that climate change has caused and will cause in the near future.

                    The majority of people are unaware that it's 100 people causing climate change and the majority of people support building a future free of the effects of climate change.

                    The fact that the 100 leaders of our economic system, who directly influence law, therefore our government are the sole perpetrators of climate change, means that our economic system, therefore capitalism is responsible for climate change.     
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};