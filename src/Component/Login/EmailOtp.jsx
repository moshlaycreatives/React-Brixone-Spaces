import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Box,
    Typography,
    Grid,
    Button,
    TextField,
} from "@mui/material";
import { endpoints } from "../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";




const EmailOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const inputRefs = useRef([]);


    const handleOtpChange = (e, index) => {
        const value = e.target.value;

        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };



    const handlePassword = () => {
        navigate(`/NewPassword`, { state: { email } })
    }



    const handleOTPVerify = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(endpoints.OtPVerify, {
                email: email,
                otp: otp.join(""),
            });

            if (response.status === 200) {
                toast.success(response.data.message);
            }
            handlePassword();
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
                            <Box sx={{ padding: "30px 30px 15px 30px" }}>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "25px",
                                        color: "#202020",
                                    }}
                                >
                                    OTP Verification
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#676767",
                                    }}
                                >
                                    Please enter the 6 digit code sent to abc@gmail.com
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
                                            OTP Code
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
                                            {otp.map((value, index) => (
                                                <TextField
                                                    key={index}
                                                    inputRef={(el) => (inputRefs.current[index] = el)}
                                                    value={value}
                                                    onChange={(e) => handleOtpChange(e, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                    inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "20px" } }}
                                                    sx={{
                                                        width: "60px",
                                                        height: "55px",
                                                        gap: "20px",

                                                        "& .MuiOutlinedInput-root": {
                                                            borderRadius: "6px",
                                                            backgroundColor: "#FFFFFF",
                                                            "& fieldset": {
                                                                border: "1px solid #676767",
                                                            },
                                                            "&:hover fieldset": {
                                                                border: "1px solid #676767",
                                                            },
                                                            "&.Mui-focused fieldset": {
                                                                border: "2px solid #676767",
                                                            },
                                                        },
                                                    }}
                                                    variant="outlined"
                                                />
                                            ))}
                                        </Box>
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
                                    onClick={handleOTPVerify}
                                >
                                    Verify Code
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default EmailOtp;
