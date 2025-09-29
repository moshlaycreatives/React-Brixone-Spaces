import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { ArrowBack, ArrowForward } from '@mui/icons-material';



const Data = [
    {
        id: "1",
        Image: "/image/Pic1.png",
        Price: "500,000INR"
    },
    {
        id: "2",
        Image: "/image/pic2.png",
        Price: "90,000INR / Per month"
    },
    {
        id: "3",
        Image: "/image/pic3.png",
        Price: "500,000INR"
    },
    {
        id: "4",
        Image: "/image/pic4.png",
        Price: "350,000INR / Per month"
    },
]



const FeaturedPropertices = () => {
    return (
        <>

            <Box sx={{ px: { xs: "20px", md: "50px" }, backgroundColor: "#202020", py: "30px" }}>
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
                                    fontSize: { xs: "11px", md: "18px" },
                                    color: "#FFFFFF",
                                    lineHeight: "20px",
                                    marginTop: "20px"
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe <br />
                                    ro, in cursus magna. Vestibulum eleifend felis ac ultricies facilisis. Vivamus <br />
                                    augue risus, elementum vel laoreet a, molestie congue sem.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
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
                                        <img src={item.Image} style={{ width: "100%" }} />
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
                                                Lorem ipsum dolor
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






            </Box>




        </>
    )
}


export default FeaturedPropertices;