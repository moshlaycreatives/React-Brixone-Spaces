import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { endpoints } from "../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";





const NewPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleLogin = () => {
        navigate(`/Login`)
    }

    const handlePassword = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Email is required. Please go back to the forgot password page.");
            return;
        }

        if (!password || !confirmPassword) {
            toast.error("Please fill both password fields");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(endpoints.AddNewPassword, {
                email: email,
                newPassword: password,
            });

            if (response.status === 200) {
                toast.success(response.data.message || "Password reset successfully");
                handleLogin();
            }
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
                            <form onSubmit={handlePassword}>
                                <Box sx={{ padding: "30px 30px 15px 30px" }}>
                                    <Typography
                                        style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: "25px",
                                            color: "#202020",
                                        }}
                                    >
                                        Create New Password
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
                                        Your new password must be different from previously used password.
                                    </Typography>
                                </Box>

                                <Box sx={{ padding: "0px 30px", mt: "5px" }}>
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
                                            New Password
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter new password..."
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
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Re-type new password..."
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                                                                showConfirmPassword ? "Hide password" : "Show password"
                                                            }
                                                            onClick={() =>
                                                                setShowConfirmPassword((prev) => !prev)
                                                            }
                                                            onMouseDown={(e) => e.preventDefault()}
                                                            edge="end"
                                                        >
                                                            {showConfirmPassword ? (
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
                                        type="submit"
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
                                        Save New Password
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default NewPassword;
