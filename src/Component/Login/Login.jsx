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
import Checkbox from "@mui/material/Checkbox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { endpoints } from "../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";






const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSignup = () => {
        navigate(`/SignUp`)
    }

    const handleForgot = () => {
        navigate(`/ForgotPassword`)
    }


    const handleDashboard = () => {
        navigate(`/dashboard`)
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(endpoints.LoginApi, {
                email: email,
                password: password,
            });

            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };



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
                            <Box sx={{ padding: "30px 30px 10px 30px" }}>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "25px",
                                        color: "#202020",
                                    }}
                                >
                                    Sign In
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#676767",
                                        marginTop: "10px"
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
                                            Email
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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

                            <Box sx={{ padding: "10px 30px" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexFlow: "row",
                                        justifyContent: "space-between",
                                        width: "100%",
                                    }}
                                >
                                    <Box sx={{ display: "flex" }}>
                                        <Checkbox
                                            sx={{
                                                color: "#202020",
                                                '&.Mui-checked': {
                                                    color: "#202020",
                                                },
                                            }}
                                        />
                                        <Typography
                                            style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                color: "#676767",
                                                marginTop: "8px",
                                            }}
                                        >
                                            Remember me
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography
                                            style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                color: "#2A6BE5",
                                                marginTop: "8px",
                                                cursor: "pointer",
                                            }}
                                            onClick={handleForgot}
                                        >
                                            Forgot Password?
                                        </Typography>
                                    </Box>
                                </Box>
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
                                    onClick={handleLogin}
                                >

                                    Log In
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
                                        onClick={handleSignup}
                                    >
                                        Sign Up
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

export default Login;
