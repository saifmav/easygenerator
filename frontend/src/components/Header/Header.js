import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

import useStyles from './styles.js';

const Header = () => {
    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <AppBar position="static" className={classes.palette}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                </Box>
                <button className={classes.whitebtn} onClick={handleLogout}>
                    Logout
                </button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;