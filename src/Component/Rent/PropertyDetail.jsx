import { Box, Typography, Button, Grid, Divider, TextField } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';


const PropertyDetail = () => {
    return (
        <>
            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#0000004D, #0000004D), url('/image/Buy1.png')`,
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
                        sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "30px", md: "60px" },
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                            textAlign: "center",
                        }}
                    >
                        Lorem Ipsum is simply dummy
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
                        Home / <span style={{ color: "#2A6BE5" }}>Rent</span>
                    </Typography>
                </Box>
            </Box>



            <Box sx={{ mt: { xs: "40px", md: "70px" }, padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            textTransform: "capitalize",
                            color: "#676767",
                            textAlign: { xs: "Center", md: "start" }

                        }}>
                            Listing Date: Aug, 19, 2025
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: "flex", gap: "15px", justifyContent: { xs: "center", md: "flex-end" } }}>
                            <Box>
                                <Button sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    color: "#202020",
                                    padding: "5px 20px",
                                    boxShadow: "0px 0px 8px 0px #0000001A",
                                    gap: "10px"
                                }}>
                                    <BookmarkBorderOutlinedIcon sx={{ fontSize: "22px" }} />
                                    Save
                                </Button>
                            </Box>
                            <Box>
                                <Button sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    color: "#2A6BE5",
                                    padding: "5px 20px",
                                    boxShadow: "0px 0px 8px 0px #0000001A",
                                    gap: "10px"
                                }}>
                                    <ShareIcon />
                                    Share
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "25px", md: "50px" },
                                textTransform: "capitalize",
                                color: "#202020",
                                marginTop: { xs: "15px", md: "-15px" }

                            }}>
                                Lorem Ipsum is simply dummy
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: { xs: "20px", md: "20px" },
                                textTransform: "capitalize",
                                color: "#676767",
                                marginTop: { xs: "10px", md: "0px" }


                            }}>
                                NH65, Patancheru Industrial Area, West Hyderabad, Hyderabad
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>

                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "10px" }}>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "40px", md: "40px" },
                                textTransform: "capitalize",
                                color: "#202020",


                            }}>
                                550,000<span style={{ fontSize: "30px" }}>INR</span>
                            </Typography></Box>

                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "25px" }}>
                            <Button sx={{
                                fontFamily: 'Afacad',
                                fontWeight: 400,
                                fontSize: "18px",
                                textTransform: 'none',
                                height: "45px",
                                width: "120px",
                                backgroundColor: '#2A6BE5',
                                color: '#FFFFFF',
                                borderRadius: '6px',

                            }}>
                                Book a Tour
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </Box>


            <Box sx={{ mt: "40px", padding: { xs: "0px 20px", md: "0px 75px" } }}>

                <Grid container >
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Box>
                            <img src="/image/Property1.png" style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={3}>
                    <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                        <Box>
                            <img src="/image/Property2.png" style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                        <Box>
                            <img src="/image/Property3.png" style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                        <Box>
                            <img src="/image/Property4.png" style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                        <Box>
                            <img src="/image/Property5.png" style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                </Grid>


            </Box>


            <Box sx={{ mt: "30px", px: { xs: "20px", md: "75px" } }}>
                <Grid container spacing={2}>
                    {[
                        { label: "About", bg: "#2A6BE5", color: "#FFFFFF", border: "none", xs: 4, sm: 4, md: 1 },
                        { label: "Available", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 4, sm: 4, md: 1 },
                        { label: "Overview", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 4, sm: 4, md: 1 },
                        { label: "Floor Plan", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 6, sm: 4, md: 1 },
                        { label: "Video", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 6, sm: 4, md: 1 },
                        { label: "Project Brochure", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 6, sm: 6, md: 2 },
                        { label: "Location and Nearby", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 6, sm: 6, md: 2 },
                    ].map((btn, index) => (
                        <Grid item key={index} size={{ xs: btn.xs, sm: btn.sm, md: btn.md }}>
                            <Button
                                fullWidth
                                sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    textTransform: "none",
                                    height: "45px",
                                    borderRadius: "6px",
                                    backgroundColor: btn.bg,
                                    color: btn.color,
                                    border: btn.border,
                                    "&:hover": {
                                        backgroundColor: btn.bg === "#2A6BE5" ? "#1E56C5" : "#F0F0F0",
                                    },
                                }}
                            >
                                {btn.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ mt: "30px", px: { xs: "20px", md: "75px" } }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "35px", md: "40px" },
                                textTransform: "capitalize",
                                color: "#202020",
                            }}>
                                About this property
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                textTransform: "capitalize",
                                color: "#676767",
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th.
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Divider />
                        </Box>

                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                textTransform: "capitalize",
                                color: "#2A6BE5",
                                textAlign: "center",
                                marginTop: "10px",
                                cursor: "pointer"
                            }}>
                                Read More
                            </Typography>
                        </Box>

                        <Box sx={{
                            width: { xs: "85%", md: "95%" },
                            mt: "50px",
                            border: "1px solid #676767",
                            borderRadius: "5px",
                            padding: "15px 25px"
                        }}>
                            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 500,
                                    fontSize: "25px",
                                    textTransform: "capitalize",
                                    color: "#202020",
                                }}>
                                    Available
                                </Typography>
                                <Box sx={{ display: 'flex', }}>

                                    <Typography sx={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "20px",
                                        textTransform: "capitalize",
                                        color: "#202020",
                                    }}>
                                        Within a week
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>


                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "35px", md: "40px" },
                                textTransform: "capitalize",
                                color: "#202020",
                                marginTop: "25px"
                            }}>
                                Property Overview
                            </Typography>
                        </Box>


                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "35px", md: "40px" },
                                textTransform: "capitalize",
                                color: "#202020",
                                marginTop: "25px"
                            }}>
                                Floor Plan
                            </Typography>
                            <Box mt={2}>
                                <Grid container spacing={2}>
                                    {[
                                        { label: "Ground Floor", bg: "transparent", color: "#2A6BE5", border: "1px solid #2A6BE5", xs: 6, sm: 4, md: 2 },
                                        { label: "First Floor", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 6, sm: 4, md: 1.5 },
                                        { label: "Second Floor", bg: "transparent", color: "#676767", border: "1px solid #676767", xs: 6, sm: 4, md: 2 },

                                    ].map((btn, index) => (
                                        <Grid item key={index} size={{ xs: btn.xs, sm: btn.sm, md: btn.md }}>
                                            <Button
                                                fullWidth
                                                sx={{
                                                    fontFamily: "Afacad",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    textTransform: "none",
                                                    height: "45px",
                                                    borderRadius: "6px",
                                                    backgroundColor: btn.bg,
                                                    color: btn.color,
                                                    border: btn.border,
                                                    // "&:hover": {
                                                    //     backgroundColor: btn.bg === "#2A6BE5" ? "#1E56C5" : "#F0F0F0",
                                                    // },
                                                }}
                                            >
                                                {btn.label}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            <Box>
                                <Grid container spacing={4} mt={3}>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <Box sx={{ border: "1px solid #202020", borderRadius: "15px", display: "flex", justifyContent: "center", padding: "20px 0px" }}>
                                            <img src="/image/Pfloorimage.png" style={{}} />
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Box>
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 600,
                                                fontSize: "30px",
                                                textTransform: "capitalize",
                                                color: "#202020",
                                                marginTop: "30px"
                                            }}>
                                                Ground Floor
                                            </Typography>
                                            <Typography sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#676767",
                                                marginTop: "10px"
                                            }}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>




                        </Box>


                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "35px", md: "40px" },
                                textTransform: "capitalize",
                                color: "#202020",
                                marginTop: "35px"
                            }}>
                                Video
                            </Typography>

                            <Grid container mt={2}>
                                <Grid size={{ xs: 12 }}>
                                    <Box>
                                        <img src="/image/videoimage.png" style={{ width: "100%" }}></img>
                                    </Box>
                                </Grid>


                            </Grid>
                        </Box>

                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "35px", md: "40px" },
                                textTransform: "capitalize",
                                color: "#202020",
                                marginTop: "35px"
                            }}>
                                Project Brochure
                            </Typography>

                            <Grid container mt={2}>
                                <Grid size={{ xs: 12 }}>
                                    <Box>
                                        <img src="/image/pdfimage.png" style={{ width: "100%" }}></img>
                                    </Box>
                                </Grid>


                            </Grid>
                        </Box>




                    </Grid >

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{
                            backgroundColor: "#2A6BE5",
                            borderRadius: "15px",
                            padding: "20px 35px",
                            mt: "40px"

                        }}>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: { xs: "15px", md: "30px" },
                                textTransform: "capitalize",
                                color: "#FFFFFF",
                            }}>
                                Have any Question?
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "20px",
                                textTransform: "capitalize",
                                color: "#FFFFFF",
                                marginTop: "10px"
                            }}>
                                +91 (309) 2087119
                            </Typography>
                        </Box>



                        <Box sx={{
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            marginTop: "20px",
                            padding: "20px"
                        }}>

                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: { xs: "30px", md: "30px" },
                                color: "#202020",
                                mb: "10px"
                            }}>
                                Book a Tour
                            </Typography>
                            <Box>
                                <Divider />
                            </Box>

                            <Grid container spacing={2} mt={3}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Full Name"
                                        // value={vehicleModel}
                                        // onChange={(e) => setVehicleModel(e.target.value)}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",

                                                "& fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&:hover fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    border: "2px solid #F4F4F4",
                                                },
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Email"
                                        // value={vehicleModel}
                                        // onChange={(e) => setVehicleModel(e.target.value)}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",

                                                "& fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&:hover fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    border: "2px solid #F4F4F4",
                                                },
                                            },
                                        }}
                                    />
                                </Grid>


                            </Grid>
                            <Grid container spacing={2} mt={3}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Phone No."
                                        // value={vehicleModel}
                                        // onChange={(e) => setVehicleModel(e.target.value)}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",

                                                "& fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&:hover fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    border: "2px solid #F4F4F4",
                                                },
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <TextField
                                        fullWidth
                                        placeholder="Select Date"
                                        type="date"
                                        // value={vehicleModel}
                                        // onChange={(e) => setVehicleModel(e.target.value)}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",

                                                "& fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&:hover fieldset": {
                                                    border: "1px solid #F4F4F4",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    border: "2px solid #F4F4F4",
                                                },
                                            },
                                        }}
                                    />
                                </Grid>


                            </Grid>
                            <Grid container spacing={2} mt={3}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Button style={{
                                        backgroundColor: "#4079ED",
                                        color: "#FFFFFF",
                                        fontSize: "16px",
                                        lineHeight: "16px",
                                        fontWeight: 400,
                                        textTransform: "none",
                                        width: "100%",
                                        height: "50px",
                                        margin: "0px 0px 10px 0px",
                                        borderRadius: "10px"
                                    }}
                                        variant="outlined"
                                       
                                    >Book Now</Button>
                                </Grid>



                            </Grid>



                        </Box>









                    </Grid>
                </Grid >


            </Box >

        </>
    )
}


export default PropertyDetail;