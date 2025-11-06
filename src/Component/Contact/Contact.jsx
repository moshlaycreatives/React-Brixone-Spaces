import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






const Contact = () => {
    return (
        <>
            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#0000004D, #0000004D), url('/image/Contact1.png')`,
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
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: "60px",
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                            textAlign: "center",
                        }}
                    >
                        Contact us
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#202020",
                            textAlign: "center",
                            backgroundColor: "#FFFFFF",
                            width: "160px",
                            height: "30px",
                            borderRadius: "26px",
                            paddingTop: "2px"

                        }}
                    >
                        Home / <span style={{ color: "#2A6BE5" }}>Contact Us</span>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ backgroundColor: "#202020", borderRadius: "15px", padding: "30px" }}>
                            <Box sx={{ display: "flex", gap: "15px" }}>
                                <Box mt={1}>
                                    <img src="/image/address.png"></img>
                                </Box>
                                <Box >
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                    }}>
                                        Address
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                    }}>
                                        lorem Ipsum Ahmadabad, India
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ backgroundColor: "#202020", borderRadius: "15px", padding: "30px" }}>
                            <Box sx={{ display: "flex", gap: "15px" }}>
                                <Box mt={1}>
                                    <img src="/image/phone.png"></img>
                                </Box>
                                <Box >
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                    }}>
                                        Phone
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                    }}>
                                        +91 (309) 2087119
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ backgroundColor: "#202020", borderRadius: "15px", padding: "30px" }}>
                            <Box sx={{ display: "flex", gap: "15px" }}>
                                <Box mt={1}>
                                    <img src="/image/mail.png"></img>
                                </Box>
                                <Box >
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 500,
                                        fontSize: "25px",
                                        color: "#FFFFFF",
                                    }}>
                                        Mail
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        color: "#FFFFFF",
                                    }}>
                                        info@brixonespaces.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, md: 5 }}
                        order={{ xs: 2, md: 1 }}
                    >
                        <Box>
                            <Box
                                component="img"
                                src="/image/Contact2.png"
                                sx={{
                                    width: "100%",
                                    height: { xs: "430px", md: "735px" },
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} order={{ xs: 1, md: 2 }}>
                        <Box>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: "40px",
                                color: "#202020",
                            }}>
                                Contact Us
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#676767",
                            }}>
                                Have questions about buying, selling, or renting property? Our team is here to guide you every step of the way get in touch today.
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Your Name*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter your name"
                                        // value={fullName}
                                        // onChange={(e) => setFullName(e.target.value)}
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
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Your Email*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter email"
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
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Phone No*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter your phone no."
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
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Looking To*
                                    </Typography>
                                    <FormControl fullWidth sx={{
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
                                    }}>
                                        <Select
                                            displayEmpty
                                        // value={paymentMethod}
                                        // onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                Select
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>


                            </Grid>
                        </Box>
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Property Type*
                                    </Typography>
                                    <FormControl fullWidth sx={{
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
                                    }}>
                                        <Select
                                            displayEmpty
                                        // value={paymentMethod}
                                        // onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <MenuItem >
                                                Select
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Afacad",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Choose Category*
                                    </Typography>
                                    <FormControl fullWidth sx={{
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
                                    }}>
                                        <Select
                                            displayEmpty
                                        // value={paymentMethod}
                                        // onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <MenuItem >
                                                Select
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>


                            </Grid>
                        </Box>
                        <Box mt={3}>
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
                                        Message*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter your message"
                                        // value={fullName}
                                        // onChange={(e) => setFullName(e.target.value)}
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
                                </Grid>

                            </Grid>
                        </Box>
                        <Box>
                            <Button sx={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#FFFFFF",
                                width: "99px",
                                height: "48px",
                                backgroundColor: "#2A6BE5",
                                textTransform: "none",
                                borderRadius: "6px",
                                marginTop: { xs: "10px", md: "30px" }

                            }}
                                variant="outlined"
                            >Submit</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default Contact;