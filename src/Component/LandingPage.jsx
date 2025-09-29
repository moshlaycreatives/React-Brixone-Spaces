import Navbar from "./Navbar";
import React, { useState } from 'react';
import {
    Tabs,
    Tab,
    MenuItem,
    TextField,
    Paper
} from '@mui/material';
import { Box, Typography, Button, Grid } from "@mui/material";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import AllPropertices from "./AllPropertices";
import FeaturedPropertices from "./FeaturedPropertices";
import HomeBanner from "./HomeBanner";
import Article from "./Article";
import Footer from "./Footer";
import ImageBox from "./ImageBox";
import ClientReview from "./ClientReview";
import InsagramSlider from "./InsagramSlider";





const LandingPage = () => {
    const [tab, setTab] = useState(0);
    const [propertyType, setPropertyType] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [budget, setBudget] = useState('');

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <Box sx={{ padding: { xs: "0px 20px", md: "0px 50px" } }}>
                    <Box sx={{
                        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.43) 45.23%, rgba(0, 0, 0, 0) 99.79%), url(/image/landingimage.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "580px",
                        position: "relative",
                        borderRadius: "30px"
                    }}>
                        {/* TEXT OVER IMAGE */}
                        <Box sx={{ padding: "40px", position: "absolute", top: "20px" }}>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "25px", md: "70px" },
                                color: "#FFFFFF",
                                lineHeight: { xs: "35px", md: "70px" },
                            }}>
                                Elevate Lifestyle Luxury <br />
                                Meets Comfort
                            </Typography>

                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: { xs: "14px", md: "20px" },
                                color: "#FFFFFF",
                                mt: 2
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero diam, dapibus eget <br />
                                euismod ac, scelerisque in lectus. Morbi sodales lacus. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                            </Typography>

                            <Button sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#FFFFFF",
                                textTransform: "none",
                                backgroundColor: "#2A6BE5",
                                width: "185px",
                                height: "50px",
                                borderRadius: "10px",
                                mt: 3
                            }}>
                                Explore Properties
                            </Button>
                        </Box>

                        {/* SEARCH TABS BOX */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: { xs: "-320px", md: "-100px" },
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80%',
                            }}
                        >
                            <Tabs value={tab} onChange={handleTabChange} centered>
                                <Tab label="For Rent" sx={{
                                    backgroundColor: "#FFFFFF",
                                    width: "120px",
                                    color: "#202020",
                                    textTransform: "none",
                                    borderRadius: "6px 6px 0px 0px",
                                    marginRight: "10px"
                                }} />
                                <Tab label="For Sell" sx={{
                                    backgroundColor: '#5c5c5ca6',
                                    color: "#FFFFFF",
                                    textTransform: "none",
                                    width: "120px",
                                    borderRadius: "6px 6px 0px 0px"
                                }} />
                            </Tabs>

                            {/* SEARCH FIELDS */}
                            <Paper elevation={3} sx={{ p: 2, borderRadius: "15px" }}>
                                <Grid container spacing={2} mt={1}>
                                    <Grid item size={{ xs: 12, md: 3 }}>
                                        <Typography sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            color: "#202020"
                                        }}>
                                            Property Type
                                        </Typography>
                                        <TextField
                                            select
                                            value={propertyType}
                                            onChange={(e) => setPropertyType(e.target.value)}
                                            fullWidth
                                            sx={{ mt: 2 }}
                                            
                                        >
                                            <MenuItem value="">Select type</MenuItem>
                                            {/* Add actual types here */}
                                        </TextField>
                                    </Grid>

                                    <Grid item size={{ xs: 12, md: 3 }}>
                                        <Typography sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            color: "#202020"
                                        }}>
                                            Your Budget
                                        </Typography>
                                        <TextField
                                            select
                                            value={bedrooms}
                                            onChange={(e) => setBedrooms(e.target.value)}
                                            fullWidth
                                            sx={{ mt: 2 }}
                                        >
                                            <MenuItem value="">Select budget</MenuItem>
                                            <MenuItem value="0-1000">$0 - $1,000</MenuItem>
                                            <MenuItem value="1000-2000">$1,000 - $2,000</MenuItem>
                                            <MenuItem value="2000+">$2,000+</MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid item size={{ xs: 12, md: 3 }}>
                                        <Typography sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            color: "#202020"
                                        }}>
                                            Select Filter
                                        </Typography>
                                        <TextField
                                            select
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                            fullWidth
                                            sx={{ mt: 2 }}
                                        >
                                            <MenuItem value="">Select budget</MenuItem>
                                            <MenuItem value="0-1000">$0 - $1,000</MenuItem>
                                            <MenuItem value="1000-2000">$1,000 - $2,000</MenuItem>
                                            <MenuItem value="2000+">$2,000+</MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid item size={{ xs: 12, md: 3 }}>
                                        <Button sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            textTransform: "none",
                                            backgroundColor: "#2A6BE5",
                                            width: "100%",
                                            height: "50px",
                                            borderRadius: "10px",
                                            mt: 5
                                        }}>
                                            Find Property
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* All component import */}

            <Box>
                {/* ABOUT SECTION STARTS CLEANLY BELOW */}
                <Box sx={{ mt: { xs: "350px", md: "150px" }, padding: { xs: "0px 20px", md: "0px 50px" } }}>
                    <AboutSection />
                </Box>
                <Box sx={{ mt: "50px" }}>
                    <FeaturedPropertices />
                </Box>


                {/* Our Services */}
                <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 50px" } }}>
                    <ServicesSection />
                </Box>
                <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 50px" } }}>
                    <AllPropertices />
                </Box>
                <Box sx={{ mt: "50px", }}>
                    <HomeBanner />
                </Box>
                <Box>
                    <ClientReview />
                </Box>
                <Box>
                    <Article />
                </Box>
                <Box>
                    <InsagramSlider />
                </Box>
                <Box sx={{ mt: "50px", px: { xs: "0px", md: "50px" } }}>
                    <Footer />
                </Box>
                <Box>
                    <ImageBox />
                </Box>

            </Box>


        </>
    );
};

export default LandingPage;
