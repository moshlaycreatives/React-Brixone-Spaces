import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';







const Sell = () => {
    return (
        <>
            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#00000033, #00000033), url('/image/Sell1.png')`,
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
                        Sell
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#202020",
                            textAlign: "center",
                            backgroundColor: "#FFFFFF",
                            width: "120px",
                            height: "30px",
                            borderRadius: "26px",
                            paddingTop: "2px"

                        }}
                    >
                        Home / <span style={{ color: "#2A6BE5" }}>Sell</span>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Typography style={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    color: "#676767",

                }}>
                    Sell
                </Typography>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 600,
                    fontSize: { xs: "25px", md: "50px" },
                    textTransform: "capitalize",
                    color: "#202020",
                  

                }}>
                    Elevate your selling experience with Brixone Spaces - where expertise meets dedication, ensuring your property reaches its fullest potential in the market.
                </Typography>
                <Typography style={{
                    fontFamily: "Afacad",
                    fontWeight: 600,
                    fontSize: "40px",
                    textTransform: "capitalize",
                    color: "#202020",
                    marginTop: "30px"

                }}>
                    Sell
                </Typography>


                <Box>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#676767",


                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions  Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </Typography>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#676767",
                        marginTop: "10px"


                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions  Lorem Ipsum
                    </Typography>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#676767",
                        marginTop: "5px"


                    }}>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                    </Typography>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#676767",
                        marginTop: "10px"
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#676767",
                        marginTop: "10px"
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Box>


            </Box>


            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, md: 5 }}
                        order={{ xs: 2, md: 1 }}
                    >
                        <Box>
                            <Box
                                component="img"
                                src="/image/Sell2.png"
                                sx={{
                                    width: "100%",
                                    height: { xs: "430px", md: "635px" },
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} order={{ xs: 1, md: 2 }}>
                        <Box>
                            <Typography sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: { xs: "20px", md: "40px" },
                                color: "#202020",
                            }}>
                                We would be delighted to serve you at
                                Brixone Spaces.
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


export default Sell;