import React from "react";

import { AppBar, Toolbar, Stack, Button } from "@mui/material";


export const Navbar = () => {
    return (
        <>
        
        <AppBar position='static' style={{ background: '#d50000' }}>
            <Toolbar size = 'large' edge = 'start'>
                <Button color = "inherit">
                    <a href="./"> Leftist Media Group </a> 
                </Button>

                <Stack direction = "row" spacing={2}>
                    <Button color = "inherit">
                        <a href="./education"> Education </a> 
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
        
        </>
    );
};