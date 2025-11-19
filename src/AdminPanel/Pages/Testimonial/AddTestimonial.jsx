import { useState } from "react";
import { Box, Typography, Button, Grid, Divider, TextField } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';





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




const AddTestimonial = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography
                    sx={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        fontSize: {xs:"18px", md:"36px"},
                        color: "#202020",
                    }}>
                    Dashboard / Testimonial /<span style={{ color: "#4079ED" }}> Add New Testimonial</span>
                </Typography>
            </Box >


            <Grid container spacing={2}>

                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
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
                                Add Testimonial Details
                            </Typography>
                        </Box>

                        <Box>
                            <Divider />
                        </Box>

                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "31px",
                            color: "#222222",
                            padding: "20px",
                        }}>
                            User Image*
                        </Typography>

                        <Box sx={{ padding: "0px 20px 0px 20px", }}>
                            <Grid container>
                                <Grid size={{ xs: 12, md: 7 }}>
                                    <Box
                                        sx={{
                                            height: "200px",
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
                            </Grid>

                        </Box>

                        <Box mt={2} sx={{ padding:  "0px 20px 10px 20px" }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Full Name*
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter full name"
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
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Designation
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter designation"
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



                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "31px",
                            color: "#222222",
                            padding: "0px 20px 20px 20px",
                        }}>
                            Property Image*
                        </Typography>

                        <Box sx={{ padding: "0px 20px 0px 20px", }}>
                            <Grid container>
                                <Grid size={{ xs: 12, md: 12 }}>

                                    <Box
                                        sx={{
                                            height: "200px",
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
                            </Grid>

                        </Box>

                        <Box mt={2} sx={{ padding: "0px 20px 0px 20px" }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "31px",
                                        color: "#202020",
                                        margin: "0px 0px 10px 0px"
                                    }}>
                                        Client Feedback
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Enter client feedback"
                                        multiline
                                        rows={4}
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

                        <Box sx={{ padding: "20px" }}>
                            <Grid container >
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Button style={{
                                        backgroundColor: "#4079ED",
                                        color: "#FFFFFF",
                                        fontSize: "16px",
                                        lineHeight: "16px",
                                        fontWeight: 400,
                                        textTransform: "none",
                                        width: "100%",
                                        height: "50px",
                                        margin: "0px 0px 0px 0px",
                                        borderRadius: "10px"
                                    }}
                                        variant="outlined"

                                    >Add Testimonial</Button>
                                </Grid>
                            </Grid>
                        </Box>



                    </Box>


                </Grid>
            </Grid>

        </>
    )
}


export default AddTestimonial;