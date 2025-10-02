// import React from 'react';
// import { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, } from '@mui/material';
// import { Menu as MenuIcon, ShoppingCart, Search, Person } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';
// import Divider from "@mui/material/Divider";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';







// const Navbar = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//     const [drawerOpen, setDrawerOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setDrawerOpen(!drawerOpen);
//     };

//     const menuItems = [
//         { text: 'Home', link: '/' },
//         { text: 'About', link: '/' },
//         { text: 'Buy', link: '/' },
//         { text: 'Rent', link: '/' },
//         { text: 'Sell', link: '/' },
//         { text: 'Invest', link: '/' },
//         { text: 'Blog', link: '/' },
//         { text: 'Contact', link: '/' },
//     ];



//     return (
//         <Box position="sticky" sx={{ padding: { xs: "20px 20px", md: "10px 70px" } }}>
//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

//                 <Typography variant="h6" sx={{ flexGrow: 0 }}>
//                     <img src="/image/Logo.png" alt="Brixone-Space" style={{ width: '100%', height: 'auto' }} />
//                 </Typography>

//                 {isMobile ? (

//                     <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//                         <MenuIcon />
//                     </IconButton>
//                 ) : (

//                     <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
//                         {menuItems.map((item, index) => (
//                             <Button key={index} href={item.link} style={{
//                                 fontFamily: "Afacad",
//                                 fontWeight: 400,
//                                 fontSize: "18px",
//                                 color: "#202020",
//                                 textTransform: "none"
//                             }}>
//                                 {item.text}
//                             </Button>
//                         ))}
//                     </Box>
//                 )}


//                 <Box sx={{ display: 'flex' }}>
//                     <Button sx={{
//                         fontFamily: "Afacad",
//                         fontWeight: 400,
//                         fontSize: "18px",
//                         textTransform: "none",
//                         width: "140px",
//                         height: "48px",
//                         backgroundColor: "#2A6BE5",
//                         color: "#FFFFFF",
//                         borderRadius: "6px"
//                     }}
//                         onClick={() => {
//                             window.open("https://wa.me/919227000989", "_blank"); // Replace with your number
//                         }}
//                         startIcon={<WhatsAppIcon />}
//                     >
//                         Get in touch
//                     </Button>
//                 </Box>
//             </Toolbar>


//             <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
//                 <List sx={{ width: 250 }}>
//                     {menuItems.map((item, index) => (
//                         <ListItem button key={index}>
//                             <ListItemText primary={item.text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//         </Box>



//     );
// };

// export default Navbar;





import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => setDrawerOpen((v) => !v);

  const menuItems = [
    { text: 'Home', link: '' },
    { text: 'About', link: '' },
    { text: 'Buy', link: '' },
    { text: 'Rent', link: '' },
    { text: 'Sell', link: '' },
    { text: 'Invest', link: '' },
    { text: 'Blog', link: '' },
    { text: 'Contact', link: '' },
  ];

  return (
    <Box sx={{ padding: { xs: '10px 12px', md: '10px 70px' }, top: 0, zIndex: (t) => t.zIndex.appBar }}>
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
            <Button
              sx={{
                
                fontFamily: 'Afacad',
                fontWeight: 400,
                fontSize: {xs:"8px", md:"16px"},
                textTransform: 'none',
                height: 40,
                px: 1.5,
                backgroundColor: '#2A6BE5',
                color: '#FFFFFF',
                borderRadius: '6px',
                justifySelf: 'start',
              }}
              onClick={() => window.open('https://wa.me/919227000989', '_blank')}
              startIcon={<WhatsAppIcon />}
            >
            
            </Button>

            {/* Center: Logo */}
            <Box sx={{ justifySelf: 'center' }}>
              <img
                src="/image/Logo.png"
                alt="Brixone-Space"
                style={{ height: 40, display: 'block' , width:"132px" }}
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
                  width: 140,
                  height: 48,
                  backgroundColor: '#2A6BE5',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                }}
                onClick={() => window.open('https://wa.me/919227000989', '_blank')}
                startIcon={<WhatsAppIcon />}
              >
                Get in touch
              </Button>
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
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
