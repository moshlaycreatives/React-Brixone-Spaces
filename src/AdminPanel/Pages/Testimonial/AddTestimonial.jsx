import { useState } from "react";
import { Box, Typography, Button, Grid, Divider, TextField, CircularProgress } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { endpoints } from "../../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



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
    const navigate = useNavigate();
    const [userImagePreview, setUserImagePreview] = useState(null);
    const [propertyImagePreview, setPropertyImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setformData] = useState({
        userImage: null,
        fullName: "",
        designation: "",
        propertyImage: null,
        clientFeedback: ""
    });



    const handleNavigate = () => {
        navigate(`/dashboard/testimonial`)
    }

    const handleUserImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setUserImagePreview(URL.createObjectURL(file));
            setformData((prev) => ({
                ...prev,
                userImage: file
            }));
        }
    };

    const handlePropertyImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setPropertyImagePreview(URL.createObjectURL(file));
            setformData((prev) => ({
                ...prev,
                propertyImage: file
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    };



    const CreateTestimonial = async () => {
        if (loading) {
            return;
        }

        try {
            if (!formData.userImage) {
                toast.error("Please upload user image");
                return;
            }
            if (!formData.fullName.trim()) {
                toast.error("Please enter full name");
                return;
            }
            if (!formData.propertyImage) {
                toast.error("Please upload property image");
                return;
            }

            setLoading(true);
            const token = localStorage.getItem('token');

            // Create FormData for file upload
            const submitData = new FormData();
            submitData.append('userImage', formData.userImage);
            submitData.append('fullName', formData.fullName);
            submitData.append('designation', formData.designation);
            submitData.append('propertyImage', formData.propertyImage);
            submitData.append('clientFeedback', formData.clientFeedback);

            const response = await axios.post(`${endpoints.TestimonialsApi}`, submitData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success(response.data.message || "Testimonial added successfully");
            handleNavigate();
            setformData({
                userImage: null,
                fullName: "",
                designation: "",
                propertyImage: null,
                clientFeedback: ""
            });
            setUserImagePreview(null);
            setPropertyImagePreview(null);
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };


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
                                            height: "250px",
                                            width: "100%",
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
                                            overflow: 'hidden',
                                        }}
                                        component="label"
                                        htmlFor="user-image-upload"
                                    >
                                        {userImagePreview ? (
                                            <img
                                                src={userImagePreview}
                                                alt="User"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                                <Typography>Upload Image</Typography>
                                            </>
                                        )}
                                        <VisuallyHiddenInput id="user-image-upload" type="file" accept="image/*" onChange={handleUserImageChange} />
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>

                        <Box mt={2} sx={{ padding: "0px 20px 10px 20px" }}>
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
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
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
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleInputChange}
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
                                            height: "250px",
                                            width: "100%",
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
                                            overflow: 'hidden',
                                        }}
                                        component="label"
                                        htmlFor="property-image-upload"
                                    >
                                        {propertyImagePreview ? (
                                            <img
                                                src={propertyImagePreview}
                                                alt="Property"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                                <Typography>Upload Image</Typography>
                                            </>
                                        )}
                                        <VisuallyHiddenInput id="property-image-upload" type="file" accept="image/*" onChange={handlePropertyImageChange} />
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
                                        name="clientFeedback"
                                        value={formData.clientFeedback}
                                        onChange={handleInputChange}
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
                                        onClick={CreateTestimonial}
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