// import React from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Button,
//     Box,
//     Avatar,
//     createTheme,
//     ThemeProvider,
//     Grid
// } from '@mui/material';



// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#2196F3',
//         },
//     },
// });

// const ServicesSection = () => {
//     return (
//         <>
//             <Box>
//                 <Typography style={{
//                     fontFamily: "Afacad",
//                     fontWeight: 400,
//                     fontSize: "18px",
//                     color: "#676767",
//                     lineHeight: "100%",
//                 }}>
//                     Our Services
//                 </Typography>
//                 <Typography sx={{
//                     fontFamily: "Afacad",
//                     fontWeight: 600,
//                     fontSize: { xs: "25px", md: "50px" },
//                     color: "#202020",
//                     lineHeight: "100%",
//                     marginTop: "20px"
//                 }}>
//                     We're Committed To Discovering The Perfect Property For You
//                 </Typography>
//             </Box>




//             <Box>
//                 <Grid container spacing={2} sx={{ marginTop: { xs: "35px", md: "35px" } }}>
//                     <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//                         <ThemeProvider theme={theme}>
//                             <Card
//                                 sx={{
//                                     width: "100%",
//                                     height: "320px",
//                                     background: '#2A6BE5',
//                                     color: 'white',
//                                     borderRadius: "15px",
//                                     textAlign: 'center',

//                                 }}
//                             >
//                                 <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
//                                     {/* Icon */}
//                                     <Box sx={{ mb: 2 }}>
//                                         <img src='/image/Buy.png' />
//                                     </Box>

//                                     {/* Title */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 600,
//                                             fontSize: "30px",
//                                             color: "#FFFFFF",
//                                         }}
//                                     >
//                                         Buy a Home
//                                     </Typography>

//                                     {/* Description */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             marginTop: "5px"
//                                         }}
//                                     >
//                                         Discover your perfect home with expert support,carefully matched to your lifestyle and budget needs.
//                                     </Typography>

//                                     {/* Button */}
//                                     <Button
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             textTransform: "none",
//                                             width: "146px",
//                                             height: "36px",
//                                             border: "1px solid #FFFFFF",
//                                             marginTop: "20px"
//                                         }}
//                                     >
//                                         View Details
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </ThemeProvider>
//                     </Grid>
//                     <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//                         <ThemeProvider theme={theme}>
//                             <Card
//                                 sx={{
//                                     width: "100%",
//                                     height: "320px",
//                                     background: '#2A6BE5',
//                                     color: 'white',
//                                     borderRadius: "15px",
//                                     textAlign: 'center',

//                                 }}
//                             >
//                                 <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
//                                     {/* Icon */}
//                                     <Box sx={{ mb: 2 }}>
//                                         <img src='/image/Rent.png' />
//                                     </Box>

//                                     {/* Title */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 600,
//                                             fontSize: "30px",
//                                             color: "#FFFFFF",
//                                         }}
//                                     >
//                                         Rent a Home
//                                     </Typography>

//                                     {/* Description */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             marginTop: "5px"
//                                         }}
//                                     >
//                                         Choose from reliable rental options and settle into a place that truly feels like  your own home.
//                                     </Typography>

//                                     {/* Button */}
//                                     <Button
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             textTransform: "none",
//                                             width: "146px",
//                                             height: "36px",
//                                             border: "1px solid #FFFFFF",
//                                             marginTop: "20px"
//                                         }}
//                                     >
//                                         View Details
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </ThemeProvider>
//                     </Grid>
//                     <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//                         <ThemeProvider theme={theme}>
//                             <Card
//                                 sx={{
//                                     width: "100%",
//                                     height: "320px",
//                                     background: '#2A6BE5',
//                                     color: 'white',
//                                     borderRadius: "15px",
//                                     textAlign: 'center',

//                                 }}
//                             >
//                                 <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
//                                     {/* Icon */}
//                                     <Box sx={{ mb: 2 }}>
//                                         <img src='/image/Sell.png' />
//                                     </Box>

//                                     {/* Title */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 600,
//                                             fontSize: "30px",
//                                             color: "#FFFFFF",

//                                         }}
//                                     >
//                                         Sell a Home
//                                     </Typography>

//                                     {/* Description */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             marginTop: "5px"
//                                         }}
//                                     >
//                                         List your property with us to gain wide exposure and achieve the best value in today’s market.
//                                     </Typography>

//                                     {/* Button */}
//                                     <Button
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             textTransform: "none",
//                                             width: "146px",
//                                             height: "36px",
//                                             border: "1px solid #FFFFFF",
//                                             marginTop: "20px"
//                                         }}
//                                     >
//                                         View Details
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </ThemeProvider>
//                     </Grid>
//                     <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//                         <ThemeProvider theme={theme}>
//                             <Card
//                                 sx={{
//                                     width: "100%",
//                                     height: "320px",
//                                     background: '#2A6BE5',
//                                     color: 'white',
//                                     borderRadius: "15px",
//                                     textAlign: 'center',

//                                 }}
//                             >
//                                 <CardContent sx={{ padding: 3, '&:last-child': { pb: 3 } }}>
//                                     {/* Icon */}
//                                     <Box sx={{ mb: 2 }}>
//                                         <img src='/image/Invest.png' />
//                                     </Box>

//                                     {/* Title */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 600,
//                                             fontSize: "30px",
//                                             color: "#FFFFFF",
//                                         }}
//                                     >
//                                         Invest
//                                     </Typography>

//                                     {/* Description */}
//                                     <Typography
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             marginTop: "5px"
//                                         }}
//                                     >
//                                         Explore profitable of the real estate is opportunities designed to grow  wealth  secure your future.
//                                     </Typography>

//                                     {/* Button */}
//                                     <Button
//                                         sx={{
//                                             fontFamily: "Afacad",
//                                             fontWeight: 400,
//                                             fontSize: "18px",
//                                             color: "#FFFFFF",
//                                             textTransform: "none",
//                                             width: "146px",
//                                             height: "36px",
//                                             border: "1px solid #FFFFFF",
//                                             marginTop: "20px"
//                                         }}
//                                     >
//                                         View Details
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </ThemeProvider>
//                     </Grid>
//                 </Grid>
//             </Box>




//         </>
//     );
// };

// export default ServicesSection;



import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
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

const cardData = [
    {
        image: '/image/Buy.png',
        title: 'Buy a Home',
        desc: 'Discover your perfect home with expert support, carefully matched to your lifestyle and budget needs.'
    },
    {
        image: '/image/Rent.png',
        title: 'Rent a Home',
        desc: 'Choose from reliable rental options and settle into a place that truly feels like your own home.'
    },
    {
        image: '/image/Sell.png',
        title: 'Sell a Home',
        desc: 'List your property with us to gain wide exposure and achieve the best value in today’s market.'
    },
    {
        image: '/image/Invest.png',
        title: 'Invest',
        desc: 'Explore profitable real estate opportunities designed to grow wealth and secure your future.'
    },
];

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
                    We're Committed To Discovering The Perfect Property For You
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    {cardData.map((card, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <ThemeProvider theme={theme}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: '#2A6BE5',
                                        color: 'white',
                                        borderRadius: "15px",
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ mb: 2 }}>
                                            <img src={card.image} alt={card.title} />
                                        </Box>

                                        <Typography
                                            sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 600,
                                                fontSize: "24px",
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            {card.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#FFFFFF",
                                                mt: 1,
                                                flexGrow: 1
                                            }}
                                        >
                                            {card.desc}
                                        </Typography>

                                        <Button
                                            sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#FFFFFF",
                                                textTransform: "none",
                                                width: "146px",
                                                height: "36px",
                                                border: "1px solid #FFFFFF",
                                                mt: '15px',
                                                alignSelf: 'center'
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </ThemeProvider>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default ServicesSection;
