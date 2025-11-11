import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import Cart from './Cart';




const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [cartOpen, setCartOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);


  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);

  const handlelogin = () => {
    navigate(`/Login`)
  }


  const handleDrawerToggle = () => setDrawerOpen((v) => !v);

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/AboutUs' },
    { text: 'Buy', link: '/Buy' },
    { text: 'Rent', link: '/Rent' },
    { text: 'Sell', link: '/Sell' },
    { text: 'Invest', link: '/Invest' },
    { text: 'Blog', link: '/Blog' },
    { text: 'Contact', link: '/Contact' },
  ];

  return (
    <Box sx={{ padding: { xs: '10px 12px', md: '10px 50px' }, top: 0, zIndex: (t) => t.zIndex.appBar }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* MOBILE LAYOUT */}
        {isMobile ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center',
              width: '100%',

            }}
          >
            {/* Left: Get in touch */}
            <Box>
              <IconButton onClick={handleOpenCart}>
                <SegmentOutlinedIcon />
              </IconButton>
              <Button
                sx={{
                  fontFamily: 'Afacad',
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "16px" },
                  textTransform: 'none',
                  height: 40,
                  px: 1.5,
                  backgroundColor: '#2A6BE5',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  justifySelf: 'start',
                }}
                // onClick={() => window.open('https://wa.me/919227000989', '_blank')}
                // startIcon={<WhatsAppIcon />}
                onClick={handlelogin}
              >
                Login
              </Button>

            </Box>

            {/* Center: Logo */}
            <Box sx={{ justifySelf: 'center' }}>
              <img
                src="/image/Logo.png"
                alt="Brixone-Space"
                style={{ height: 40, display: 'block', width: "132px" }}
              />
            </Box>

            {/* Right: Menu button */}
            <IconButton
              aria-label="open navigation"
              onClick={handleDrawerToggle}
              sx={{ justifySelf: 'end' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          /* DESKTOP LAYOUT */
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography variant="h6" sx={{ flexShrink: 0 }}>
              <img src="/image/Logo.png" alt="Brixone-Space" style={{ height: 40 }} />
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  href={item.link}
                  sx={{
                    fontFamily: 'Afacad',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: '#202020',
                    textTransform: 'none',
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                sx={{
                  fontFamily: 'Afacad',
                  fontWeight: 400,
                  fontSize: '18px',
                  textTransform: 'none',
                  width: 80,
                  height: 48,
                  backgroundColor: '#2A6BE5',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  padding: "5px"
                }}
                // onClick={() => window.open('https://wa.me/919227000989', '_blank')}
                // startIcon={<WhatsAppIcon />}

                onClick={handlelogin}
              >
                Login
              </Button>
              <IconButton onClick={handleOpenCart}>
                <SegmentOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Toolbar>

      {/* Drawer: RIGHT side */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              component="a"
              href={item.link}
              onClick={handleDrawerToggle}
              sx={{
                color: "#202020"
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Cart open={cartOpen} onClose={handleCloseCart} />
    </Box>
  );
};

export default Navbar;
