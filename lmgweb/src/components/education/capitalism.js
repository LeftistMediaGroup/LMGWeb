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
                    <h1> What is Capitalism </h1>           
                </Card>
                
                <Paper variant = "outlined" elevation={1} sx={{ flexGrow: 1, p: 1, m: 1 }}>
                    <Card variant="outlined" sx={{ flexGrow: 1, p: 1, m: 1 }}>
                        <h2> Topics to explore </h2>

                        <p>
                            -Marxism <br/>
                            -Anarchism <br/>
                            -Communism <br/>
                            -ACAB <br/>
                            -Revolution <br/>
                            -Workers Rights <br/>
                            -BLM <br/>
                            -Revolutionary Thinking <br/>
                        </p>
                    </Card>
                </Paper>
            </Paper>

            </>
        );
    };
};