import { Box, Typography, Button, Grid, Divider } from "@mui/material";






const Data = [
    {
        id: "1",
        Image: "/image/Pic1.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "2",
        Image: "/image/Buy2.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "3",
        Image: "/image/pic3.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "4",
        Image: "/image/Buy3.png",
        Price: "350,000₹ / Per month"
    },
    {
        id: "5",
        Image: "/image/pic5.png",
        Price: "500,000₹ / per month"
    },
    {
        id: "6",
        Image: "/image/Buy4.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "7",
        Image: "/image/pic7.png",
        Price: "90,000₹ / Per month"
    },
    {
        id: "8",
        Image: "/image/pic8.png",
        Price: "500,000₹ / per month"
    },
]



const SoldOut = () => {
    return (
        <>
            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    fontSize: "36px",
                    color: "#202020",
                }}>
                    Dashboard /<span style={{ color: "#4079ED" }}> Sold Out</span>
                </Typography>
            </Box>

            {/* sx={{
                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "15px",
                backgroundColor: "white",
                padding: "20px"
            }} */}


            <Box >
                <Grid container spacing={2} sx={{ marginTop: { xs: "20px", md: "2\0px" } }}>
                    {
                        Data.map((item, index) => {
                            return (
                                <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index} >
                                    <Box sx={{
                                        width: "100%", boxShadow: "0px 4px 30px 0px #0000001A",
                                        borderRadius: "15px",
                                        backgroundColor: "white",
                                        padding: "10px"
                                    }}>
                                        <Box sx={{ position: "relative", width: "100%" }}>
                                            <img src={item.Image} style={{ width: "100%", height: "285px", objectFit: "cover", borderRadius: "8px" }} />
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: "12px",
                                                    left: "12px",
                                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                                    color: "#FF0000",
                                                    padding: "6px 10px",
                                                    borderRadius: "6px",
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "14px",
                                                    zIndex: 1,
                                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                                                }}
                                            >
                                                Sold Out
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <img src="/image/Bed.png" />
                                                <Typography sx={{
                                                    fontFamily: "Outfit",
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
                                                    fontFamily: "Outfit",
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
                                                    fontFamily: "Outfit",
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
                                                fontFamily: "Outfit",
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
                                                    fontFamily: "Outfit",
                                                    fontWeight: 500,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                    lineHeight: "100%",
                                                }}>

                                                {item.Price}
                                                <Typography
                                                    style={{
                                                        fontFamily: "Outfit",
                                                        fontWeight: 400,
                                                        fontSize: "16px",
                                                        color: "#676767",
                                                        lineHeight: "100%",
                                                        marginTop: "15px"
                                                    }}>

                                                    Ahmedabad
                                                </Typography>
                                            </Typography>
                                          
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Box>


        </>
    )
}

export default SoldOut;