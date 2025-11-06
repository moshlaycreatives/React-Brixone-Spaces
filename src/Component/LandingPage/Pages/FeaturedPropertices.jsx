import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { ArrowBack, ArrowForward } from '@mui/icons-material';



const Data = [
    {
        id: "1",
        Image: "/image/Pic1.png",
        Price: "500,000₹"
    },
    {
        id: "2",
        Image: "/image/pic2.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "3",
        Image: "/image/pic3.png",
        Price: "500,000₹"
    },
    {
        id: "4",
        Image: "/image/pic4.png",
        Price: "350,000₹ / Per month"
    },
]



const FeaturedPropertices = () => {
    return (
        <>

            <Box sx={{ px: { xs: "20px", md: "75px" }, backgroundColor: "#202020", py: "30px" }}>
                <Box
                    sx={{
                        display: "inline-block",
                        mt: 5,
                        borderRadius: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#FFFFFF",
                            lineHeight: "100%",
                        }}
                    >
                        Featured Properties
                    </Typography>
                </Box>


                <Box>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 10 }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: { xs: "25px", md: "50px" },
                                    color: "#FFFFFF",
                                    lineHeight: "100%",
                                    marginTop: "20px"
                                }}>
                                    Find Your Dream Home Today
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: { xs: "13px", md: "18px" },
                                    color: "#FFFFFF",
                                    lineHeight: "20px",
                                    marginTop: "20px",
                                    display:{xs:"none", md:"block"}
                                }}>
                                   Discover a carefully selected range luxury properties, including apartments,  homes  and commercial <br /> spaces that are designed to your needs for  investment and lifestyle. We are Brixone Spaces, and we <br />can  connect to properties that blend contemporary design, prime areas, and value for the long term.
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: { xs: "13px", md: "18px" },
                                    color: "#FFFFFF",
                                    lineHeight: "20px",
                                    marginTop: "20px",
                                         display:{xs:"block", md:"none"}
                                }}>
                                 
                                   Discover a carefully selected range of luxury properties, including apartments, homes and commercial spaces that are designed to your needs for investment and lifestyle.  We are Brixone Spaces, and we can connect to properties that blend contemporary design, prime areas, and value for the long term.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }} sx={{display:{xs:"none", md:"block"}}}>
                            <Button sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#FFFFFF",
                                width: "100%",
                                height: "48px",
                                backgroundColor: "#2A6BE5",
                                textTransform: "none",
                                borderRadius: "6px",
                                marginTop: { xs: "10px", md: "50px" }

                            }}
                                variant="outlined"
                            >View all Listing</Button>
                        </Grid>

                    </Grid>
                </Box>

                <Grid container spacing={2} mt={3}>
                    {
                        Data.map((item, index) => {
                            return (
                                <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index} mt={2}>
                                    <Box sx={{ width: "100%" }}>
                                        <img src={item.Image} style={{ width: "100%" , height:"285px" }} />
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/WBed.png" />
                                                <Typography sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#FFFFFF",
                                                    marginLeft: "5px"
                                                }}>
                                                    Bed 2
                                                </Typography>
                                            </Box>
                                            <Divider orientation="vertical" sx={{ height: "40px", marginX: "10px", backgroundColor: "#E0E0E0" }} />
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/WBath.png" />
                                                <Typography sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#FFFFFF",
                                                    marginLeft: "5px"
                                                }}>
                                                    Bath 2
                                                </Typography>
                                            </Box>
                                            <Divider orientation="vertical" sx={{ height: "40px", marginX: "10px", backgroundColor: "#E0E0E0" }} />

                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/Wsqu.png" />
                                                <Typography sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#FFFFFF",
                                                    marginLeft: "5px"
                                                }}>
                                                    1520 sqft
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider sx={{ backgroundColor: "#676767", mt: "10px" }} />

                                        <Box>
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 600,
                                                fontSize: "25px",
                                                color: "#FFFFFF",
                                                marginTop: "8px"
                                            }}>
                                                Crestview Luxe Homes
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', mt: "10px" }}>
                                            <Typography
                                                style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 500,
                                                    fontSize: "18px",
                                                    color: "#FFFFFF",
                                                    lineHeight: "100%",
                                                }}>

                                                {item.Price}
                                                <Typography
                                                    style={{
                                                        fontFamily: "Afacad",
                                                        fontWeight: 400,
                                                        fontSize: "16px",
                                                        color: "#FFFFFF",
                                                        lineHeight: "100%",
                                                        marginTop: "15px"
                                                    }}>

                                                    Ahmedabad
                                                </Typography>
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: "10px" }}>
                                                <img src="/image/warrow.png" style={{width:"80%", height:"80%"}}/>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })
                    }
                </Grid>




                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Box
                        mt={5}
                        display="flex"
                        gap={2}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                minWidth: '45px',
                                height: '30px',
                                borderRadius: '24px',
                                borderColor: '#FFFFFF',
                                color: '#FFFFFF'
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

                </Box>



     <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Grid container spacing={2} mt={5} >
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Button style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#FFFFFF",
                            width: "100%",
                            height: "48px",
                            backgroundColor: "#2A6BE5",
                            textTransform: "none",
                            borderRadius: "6px"
                        }}
                            variant="outlined"
                        >View all Listing</Button>

                    </Grid>

                </Grid>
            </Box>



            </Box>




        </>
    )
}


export default FeaturedPropertices;