import React from "react";
import { Text } from "react";

import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

import { Link } from "react-router-native";



export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar size = 'large' edge = 'start'>
                <Typography variant="h6" sx= {{ flexGrow: 1}}>
                    Home
                </Typography>

                <Stack direction = "row" spacing={2}>
                    <Button color = "inherit">
                        <Link to="/education">
                            <Text>
                                Education
                            </Text>
                        </Link>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};