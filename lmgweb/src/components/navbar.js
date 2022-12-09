import React from "react";

import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";


export const Navbar = () => {
    return (
        <>

        <AppBar position='static'>
            <Toolbar size = 'large' edge = 'start'>
                <Typography variant="h6" sx= {{ flexGrow: 1}}>
                    Leftist Media Group
                </Typography>

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