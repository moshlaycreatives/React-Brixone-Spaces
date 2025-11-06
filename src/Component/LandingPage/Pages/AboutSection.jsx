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
                                fontSize: { xs: "13px", md: "18px" },
                                color: "#676767",
                            }}>
                                {/* At Brixone Spaces, we believe finding the perfect home should be easy, safe, reliable, and rewarding. With our years of experience in the real estate market, we offer individualized  to help you buy, rent, sell, or invest with confidence.
                                Our team is committed to providing top-quality real estate services, backed by honesty, trust and professionalism. When you're in search of your dream home or making an investment that will yield profits, we ensure that every step of the process is easy and effortless */}
                                At Brixone Spaces, we believe that finding your ideal property should be exciting, stress-free, and built on trust. With years of experience in the real estate industry, we specialize in personalized solutions that help you buy, sell, invest, or rent with total confidence.
                                Whether you're searching for your dream home or planning a smart investment, our dedicated team is here to guide you every step of the way. We’re proud to offer top-tier service rooted in honesty, professionalism, and genuine care because your goals deserve nothing less.
                            </Typography>



                            {/* <Grid container spacing={2} mt={2}>
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
                            </Grid> */}


                            {/* <Grid container spacing={2} mt={2} alignItems="center">
                                <Grid item size={{ xs: 12, md: 6 }}>
                                    <Box>
                                        {[
                                            "Comprehensive real estate solutions",
                                            "Guaranteed client satisfaction",
                                            "A dedicated and experienced team",
                                            "Reliable and safe dealings",
                                        ].map((text, index) => (
                                            <Box
                                                key={index}
                                                sx={{ display: "flex", gap:"10px", mt: index === 0 ? 0 : "15px" }}
                                            >
                                                <img
                                                    src="/image/Vector.png"
                                                    style={{ width: "25px", height: "25px" }}
                                                    alt="tick icon"
                                                />
                                                <Typography
                                                    sx={{
                                                        fontFamily: "Afacad",
                                                        fontWeight: 400,
                                                        fontSize: "18px",
                                                        color: "#202020",
                                                    }}
                                                >
                                                    {text}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid item size={{ xs: 12, md: 1 }} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{
                                            borderColor: "#676767",
                                            borderRightWidth: 1,
                                            height: "200px",
                                        }}
                                    />
                                </Grid>
                                <Grid item size={{ xs: 12, md: 5 }}>
                                    <Box alignItems="flex-start" mt={2} gap={2}>
                                        <img src="/image/phoneicon.png" alt="phone icon" />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}
                                            >
                                                Have any Question?
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 500,
                                                    fontSize: "25px",
                                                    color: "#202020",
                                                    textTransform: "uppercase",
                                                    mt: "12px",
                                                }}
                                            >
                                                +919227000989
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid> */}

                            <Grid
                                container
                                mt={2}
                                alignItems="center"
                                sx={{ gap: "50px", flexWrap: "wrap" }} // Enforces 10px gap
                            >
                                {/* Left Content Section */}
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        {[
                                            "Comprehensive real estate solutions",
                                            "We prioritize client satisfaction",
                                            "Well-trained and experienced team",
                                            "Reliable and transparent dealings",
                                        ].map((text, index) => (
                                            <Box
                                                key={index}
                                                sx={{ display: "flex", gap: "10px", mt: index === 0 ? 0 : "15px" }}
                                            >
                                                <img
                                                    src="/image/Vector.png"
                                                    style={{ width: "25px", height: "25px" }}
                                                    alt="tick icon"
                                                />
                                                <Typography
                                                    sx={{
                                                        fontFamily: "Afacad",
                                                        fontWeight: 400,
                                                        fontSize: "18px",
                                                        color: "#202020",
                                                    }}
                                                >
                                                    {text}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>

                                {/* Divider */}
                                <Grid
                                    item
                                    xs={12}
                                    md={"auto"} // Don't force size
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        justifyContent: "center",
                                    }}
                                >
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{
                                            borderColor: "#676767",
                                            borderRightWidth: 1,
                                            height: "200px",
                                        }}
                                    />
                                </Grid>

                                {/* Contact Info */}
                                <Grid item xs={12} md={5}>
                                    <Box gap={2} mt={2}>
                                        <img src="/image/phoneicon.png" alt="phone icon" />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                }}
                                            >
                                                Have any Question?
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 500,
                                                    fontSize: "25px",
                                                    color: "#202020",
                                                    textTransform: "uppercase",
                                                    mt: "12px",
                                                }}
                                            >
                                                +919227000989
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>




                        </Box>
                    </Grid >



                    <Grid size={{ xs: 12, md: 6 }} sx={{ paddingLeft: "25px", overflow: "hidden" }} >
                        <AboutSlider />
                    </Grid>

                </Grid >
            </Box >

        </>
    )
}


export default AboutSection;