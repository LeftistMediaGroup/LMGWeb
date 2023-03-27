import React from "react";

import Card from '@mui/material/Card';

import Projects from "./projects/projects.js";
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';


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
                        <Card sx={{ flexGrow: 1, p: 1, m: 1,  border: 1, borderColor: '#d50000' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="/public/LMG.jpg"
                                title="Welcome to Leftist Media Group"
                            />

                            <center> 
                                <h1> Welcome to Leftist Media Group </h1>
                                <h2> Organize the Left, start the Revolution. </h2>
                            </center> 
                        </Card>
                    </Paper>

                    <Paper elevation = {1} sx = {{ p: 1, m: 1 }}>
                        <Card variant="outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                            Leftist Media group is dedicated to Organizing the Left and starting the Revolution. 
                            <br />
                            <br />
                            Accomplishing this task will require educating the masses on the effects of Capitalism.                             
                            <br />
                            The goal of overthrowing Capitalism will require many subtasks, as the only way to defeat it
                            is through the power of love, or in other words, a multifaceted attack from every angle possible. 
                            <br />
                            <br />
                            There is only a finite amount of time left as Capitalism has sent us near the end of our
                            climate catastrophe and fascist leadership path. As such, Leftist Media Group is creating a number
                            of projects to be community lead, all focused on a specific avenue of dismantling Capitalism one brick 
                            at a time.
                        </Card>
                    </Paper>
                    
                    <Projects></Projects>
           
                    <Card sx={{ flexGrow: 1, p: 1, m: 1, border: 1, borderColor: '#d50000' }}>
                        <p>
                            This site is currently under development as a proof of concept.
                            <br>
                            </br>

                            If you would like to contact the admin, please send an email to LeftistMediaGroup@Gmail.com
                            <br>
                            </br>
                        </p>
                    </Card>
                </Paper>
            
            </>
        );
    };
};