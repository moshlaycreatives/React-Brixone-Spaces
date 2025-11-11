import { Box, Typography, Grid, TextField, Button } from "@mui/material";





const Data = [
    {
        id: "1",
        Name: "Tim David",
        Date: "- Dec 4, 2024",
        Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget est diam. Sed non sapien mi. Integer ipsum metus, elementum eu consequat quis, gravida sed tortor. Etiam ac purus scelerisque sem lobortis malesuada ut id ex. Nulla facilisi. "
    },
    {
        id: "2",
        Name: "Tim David",
        Date: "- Dec 4, 2024",
        Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget est diam. Sed non sapien mi. Integer ipsum metus, elementum eu consequat quis, gravida sed tortor. Etiam ac purus scelerisque sem lobortis malesuada ut id ex. Nulla facilisi. "
    },


]



const AddReview = () => {
    return (
        <>
            <Box>

                <Typography style={{
                    fontFamily: "Afacad",
                    fontWeight: 600,
                    fontSize: "40px",
                    color: "#202020",

                }}>
                    About The Author
                </Typography>
            </Box>



            {Data.map((item) => {
                return (
                    <Box sx={{ display: "flex" }} key={item.id} mt={3}>
                        <Box>
                            <img src="/image/ReviewImage.png" />
                        </Box>
                        <Box sx={{
                            margin: "3px 0px 0px 20px"
                        }}>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "25px",
                                lineHeight: "100%",
                                color: "#222222"
                            }}>
                                {item.Name} <span style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 500,
                                    fontSize: "20px",
                                    lineHeight: "100%",
                                    color: "#6D6E71"
                                }}> {item.Date}
                                </span>
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "25px",
                                color: "#6D6E71",
                                margin: "5px 0px 0px 0px"
                            }}>
                                {item.Title}
                            </Typography>
                        </Box>
                    </Box>
                )
            })
            }



            <Box mt={5}>
                <Box>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 500,
                        fontSize: "35px",
                        lineHeight: "100%",
                        color: "#222222"
                    }}>
                        Add a Comment
                    </Typography>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#6D6E71",
                        margin: "13px 0px 0px 0px"
                    }}>
                        Your email address will not be published. Required fields are marked *
                    </Typography>
                </Box>
                <Box mt={4}>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        color: "#222222"
                    }}>
                        Your rating*
                    </Typography>
                </Box>



                <Box>
                    <Grid container spacing={4} >
                        <Grid item size={{ xs: 12, md: 5 }} >
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "25px 0px 10px 3px"

                            }}>
                                Your Name*
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your first name...."
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
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

                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "10px 0px 10px 3px"

                            }}>
                                Your Email*
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
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
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#2B2B2B",
                                margin: "10px 0px 10px 3px"

                            }}>
                                Your Comment*
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your review"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                multiline
                                rows={4}
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





                            <Box>
                                <Button sx={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    color: "#FFFFFF",
                                    backgroundColor: "#2A6BE5",
                                    width: "100%",
                                    borderRadius: "6px",
                                    textTransform: "none",
                                    margin: "30px 0px 20px 0px"
                                }}>
                                    Submit
                                </Button>
                            </Box>





                        </Grid>
                    </Grid>
                </Box>





            </Box>




        </>
    )
}


export default AddReview; 