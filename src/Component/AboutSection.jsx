import React, { useState } from 'react';
import { Box, Typography, Grid, Divider, IconButton, Stack, CardMedia } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AboutSlider from './AboutSlider';

const services = [
    'Quality real estate services',
    '100% Satisfaction guarantee',
    'Highly professional team',
    'Dealing always on time'
];




const AboutSection = () => {

    return (
        <>
            <Box>
                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "25px", md: "50px" },
                                color: "#202020",
                            }}>
                                About Us
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: {xs:"13px", md:"18px"},
                                color: "#676767",
                            }}>
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe
                                ro, in cursus magna. Vestibulum eleifend felis ac ultricies facilisis. Vivamus
                                augue risus, elementum vel laoreet a, molestie congue sem. Etiam metus
                                dolor, sodales tincidunt mauris eget, ullamcorper semper tellus Lorem ip
                                sum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in
                                cursus magna. Vestibulum eleifend felis ac ultricies facilisis. */}
                                At Brixone Spaces, we believe finding the perfect home should be easy, safe, reliable, and rewarding. With our years of experience in the real estate market, we offer individualized  to help you buy, rent, sell, or invest with confidence.
                                Our team is committed to providing top-quality real estate services, backed by honesty, trust and professionalism. When you're in search of your dream home or making an investment that will yield profits, we ensure that every step of the process is easy and effortless
                            </Typography>




                            <Grid container spacing={2} mt={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ display: "flex", }}>

                                        <Box>
                                            <Box sx={{ display: "flex", gap: "10px" }}>
                                                <img src="/image/Vector.png" style={{ width: "25px", height: "25px" }} />
                                                <Typography style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}>
                                                    Comprehensive real estate solutions
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", gap: "10px", mt: "15px" }}>
                                                <img src="/image/Vector.png" style={{ width: "25px", height: "25px" }} />
                                                <Typography style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}>
                                                    Guaranteed client satisfaction
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", gap: "10px", mt: "13px" }}>
                                                <img src="/image/Vector.png" style={{ width: "25px", height: "25px" }} />
                                                <Typography style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}>
                                                    A dedicated and experienced team
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", gap: "10px", mt: "15px" }}>
                                                <img src="/image/Vector.png" style={{ width: "25px", height: "25px" }} />
                                                <Typography style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}>
                                                    Reliable and safe dealings
                                                </Typography>
                                            </Box>
                                        </Box>



                                    </Box>

                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }}>
                                    <Box
                                        sx={{
                                            display: { xs: "none", md: "flex" },
                                            alignItems: 'center',
                                            height: 150,

                                        }}
                                    >
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            sx={{
                                                borderColor: '#676767',
                                                borderRightWidth: 2,
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 1 }} sx={{display:"flex" , justifyContent:"left"}}>
                                    <Box mt={2}>
                                        <img src="/image/phoneicon.png" />

                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#202020",
                                            marginTop: "12px"
                                        }}>
                                            Have any Question?
                                        </Typography>
                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 500,
                                            fontSize: "25px",
                                            color: "#202020",
                                            textTransform: "uppercase",
                                            marginTop: "12px"
                                        }}>
                                            +919227000989
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>
                    </Grid >



                    <Grid size={{ xs: 12, md: 6 }} sx={{paddingLeft:"25px", overflow:"hidden"}} >
                        <AboutSlider />
                    </Grid>

                </Grid >
            </Box >

        </>
    )
}


export default AboutSection;