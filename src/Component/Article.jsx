import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { ArrowBack, ArrowForward } from '@mui/icons-material';



const Data = [
    {
        id: "1",
        Image: "/image/A1.png",
        Price: "500,000INR"
    },
    {
        id: "2",
        Image: "/image/A2.png",
        Price: "90,000INR / Per month"
    },
    {
        id: "3",
        Image: "/image/A3.png",
        Price: "500,000INR"
    },
    {
        id: "4",
        Image: "/image/A4.png",
        Price: "350,000INR / Per month"
    },
]



const Article = () => {
    return (
        <>

            <Box sx={{ px: {xs:"20px", md:"50px"}, backgroundColor: "#202020", py: "30px" }}>
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
                        Blog
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
                                    color: "#FFFFFF",
                                    lineHeight: "100%",

                                }}>
                                    News & Articles
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: "none", md: "block" } }}>
                            <Box
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

                                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', mt: "10px" }}>
                                            <Typography
                                                style={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 500,
                                                    fontSize: "18px",
                                                    color: "#FFFFFF",
                                                    lineHeight: "100%",
                                                }}>

                                                Mar 17, 2024
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: "10px" }}>
                                                <Typography
                                                    style={{
                                                        fontFamily: "Afacad",
                                                        fontWeight: 500,
                                                        fontSize: "18px",
                                                        color: "#FFFFFF",
                                                        lineHeight: "100%",
                                                    }}>

                                                    3 min read
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 600,
                                                fontSize: "25px",
                                                color: "#FFFFFF",
                                                marginTop: "8px"
                                            }}>
                                                Lorem ipsum dolor sit ame
                                                Duis aute irure dolor
                                            </Typography>
                                        </Box>


                                        <Box>
                                            <Button sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                color: "#FFFFFF",
                                                lineHeight: "100%",
                                                textTransform: "none",
                                                width: "126px",
                                                height: "48px",
                                                border: "1px solid #FFFFFF",
                                                marginTop: "15px"
                                            }}>
                                                Read More
                                            </Button>
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


export default Article;