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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";






const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = () => {
        navigate(`/Login`)
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
                                    Sign Up
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#676767",
                                        marginTop: "5px"
                                    }}
                                >
                                    Welcome! Please enter your details
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
                                            Full Name
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter your full name"
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
                                            Phone No. (Optional)
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter your phone no."
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

                            <Box sx={{ padding: "0px 30px", mt: "15px" }}>
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
                                            Password
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
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
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label={
                                                                showPassword ? "Hide password" : "Show password"
                                                            }
                                                            onClick={() =>
                                                                setShowPassword((prev) => !prev)
                                                            }
                                                            onMouseDown={(e) => e.preventDefault()}
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{ padding: "0px 30px", mt: "15px" }}>
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
                                            Confirm Password
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your confirm password"
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
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label={
                                                                showPassword ? "Hide password" : "Show password"
                                                            }
                                                            onClick={() =>
                                                                setShowPassword((prev) => !prev)
                                                            }
                                                            onMouseDown={(e) => e.preventDefault()}
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
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
                                >
                                    Sign Up
                                </Button>
                            </Box>

                            <Box display="flex" justifyContent="center" paddingBottom={3}>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#676767",
                                    }}
                                >
                                    Don’t have an account?{" "}
                                    <strong
                                        style={{
                                            cursor: "pointer",
                                            color: "#2A6BE5",
                                            fontSize: "18px",
                                            fontWeight: 500,
                                        }}
                                        onClick={handleLogin}
                                    >
                                        Sign In
                                    </strong>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default SignUp;
