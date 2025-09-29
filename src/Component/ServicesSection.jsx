import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Avatar,
    createTheme,
    ThemeProvider,
    Grid
} from '@mui/material';



const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3',
        },
    },
});

const ServicesSection = () => {
    return (
        <>
            <Box>
                <Typography style={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: "#676767",
                    lineHeight: "100%",
                }}>
                    Our Services
                </Typography>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 600,
                    fontSize: { xs: "25px", md: "50px" },
                    color: "#202020",
                    lineHeight: "100%",
                    marginTop: "20px"
                }}>
                    We're committed to discovering the perfect property for you
                </Typography>
            </Box>




            <Box>
                <Grid container spacing={2} mt={6}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <ThemeProvider theme={theme}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: '#2A6BE5',
                                    color: 'white',
                                    borderRadius: "15px",
                                    textAlign: 'center',

                                }}
                            >
                                <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
                                    {/* Icon */}
                                    <Box sx={{ mb: 2 }}>
                                        <img src='/image/Buy.png' />
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "30px",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Buy a Home
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            marginTop: "5px"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, do
                                        <br />
                                        consectetur adipiscing elit,
                                        <br />
                                        Fuscefacilisis libe.
                                    </Typography>

                                    {/* Button */}
                                    <Button
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            textTransform: "none",
                                            width: "146px",
                                            height: "36px",
                                            border: "1px solid #FFFFFF",
                                            marginTop: "20px"
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </ThemeProvider>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <ThemeProvider theme={theme}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: '#2A6BE5',
                                    color: 'white',
                                    borderRadius: "15px",
                                    textAlign: 'center',

                                }}
                            >
                                <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
                                    {/* Icon */}
                                    <Box sx={{ mb: 2 }}>
                                        <img src='/image/Rent.png' />
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "30px",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Rent a Home
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            marginTop: "5px"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, do
                                        <br />
                                        consectetur adipiscing elit,
                                        <br />
                                        Fuscefacilisis libe.
                                    </Typography>

                                    {/* Button */}
                                    <Button
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            textTransform: "none",
                                            width: "146px",
                                            height: "36px",
                                            border: "1px solid #FFFFFF",
                                            marginTop: "20px"
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </ThemeProvider>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <ThemeProvider theme={theme}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: '#2A6BE5',
                                    color: 'white',
                                    borderRadius: "15px",
                                    textAlign: 'center',

                                }}
                            >
                                <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
                                    {/* Icon */}
                                    <Box sx={{ mb: 2 }}>
                                        <img src='/image/Sell.png' />
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "30px",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Sell a Home
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            marginTop: "5px"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, do
                                        <br />
                                        consectetur adipiscing elit,
                                        <br />
                                        Fuscefacilisis libe.
                                    </Typography>

                                    {/* Button */}
                                    <Button
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            textTransform: "none",
                                            width: "146px",
                                            height: "36px",
                                            border: "1px solid #FFFFFF",
                                            marginTop: "20px"
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </ThemeProvider>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <ThemeProvider theme={theme}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: '#2A6BE5',
                                    color: 'white',
                                    borderRadius: "15px",
                                    textAlign: 'center',

                                }}
                            >
                                <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
                                    {/* Icon */}
                                    <Box sx={{ mb: 2 }}>
                                        <img src='/image/Invest.png' />
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "30px",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Invest
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            marginTop: "5px"
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, do
                                        <br />
                                        consectetur adipiscing elit,
                                        <br />
                                        Fuscefacilisis libe.
                                    </Typography>

                                    {/* Button */}
                                    <Button
                                        sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            color: "#FFFFFF",
                                            textTransform: "none",
                                            width: "146px",
                                            height: "36px",
                                            border: "1px solid #FFFFFF",
                                            marginTop: "20px"
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Box>




        </>
    );
};

export default ServicesSection;
