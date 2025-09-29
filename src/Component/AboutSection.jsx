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
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "25px", md: "50px" },
                                color: "#202020",
                            }}>
                                About Us
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#676767",
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe
                                ro, in cursus magna. Vestibulum eleifend felis ac ultricies facilisis. Vivamus
                                augue risus, elementum vel laoreet a, molestie congue sem. Etiam metus
                                dolor, sodales tincidunt mauris eget, ullamcorper semper tellus Lorem ip
                                sum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in
                                cursus magna. Vestibulum eleifend felis ac ultricies facilisis.
                            </Typography>




                            <Grid container spacing={2} mt={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ display: "flex", gap: "25px" }}>

                                        <Box>
                                            <Box sx={{ display: "flex", gap: "10px" }}>
                                                <img src="/image/Vector.png" style={{ width: "25px", height: "25px" }} />
                                                <Typography style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}>
                                                    Quality real estate services
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
                                                    100% Satisfaction guarantee
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
                                                    Highly professional team
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
                                                    Dealing always on time
                                                </Typography>
                                            </Box>
                                        </Box>

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

                                    </Box>

                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
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
                                            +91 (309) 2087119
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>



                            {/* 
                            <Box sx={{ display: "flex", gap: "25px" }} mt={2}>
                                <Box>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <img src="/image/Vector.png" style={{ width: "25px", height: "25px" }} />
                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#202020",
                                        }}>
                                            Quality real estate services
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
                                            100% Satisfaction guarantee
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
                                            Highly professional team
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
                                            Dealing always on time
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
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
                                        +91 (309) 2087119
                                    </Typography>
                                </Box>


                            </Box> */}


                        </Box>
                    </Grid >



                    <Grid size={{ xs: 12, md: 6 }} sx={{display:{xs:"none", md:"block"}}}>
                        <AboutSlider/>
                    </Grid>

                </Grid >
            </Box >

        </>
    )
}


export default AboutSection;