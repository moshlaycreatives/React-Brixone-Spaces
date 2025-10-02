import { Box, Typography, Grid, TextField } from "@mui/material";
import { Link, List, ListItem, ListItemText, Divider } from '@mui/material';
import { InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



const Footer = () => {
    return (
        <>
            <Box sx={{ px: { xs: "20px", md: "75px" }, backgroundColor: "#2A6BE5", py: "40px", borderRadius: "30px 30px 0px 0px" }}>

                <Box>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box>
                                <img src="/image/FooterLogo.png" style={{ width: "50%" }} />
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    color: "#FFFFFF",
                                    marginTop: "30px"
                                }}>
                                    We're here to guide you through each stage of the real estate experience. From selling or buying to investing and renting, our team will ensure a smooth experience by providing reliable guidance and individualized solutions.
                                </Typography>
                                <Box>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                        marginBottom: "5px",
                                        marginTop: "20px"
                                    }}>
                                        Our Newsletter
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            border: '1px solid #FFFFFF',
                                            borderRadius: '6px',
                                            backgroundColor: '#2A6BE5',
                                            padding: '5px 10px',
                                            width: '90%',
                                        }}
                                    >
                                        <InputBase
                                            placeholder="Your email address"
                                            sx={{
                                                ml: 1,
                                                flex: 1,
                                                color: 'white',
                                                fontFamily: 'Outfit',
                                                '& input::placeholder': {
                                                    color: '#FFFFFF',   
                                                    opacity: 1,
                                                },
                                            }}
                                            inputProps={{ 'aria-label': 'your email address' }}
                                        />
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#FFFFFF',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#FFFFFF',
                                                },
                                                width: 40,
                                                height: 40,
                                                borderRadius: '6%',
                                            }}
                                            aria-label="send"
                                        >
                                            <SendIcon fontSize="small" sx={{ color: "#2A6BE5" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: { xs: "right", md: "flex" }, justifyContent: { xs: "right", md: "center" } }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    color: "#FFFFFF",
                                    marginTop: { xs: "0px", md: "65px" }
                                }}>Quick Links</Typography>
                                <List dense>
                                    {['Home', 'About Us', 'Services', 'Invest', 'Blog', 'Contact Us'].map((item) => (
                                        <ListItem key={item} disablePadding>
                                            <ListItemText primary={<Link href="#" underline="none" style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                color: "#FFFFFF",
                                            }}>{item}</Link>} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    color: "#FFFFFF",
                                    marginTop: { xs: "0px", md: "65px" }
                                }}>Get in Touch</Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: "20px", mt: "10px" }}>
                                <Box mt={1}>
                                    <img src="/image/address.png" />
                                </Box>
                                <Box >
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                    }}>
                                        Address
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                    }}>
                                        lorem Ipsum Ahmadabad, India
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", gap: "20px" }}>
                                <Box mt={1}>
                                    <img src="/image/phone.png" />
                                </Box>
                                <Box >
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                    }}>
                                        Phone Number
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                    }}>
                                        +919227000989
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", gap: "20px" }}>
                                <Box mt={1}>
                                    <img src="/image/mail.png" />
                                </Box>
                                <Box >
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                    }}>
                                        Mail Info
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                    }}>
                                        info@brixonespaces.com
                                    </Typography>
                                </Box>
                            </Box>


                        </Grid>

                    </Grid>
                </Box>


            </Box>

        </>
    )
}


export default Footer;