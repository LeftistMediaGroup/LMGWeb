import React from "react";

import Card from '@mui/material/Card';

import Paper from '@mui/material/Paper';


export default class Volunteering extends React.Component {
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
                    <h1> Volunteering </h1>           
                </Card>

                <Card variant = "outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                    <h2> How to get started </h2>

                    <p>
                        Leftist Media Group is recruiting for volunteers to spread revolutionary propaganda.
                        <br/>
                        <br/>
                        Do you hate mainstream media? Are you the crazy leftist in your circles? Well we are too!
                        <br/>
                        <br/>
                        Our goal is to organize the left and start the revolution.
                        <br/>
                        We will accomplish this by creating and distributing high quality educational material centered around socialist theory, news and movements, while organizing locally and globally with other leftist groups and organizations. 

                    </p>

                    <p>
                        If you'd like to join the Revolution, send a email to an admin at LeftistMediaGroup@Gmail.com
                    </p>
                </Card>

                <Card>
                    <h3> Positions </h3>

                    <p>
                    We are asking for 1 hour of your time a week for the cause.
                    </p>

                    <Card>
                        <h4> Article writers </h4>

                        <p>
                        Create content to share with the world, report on local and global events, write one article about 500 words a week. 
                        </p>
                    </Card>

                    <Card>
                        <h4> Meme Distributors </h4>

                        <p>
                        This position involves scrolling through a dedicated meme facebook feed and resharing the best leftist memes to our official meme page.
                        </p>
                    </Card>

                    <Card>
                        <h4> Software Developers </h4>

                        <p> 
                        This position will work on software projects for the organization. Software projects are centered around leftist organizing. Beginner coders welcome (Training provided). Looking for Javascript or Python.
                        </p>
                    </Card>

                    <Card>
                        <h4> Project Managers </h4>
                        <p> 
                        Looking for people to help organize our team and keep things on track. Any skills in project management, or leadership appreciated.
                        </p>
                    </Card>
                </Card>

                <Card>
                    <h3> Lets Go!</h3>

                    <p>
                        If you’ve read this far and you’re interested, send us a message regardless of your skillset and we’ll find you a way to help out
                    </p>    
                </Card>
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