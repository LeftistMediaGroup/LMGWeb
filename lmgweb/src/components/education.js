import React from "react";

import Card from '@mui/material/Card';


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

            <Card>
                <h1> Education </h1>           
            </Card>

            <Card>
                <p>
                    This page is soon to be filled with lots of Educational leftist content.
                </p>
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