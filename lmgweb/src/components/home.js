import React from "react";

import Card from '@mui/material/Card';

import Projects from "./projects/projects.js";
import { Paper } from "@mui/system";


export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "test": "1"
        }
    };

    render() {
        return (
            <>
                <Paper elevation={1} variant="outlined" sx={{ p: 1, m: 1 }}>
                    <Paper elevation={1} sx={{ p: 1, m: 1 }}>
                        <Card sx={{ flexGrow: 1, p: 1, m: 1 }}>
                            <h1> Welcome to Leftist Media Group </h1>

                            <h2> Organize the Left, start the Revolution. </h2>
                        </Card>
                    </Paper>

                    <Paper elevation = {1} sx = {{ p: 1, m: 1 }}>
                        <Card variant="outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                            Leftist Media group is dedicated to Organizing the Left and starting the Revolution. <br />
                            <br />
                            Accomplishing this task will require educating the masses on the effects of Capitalism. <br />
                            <br />
                            The goal of overthrowing Capitalism will require many subtasks, as the only way to defeat it <br />
                            is through the power of love, or in other words, a multifaceted attack from evrey angle possible. <br />
                            <br />
                            There is only a finite amount of time left as Capitalism has sent us near the end of our <br />
                            climate catastrophe and fascist leadership path. As such, Leftist Media Group is creating a number <br />
                            of projects to be community lead, all focused on a specific avenue of dismantaling Capitalism one brick <br />
                            at a time. <br />
                        </Card>
                    </Paper>
                    
                    <Projects></Projects>
           
                    <Card sx={{ flexGrow: 1, p: 1, m: 1 }}>
                        <p>
                            This site is currently under development as a proof of concept. <br></br>

                            If you would like to contact the admin, please send an email to LeftistMediaGroup.com<br></br>
                        </p>
                    </Card>
                </Paper>
            
            </>
        );
    };
};