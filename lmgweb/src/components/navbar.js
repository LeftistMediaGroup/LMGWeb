import React from "react";

import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import Link from '@mui/material/Link';



export const Navbar = () => {
    return (
        <>
        
        <AppBar position='static' style={{ background: '#d50000' }}>
            <Toolbar size = 'large' edge = 'start'>
                <Stack direction = "row" spacing={2}>
                    <Button color = "inherit">
                        <Link href="./" color="inherit">
                            Leftist Media Group
                        </Link>
                    </Button>

                    <div style={{display: 'flex', justifyContent:'right'}}>
                        <Button color = "inherit">
                            <Link href="./Education" color="inherit">
                                Education
                            </Link>
                        </Button>

                        <Button color = "inherit">
                            <Link href="./volunteering" color="inherit">
                                Volunteering
                            </Link>
                        </Button>

                        <Button color = "inherit">
                            <Link href="./music" color="inherit">
                                Music
                            </Link>
                        </Button>

                        <Button color = "inherit">
                            <Link href="./account" color="inherit">
                                Account
                            </Link>
                        </Button>
                    </div>
                </Stack>
            </Toolbar>
        </AppBar>
        
        </>
    );
};