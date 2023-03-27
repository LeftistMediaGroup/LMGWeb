import React from "react";

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "test": "1"
        }
    };

    render() {
        return (
            <>
                <Paper elevation = {1} sx = {{ p: 1, m: 1 }}>

                    <Card sx={{ flexGrow: 1, p: 1, m: 1,  border: 1, borderColor: '#d50000' }}>
                        <h1> Projects </h1>           
                    </Card>
                    
                    <Paper sx={{ flexGrow: 1, p: 1, m: 1 }}>
                        <Grid container spacing={2}>
                            
                            <Grid item>
                                
                                <Card variant="outlined" sx={{p: 1, m: 1 }}>
                                    <h2> LMG - Memes</h2>

                                    <p> 
                                    LMG - Memes is a facebook page that shares leftist propaganda.
                                    </p>
                                </Card>
                            </Grid>
                        
                            <Grid item>

                                <Card variant="outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                                    <h2> Wade </h2>

                                    <p>
                                    Wade is a community response system made to assist with the development, design, and organization
                                    of protests. Wade is the mixture of Software and personnel.                     
                                    </p>
                                </Card>
                            </Grid>

                            <Grid item xs={8}>

                                <Card variant="outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                                    <h2> Leftism Through Music </h2>

                                    <p>
                                    This course will provide listeners with a playlist of 80+ downloadable leftist songs to listen to and reflect
                                    on centered around leftist topics.
                                    <br/>
            
                                    Topics include: <br/>
                                        -#Marxism <br/>
                                        -#Anarchism <br/>
                                        -#Communism <br/>
                                        -#ACAB <br/>
                                        -#Revolution <br/>
                                        -#WorkersRights <br/>
                                        -#Capitalism <br/>
                                        -#BLM <br/>
                                        -#RevolutionaryThought <br/>
                                        -Much more! <br/>
                                    Students will be provided with a leftist playlist, lyrics, collaborative notes, mentors, and other multimedia aids. <br/>
                                    </p>
                                </Card>
                            </Grid>
                        </Grid>
                    </Paper>
                </Paper>
            </>
        );
    };
};