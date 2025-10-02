import { Box, Typography, Grid, Button, IconButton, Divider } from "@mui/material";





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
    {
        id: "5",
        Image: "/image/pic5.png",
        Price: "500,000INR"
    },
    {
        id: "6",
        Image: "/image/pic6.png",
        Price: "90,000INR / Per month"
    },
    {
        id: "7",
        Image: "/image/pic7.png",
        Price: "500,000INR"
    },
    {
        id: "8",
        Image: "/image/pic8.png",
        Price: "500,000INR"
    },
]





const AllPropertices = () => {
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
                    All Properties
                </Typography>
            </Box>


            <Box>
                <Grid container spacing={2} mt={3}>
                    <Grid size={{ xs: 12, md: 10 }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: { xs: "25px", md: "50px" },
                                    color: "#202020",
                                    lineHeight: "100%",
                                }}>

                                We're committed to discovering
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: "none", md: "block" } }}>
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




            <Grid container spacing={2} mt={5}>
                {
                    Data.map((item, index) => {
                        return (
                            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index} mt={2}>
                                <Box sx={{ width: "100%" }}>
                                    <img src={item.Image} style={{ width: "100%", height: "285px" }} />
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <img src="/image/Bed.png" />
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#676767",
                                                marginLeft: "5px"
                                            }}>
                                                Bed 2
                                            </Typography>
                                        </Box>
                                        <Divider orientation="vertical" sx={{ height: "40px", marginX: "10px", backgroundColor: "#E0E0E0" }} />
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <img src="/image/Bath.png" />
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#676767",
                                                marginLeft: "5px"
                                            }}>
                                                Bath 2
                                            </Typography>
                                        </Box>
                                        <Divider orientation="vertical" sx={{ height: "40px", marginX: "10px", backgroundColor: "#E0E0E0" }} />

                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <img src="/image/squ.png" />
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#676767",
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
                                            color: "#202020",
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
                                                color: "#202020",
                                                lineHeight: "100%",
                                            }}>

                                            {item.Price}
                                            <Typography
                                                style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#676767",
                                                    lineHeight: "100%",
                                                    marginTop: "15px"
                                                }}>

                                                Ahmedabad
                                            </Typography>
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: "10px" }}>
                                            <img src="/image/arrow.png" style={{ width: "80%", height: "80%" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })
                }
            </Grid>



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



        </>
    )
}

export default AllPropertices;