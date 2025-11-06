import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    Grid,
    Button,
    TextField,
    InputAdornment,
    IconButton,
} from "@mui/material";







const ForgotPassword = () => {
    const navigate = useNavigate();



    const handleEmailOtp = () => {
        navigate(`/EmailOtp`)
    }


    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url(/image/Loginimage.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "100vh",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        minHeight: "100vh",
                        alignItems: "center",
                        padding: { xs: "0px 15px", md: "0px 150px" },
                    }}
                >

                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src="/image/LoginLogo.png"
                                alt="Logo"
                                style={{ width: "321px", height: "115px" }}
                            />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                boxShadow: "0px 4px 30px 0px #0000001A",
                                borderRadius: "15px",
                                backgroundColor: "white",
                            }}
                        >
                            <Box sx={{ padding: "30px 30px 15px 30px" }}>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "25px",
                                        color: "#202020",
                                    }}
                                >
                                    Forgot Password
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#676767",
                                    }}
                                >
                                    Please enter your email address to receive a verification code.
                                </Typography>
                            </Box>

                            <Box sx={{ padding: "0px 30px" }}>
                                <Grid container spacing={2}>
                                    <Grid item size={{ xs: 12, md: 12 }}>
                                        <Typography
                                            style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 600,
                                                fontSize: "18px",
                                                lineHeight: "31px",
                                                color: "#202020",
                                                margin: "0px 0px 10px 0px",
                                            }}
                                        >
                                            Email
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter your email"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "10px",
                                                    "& fieldset": { border: "1px solid #F4F4F4" },
                                                    "&:hover fieldset": { border: "1px solid #F4F4F4" },
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
                                <Button
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                        width: "100%",
                                        height: "48px",
                                        backgroundColor: "#2A6BE5",
                                        textTransform: "none",
                                        borderRadius: "6px",
                                    }}
                                    variant="contained"
                                    onClick={handleEmailOtp}
                                >
                                    Send
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ForgotPassword;
