import { Box, Typography, Grid, Divider, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import HomeBanner from "../LandingPage/Pages/HomeBanner";







const AboutUs = () => {
    return (
        <>
            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#0000004D, #0000004D), url('/image/About1.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        // height: "580px",
                        height: { xs: "380px", md: "362px" },
                        borderRadius: "30px",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: "60px",
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                            textAlign: "center",
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#202020",
                            textAlign: "center",
                            backgroundColor: "#FFFFFF",
                            width: "150px",
                            height: "30px",
                            borderRadius: "26px",
                            paddingTop: "2px"

                        }}
                    >
                        Home / <span style={{ color: "#2A6BE5" }}>About us</span>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Typography style={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    color: "#676767",

                }}>
                    About Us
                </Typography>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 600,
                    fontSize: { xs: "25px", md: "50px" },
                    textTransform: "capitalize",
                    color: "#202020",


                }}>
                    Your Reliable Partner In Real Estate Success
                </Typography>

            </Box>

            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={7}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ mt: { xs: "0px", md: "10px" } }}>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: "40px",
                                textTransform: "capitalize",
                                color: "#202020",

                            }}>
                                Our Mission
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                textTransform: "capitalize",
                                color: "#676767",

                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus
                                magna. Vestibulum eleifend felis ac ultricies facilisis. Vivamus augue risus, elementum
                                vel laoreet a, molestie congue sem. Etiam metus dolor, sodales tincidunt mauris eget
                                ullamcorper semper tellus Lorem ip sum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus magna. Vestibulum eleifend felis ac ultricies facilisis.
                                Vestibulum eleifend felis ac ultricies facilisis.
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: "40px",
                                textTransform: "capitalize",
                                color: "#202020",

                            }}>
                                Our Vision
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                textTransform: "capitalize",
                                color: "#676767",

                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus
                                magna. Vestibulum eleifend felis ac ultricies facilisis. Vivamus augue risus, elementum
                                vel laoreet a, molestie congue sem. Etiam metus dolor, sodales tincidunt mauris eget
                                ullamcorper semper tellus Lorem ip sum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus magna. Vestibulum eleifend felis ac ultricies facilisis.
                                Vestibulum eleifend felis ac ultricies facilisis.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box>
                            <Box
                                component="img"
                                src="/image/About2.png"
                                sx={{
                                    width: "100%",
                                    height: { xs: "430px", md: "450px" },
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: "35px" }}>
                <HomeBanner />
            </Box>

            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, md: 5 }} order={{ xs: 2, md: 1 }}>
                        <Box>
                            <Box
                                component="img"
                                src="/image/About3.png"
                                sx={{
                                    width: "100%",
                                    height: { xs: "430px", md: "460px" },
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} order={{ xs: 1, md: 2 }}>
                        <Box>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                textTransform: "capitalize",
                                color: "#676767",

                            }}>
                                Our Process
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "25px", md: "50px" },
                                textTransform: "capitalize",
                                color: "#202020",


                            }}>
                                Homebuying Steps
                            </Typography>
                        </Box>


                        <Box sx={{ display: "flex", gap: "15px", mt: "20px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "90px"
                                }}
                            >
                                <Divider
                                    orientation="vertical"

                                    sx={{
                                        borderColor: "#2A6BE5",
                                        borderRightWidth: 3,
                                    }}
                                />
                            </Box>


                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: { xs: "25px", md: "35px" },
                                    textTransform: "capitalize",
                                    color: "#2A6BE5",
                                    marginTop: "-10px"

                                }}>
                                    Step 1: Discover Your Dream Home
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    color: "#676767",

                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus
                                    magna. Vestibulum eleifend felis ac ultricies facilisis.
                                </Typography>
                            </Box>


                        </Box>

                        <Box sx={{ display: "flex", gap: "15px", mt: "20px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "90px"
                                }}
                            >
                                <Divider
                                    orientation="vertical"

                                    sx={{
                                        borderColor: "#D9D9D9",
                                        borderRightWidth: 3,
                                    }}
                                />
                            </Box>


                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                   fontSize: { xs: "25px", md: "35px" },
                                    textTransform: "capitalize",
                                    color: "#202020",
                                    marginTop: "-10px"

                                }}>
                                    Step 2: Schedule A Viewing
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    color: "#676767",

                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus
                                    magna. Vestibulum eleifend felis ac ultricies facilisis.
                                </Typography>
                            </Box>


                        </Box>
                        <Box sx={{ display: "flex", gap: "15px", mt: "20px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "90px"
                                }}
                            >
                                <Divider
                                    orientation="vertical"

                                    sx={{
                                        borderColor: "#D9D9D9",
                                        borderRightWidth: 3,
                                    }}
                                />
                            </Box>


                            <Box>
                                <Typography style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                  fontSize: { xs: "25px", md: "35px" },
                                    textTransform: "capitalize",
                                    color: "#202020",
                                    marginTop: "-10px"

                                }}>
                                    Step 3: Seal The Deal
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    color: "#676767",

                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus
                                    magna. Vestibulum eleifend felis ac ultricies facilisis.
                                </Typography>
                            </Box>


                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box>
                    <Typography
                        sx={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#676767",
                            lineHeight: "100%",
                        }}
                    >
                        Our Expert
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={2} mt={2}>
                        <Grid size={{ xs: 12, md: 10 }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: { xs: "25px", md: "50px" },
                                    color: "#202020",
                                    lineHeight: "100%",

                                }}>
                                    Meet Our Real Estate Team
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }} >
                            <Box
                                display="flex"
                                gap={2}
                                justifyContent={{ xs: 'center', md: 'flex-end' }}
                                mt={2}


                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        minWidth: '45px',
                                        height: '30px',
                                        borderRadius: '24px',
                                        borderColor: '#676767',
                                        color: '#676767'
                                    }}
                                >
                                    <ArrowBack fontSize="small" />
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        minWidth: '45px',
                                        height: '30px',
                                        borderRadius: '24px',
                                        backgroundColor: '#2A6BE5',

                                    }}
                                >
                                    <ArrowForward fontSize="small" />
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>



            </Box>


        </>
    )
}


export default AboutUs;