import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <toolbar size = 'large' edge = 'start'>
                <Typography variant="h6">
                    Home
                </Typography>
            </toolbar>
        </AppBar>
    );
};