import React from "react";

import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Education from "./education.js";


export const Navbar = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Education />,
        },
    ]);

    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );
      
    return (
        <AppBar position='static'>
            <Toolbar size = 'large' edge = 'start'>
                <Typography variant="h6" sx= {{ flexGrow: 1}}>
                    Home
                </Typography>
                <Stack direction = "row" spacing={2}>
                    <Button color = "inherit">
                        Education
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};