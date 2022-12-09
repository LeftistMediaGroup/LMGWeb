import React from "react";

import Card from '@mui/material/Card';


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

            <Card>
                <h1> Projects </h1>           
            </Card>

            <Card variant="outlined">
                <Card variant="outlined">
                    <h2> LMG - Memes</h2>

                    <p> 
                        LMG - Memes is a facebook page that shares leftist propaganda.
                    </p>
                </Card>

                <Card variant="outlined">
                    <h2> Wade </h2>

                    <p>
                        Wade is a community response system made to assist with the development, design, and organization <br/>
                        of protests. Wade is the mixture of Software and personnel. <br/>                       
                    </p>
                </Card>

                <Card variant="outlined">
                    <h2> Leftism Through Music </h2>

                    <p>
                        This course will provide listeners with a playlist of 80+ downloadable leftist songs to listen to and reflect <br/>
                        on centered around leftist topics.<br/>
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

            </Card>
            
            </>
        );
    };
};