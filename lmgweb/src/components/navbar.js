import React from "react";

import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import Link from '@mui/material/Link';



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

                    <Button color = "inherit">
                        <Link href="./volunteering" color="inherit">
                            {'color="inherit"'}
                        </Link>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
        
        </>
    );
};