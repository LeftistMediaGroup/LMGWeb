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
                
                <Card variant = "outlined" sx = {{p: 1, m: 1}}>
                    <p>                        
                        The following statement is not to be taken lightheartedly. 
                        <br/>
                        <br/>

                        If you, as an individual reading these words do not take the time to educate yourself on The effects that capitalism has had, you are personally turning your back on existence as a whole. 
                        <br/>
                        <br/>

                        Capitalism faces as an economic system. An economic system that is branded best in the world. 
                        <br/>
                        <br/>
                        
                        Within Capitalism, you buy things in order to live. At first glance, this seems normal, "This is the way things have always been" one might think, but that idea is completely debunked. For example, Indigenous peoples, at least those of North America, did not use money to survive, instead they shared what they had as a community. <br/>
                        <br/>

                        The point here, is that Capitalism is an idea that someone came up with. That idea, that one must buy things in order to live has resulted in an unimaginably large amount of human, animal, and ecological suffering and death paralleled only by Mass Extinction events. 
                        <br/>
                        <br/>

                        This website is dedicated to showing how Capitalism has caused this, and the much prettier note of what we can do to fix it.
                    </p>
                </Card>
            </Paper>

            </>
        );
    };
};