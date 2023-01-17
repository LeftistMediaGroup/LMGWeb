import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';

import Capitalism from "./education/capitalism.js";
import Anarchism from "./education/anarchism.js";
import Effects from "./education/effects.js";
import Revolution from "./education/revolution.js";
import ThePlan from "./education/the_plan.js";
import WhyBother from "./education/why_bother.js";
import Trade from "./education/trade.js";


export default class Education extends React.Component {
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
                    <h1> Education </h1>           
                </Card>

                <Card variant = "outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                    <h2> Topics to explore </h2>

                    <p>
                        -What is Capitalism? <br/>
                        -Anarchism <br/>
                        -Marxism <br/>
                        -Communism <br/>
                        -ACAB <br/>
                        -Revolution <br/>
                        -Workers Rights <br/>
                        -BLM <br/>
                        -Revolutionary Thinking <br/>
                    </p>
                </Card>

                <Capitalism></Capitalism>
                
                <Anarchism></Anarchism>

                <Effects></Effects>

                <Revolution></Revolution>
                
                <ThePlan></ThePlan>

                <WhyBother></WhyBother>
                
                <Trade></Trade>
            </Paper>

            <Card sx = {{p: 1, m: 1}}>
                <p>
                    This site is currently under development as a proof of concept. <br></br>
                    If you would like to contact the admin, please send an email to LeftistMediaGroup@Gmail.com<br></br>
                </p>
            </Card>

            </>
        );
    };
};