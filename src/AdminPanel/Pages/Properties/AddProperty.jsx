import { useState } from "react";
import { Box, Typography, Button, Grid, Divider, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from "@mui/material/Checkbox";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});




const AddProperty = () => {
    const [image, setImage] = useState(null);
    const [LocalData, setLocalData] = useState({});

    const handleInputChange = (event, label) => {
        const { checked } = event.target;
        setLocalData(prevData => ({
            ...(prevData || {}),
            [label]: checked,
        }));
    };

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };


    const labels = [
        'Garage', 'Dining Room', 'Drawing Room', 'Electricity', 'Water Supply', 'Sewerage', 'Garden', 'TV lounge', 'Gas', 'Security', 'File', 'Boundary Wall', 'Park', 'Masjid', 'Store Room', 'Laundry Room', 'Powder Room', 'Terrace',
        'Terrace', 'Servant Quarter', 'Solar System', 'Balcony', 'Basement', 'Swimming Pool', 'Elevator', 'CCTV Cameras',
    ];

    const checkboxes = labels.map((label, index) => ({
        id: `checkbox-${index + 1}`,
        label: label
    }));


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

                {/* Property Field */}

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


                {/* Property CheckBox */}

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
                <Box sx={{ padding: "10px 20px 0px 20px" }}>
                    <Grid container>
                        {checkboxes.map((checkbox) => (
                            <Grid item size={{ xs: 4, sm: 4, md: 2 }} key={checkbox.id}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={LocalData[checkbox.label] || false}
                                            onChange={(e) => handleInputChange(e, checkbox.label)}
                                            name={checkbox.id}
                                        />
                                    }
                                    label={checkbox.label}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                {/* Property Floor */}

                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222",
                        padding: "30px 20px 10px 20px",
                    }}>
                        Floor Plans
                    </Typography>
                </Box>
                <Box>
                    <Divider />
                </Box>

                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Box mt={2}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "31px",
                                    color: "#202020",
                                    margin: "0px 0px 10px 0px"
                                }}>
                                    Floors*
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
                                            Select floors
                                        </MenuItem>
                                    </Select>
                                </FormControl>
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
                                            If the property has a basement, please check this option.
                                        </Typography>
                                    </Box>
                                </Box>

                            </Grid>



                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "20px 0px 10px 0px"
                                    }}>
                                        Ground Floor Plan*
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "250px",
                                            backgroundColor: "#F4F4F4",
                                            border: '2px dashed grey',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            minHeight: '200px',
                                        }}
                                        component="label"
                                        htmlFor="file-upload"
                                    >
                                        {image ? (
                                            <img
                                                src={image}
                                                alt="Category"
                                                style={{
                                                    maxWidth: '100%',
                                                    borderRadius: "15px",
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                                <Typography>Upload Image</Typography>
                                            </>
                                        )}
                                        <VisuallyHiddenInput id="file-upload" type="file" onChange={handleImageChange} />
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "90px 0px 10px 0px"
                                    }}>
                                        Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={5}
                                        placeholder="Enter description"
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
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "20px 0px 10px 0px"
                                    }}>
                                        Firts Floor Plan*
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "250px",
                                            backgroundColor: "#F4F4F4",
                                            border: '2px dashed grey',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            minHeight: '200px',
                                        }}
                                        component="label"
                                        htmlFor="file-upload"
                                    >
                                        {image ? (
                                            <img
                                                src={image}
                                                alt="Category"
                                                style={{
                                                    maxWidth: '100%',
                                                    borderRadius: "15px",
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                                <Typography>Upload Image</Typography>
                                            </>
                                        )}
                                        <VisuallyHiddenInput id="file-upload" type="file" onChange={handleImageChange} />
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "90px 0px 10px 0px"
                                    }}>
                                        Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={5}
                                        placeholder="Enter description"
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

                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "20px 0px 10px 0px"
                                    }}>
                                        Second Floor Plan*
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "250px",
                                            backgroundColor: "#F4F4F4",
                                            border: '2px dashed grey',
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            minHeight: '200px',
                                        }}
                                        component="label"
                                        htmlFor="file-upload"
                                    >
                                        {image ? (
                                            <img
                                                src={image}
                                                alt="Category"
                                                style={{
                                                    maxWidth: '100%',
                                                    borderRadius: "15px",
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                                <Typography>Upload Image</Typography>
                                            </>
                                        )}
                                        <VisuallyHiddenInput id="file-upload" type="file" onChange={handleImageChange} />
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "90px 0px 10px 0px"
                                    }}>
                                        Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={5}
                                        placeholder="Enter description"
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
                        </Grid>

                    </Grid>
                </Box>



                {/* Property Video */}

                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222",
                        padding: "30px 20px 10px 20px",
                    }}>
                        Property Video
                    </Typography>
                </Box>
                <Box>
                    <Divider />
                </Box>

                <Box sx={{ padding: "20px 20px 0px 20px" }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Box
                                sx={{
                                    height: "250px",
                                    backgroundColor: "#F4F4F4",
                                    border: '2px dashed grey',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    minHeight: '200px',
                                }}
                                component="label"
                                htmlFor="file-upload"
                            >
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Category"
                                        style={{
                                            maxWidth: '100%',
                                            borderRadius: "15px",
                                            objectFit: 'cover',
                                        }}
                                    />
                                ) : (
                                    <>
                                        <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                        <Typography>Upload Video</Typography>
                                    </>
                                )}
                                <VisuallyHiddenInput id="file-upload" type="file" onChange={handleImageChange} />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

                {/* Project Brochure */}

                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222",
                        padding: "30px 20px 10px 20px",
                    }}>
                        Project Brochure
                    </Typography>
                </Box>
                <Box>
                    <Divider />
                </Box>

                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#202020",
                                margin: "20px 0px 10px 0px"
                            }}>
                                Project Brochure
                            </Typography>
                            <Box
                                sx={{
                                    height: "250px",
                                    backgroundColor: "#F4F4F4",
                                    border: '2px dashed grey',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    minHeight: '200px',
                                }}
                                component="label"
                                htmlFor="file-upload"
                            >
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Category"
                                        style={{
                                            maxWidth: '100%',
                                            borderRadius: "15px",
                                            objectFit: 'cover',
                                        }}
                                    />
                                ) : (
                                    <>
                                        <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                        <Typography>Upload Brochure</Typography>
                                    </>
                                )}
                                <VisuallyHiddenInput id="file-upload" type="file" onChange={handleImageChange} />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>


                {/* Property Image */}

                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222",
                        padding: "30px 20px 10px 20px",
                    }}>
                        Property Images
                    </Typography>
                </Box>
                <Box>
                    <Divider />
                </Box>

                <Box sx={{ padding: "20px 20px 0px 20px" }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Box
                                sx={{
                                    height: "250px",
                                    backgroundColor: "#F4F4F4",
                                    border: '2px dashed grey',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    minHeight: '200px',
                                }}
                                component="label"
                                htmlFor="file-upload"
                            >
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Category"
                                        style={{
                                            maxWidth: '100%',
                                            borderRadius: "15px",
                                            objectFit: 'cover',
                                        }}
                                    />
                                ) : (
                                    <>
                                        <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                        <Typography>Upload Images</Typography>
                                    </>
                                )}
                                <VisuallyHiddenInput id="file-upload" type="file" onChange={handleImageChange} />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

                <Box sx={{ padding: "0px 20px 0px 20px" }}>
                    <Grid container spacing={2} mt={3}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Button style={{
                                backgroundColor: "#4079ED",
                                color: "#FFFFFF",
                                fontSize: "16px",
                                lineHeight: "16px",
                                fontWeight: 400,
                                textTransform: "none",
                                width: "100%",
                                height: "50px",
                                margin: "0px 0px 10px 0px",
                                borderRadius: "10px"
                            }}
                                variant="outlined"

                            >Add Property</Button>
                        </Grid>
                    </Grid>
                </Box>


            </Box>


        </>
    )
}

export default AddProperty;