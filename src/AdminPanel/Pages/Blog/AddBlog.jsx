


import { useState } from "react";
import { Box, Typography, Grid, TextField, } from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditBlogs from "./EditBlogs";










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


const AddBlog = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <>


            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }} mb={4}>
                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#05453A"
                    }}>
                    Dashboard/Blogs<span style={{ color: "#4079ED" }}>/Add Blog</span>
                </Typography>
            </Box >




            <Box sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 20px 0px #EEEEEE80",
                padding: "20px",
                borderRadius: "15px"
            }}>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Box
                            sx={{
                                height: "400px",
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
                <Box mt={3}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "31px",
                                color: "#222222",
                                margin: "0px 0px 10px 0px"
                            }}>
                                Blog Title*
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter blog title"
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
                                color: "#222222",
                                margin: "0px 0px 10px 0px"
                            }}>
                                Author Name*
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter author name"
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
                                color: "#222222",
                                margin: "0px 0px 10px 0px"
                            }}>
                                Read Time*
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter read time"
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



                <Box mt={3}>
                    <EditBlogs />
                </Box>

            </Box>


        </>
    )
}


export default AddBlog;