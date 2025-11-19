import { Box, Typography, Button, Grid, Divider, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






const AddProperty = () => {
    return (
        <>

            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography
                    sx={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        fontSize: { xs: "18px", md: "36px" },
                        color: "#202020",
                    }}>
                    Dashboard / For Sale /<span style={{ color: "#4079ED" }}> Add New Property</span>
                </Typography>
            </Box >

            <Box sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 20px 0px #EEEEEE80",
                borderRadius: "15px",
                mt: "20px",
                mb: "20px"
            }}>
                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222",
                        padding: "20px",
                    }}>
                        Add Property Details
                    </Typography>
                </Box>
                <Box>
                    <Divider />
                </Box>

                {/* 
Property Field */}

                <Box mt={2} sx={{ padding: "0px 20px 0px 20px" }}>
                    <Box mt={2}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Property Name*
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter property name"
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
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Price*
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter price"
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
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Bedrooms*
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
                                            Select bedrooms
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>


                        </Grid>
                    </Box>
                </Box>

                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Box mt={2}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Bathrooms*
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
                                            Select bathrooms
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Area (sqft)*
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter area (sqft)"
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
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Available*
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
                                            Select availability
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>


                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Box mt={2}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Kitchens*
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
                                            Select kitchens
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Store Rooms*
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
                                            Select store rooms
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Location*
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter Location"
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
                    </Box>
                </Box>
                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Box mt={2}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Furnishing Status*
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
                                            Select Status
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Lease Type*
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
                                            Select lease type
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>



                        </Grid>
                    </Box>
                </Box>




                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222",
                        padding: "30px 20px 10px 20px",
                    }}>
                        Property Overview
                    </Typography>
                </Box>
                <Box>
                    <Divider />
                </Box>




            </Box>


        </>
    )
}

export default AddProperty;