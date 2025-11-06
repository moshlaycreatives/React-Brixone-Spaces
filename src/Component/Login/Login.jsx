import { Box, Typography, Grid, Button, TextField } from "@mui/material";




const Login = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: "url(/image/Loginimage.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                position: "relative",

            }}>


                <Grid container spacing={2} sx={{ padding: { xs: "0px 20px", md: "0px 150px" } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{display:{xs:"none", md:"block"}}}>
                            <img src="/image/LoginLogo.png" style={{ width: "321px", height: "115px" }} />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "15px",
                            backgroundColor: "white",

                        }}>

                            <Box sx={{ padding: "30px" }}>
                                <Typography style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: "25px",
                                    color: "#202020",
                                }}>
                                    Sign In
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    color: "#676767",
                                }}>
                                    Welcome! Please enter your details
                                </Typography>
                            </Box>




                            <Box sx={{ padding: "0px 30px" }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 12 }}>
                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "18px",
                                            lineHeight: "31px",
                                            color: "#202020",
                                            margin: "0px 0px 10px 0px"
                                        }}>
                                            Email
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
                                    </Grid>


                                </Grid>
                            </Box>
                            <Box sx={{ padding: "0px 30px", mt: "15px" }}>
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, md: 12 }}>
                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "18px",
                                            lineHeight: "31px",
                                            color: "#202020",
                                            margin: "0px 0px 10px 0px"
                                        }}>
                                            Password
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter your password"
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
                                    </Grid>


                                </Grid>
                            </Box>



                            <Box sx={{ padding: "30px" }}>
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
                                >Log In</Button>
                            </Box>



                        </Box>
                    </Grid>

                </Grid>




            </Box>
        </>
    )
}


export default Login;


