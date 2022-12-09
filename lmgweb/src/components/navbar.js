import React from "react";
import { Text } from "react";

import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Education from "./education.js";


export const Navbar = () => {
    return (
        <>

        <AppBar position='static'>
            <Toolbar size = 'large' edge = 'start'>
                <Typography variant="h6" sx= {{ flexGrow: 1}}>
                    Home
                </Typography>

                <Stack direction = "row" spacing={2}>
                    <Button color = "inherit">
                        <a href="./education.js"> Education </a> 
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
        
        <BrowserRouter>
            <Routes>
                <Route path="/education">
                    <Education />
                </Route>
            </Routes>
        </BrowserRouter>
        
        </>
    );
};