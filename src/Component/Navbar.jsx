import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, } from '@mui/material';
import { Menu as MenuIcon, ShoppingCart, Search, Person } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Divider from "@mui/material/Divider";







const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/' },
        { text: 'Buy', link: '/' },
        { text: 'Rent', link: '/' },
        { text: 'Sell', link: '/' },
        { text: 'Invest', link: '/' },
        { text: 'Blog', link: '/' },
        { text: 'Contact', link: '/' },
    ];



    return (
        <Box position="sticky" sx={{ padding: "10px 50px" }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography variant="h6" sx={{ flexGrow: 0 }}>
                    <img src="/image/Logo.png" alt="Bud Bazar" style={{ width: '100px', height: 'auto' }} />
                </Typography>

                {isMobile ? (

                    <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                ) : (

                    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        {menuItems.map((item, index) => (
                            <Button key={index} href={item.link} style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#202020",
                                textTransform: "none"
                            }}>
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                )}


                <Box sx={{ display: 'flex' }}>
                    <Button sx={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        textTransform: "none",
                        width: "110px",
                        height: "48px",
                        backgroundColor: "#2A6BE5",
                        color: "#FFFFFF",
                        borderRadius: "6px"
                    }}
                        onClick={() => {
                            window.open("https://wa.me/1234567890", "_blank"); // Replace with your number
                        }}
                    >
                        Whatsapp
                    </Button>
                </Box>
            </Toolbar>


            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>



    );
};

export default Navbar;