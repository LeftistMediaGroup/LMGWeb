import React from "react";

import Card from '@mui/material/Card';


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

            <Card>
                <h1> Welcome to Leftist Media Group </h1>           

                <h2> Organize the Left, start the Revolution. </h2>
            </Card>

            <Card>
                <p>
                    This site is currently under development as a proof of concept. <br></br>

                    If you would like to contact the admin, please send an email to LeftistMediaGroup.com<br></br>

                </p>
            </Card>
            
            </>
        );
    };
};