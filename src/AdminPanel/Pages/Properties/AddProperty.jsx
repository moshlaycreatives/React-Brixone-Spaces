import { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Divider, TextField, IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from "@mui/material/Checkbox";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
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
    // Separate states for each upload section
    const [groundFloorImage, setGroundFloorImage] = useState(null);
    const [firstFloorImage, setFirstFloorImage] = useState(null);
    const [secondFloorImage, setSecondFloorImage] = useState(null);
    const [propertyVideo, setPropertyVideo] = useState(null);
    const [projectBrochure, setProjectBrochure] = useState(null); // Store file object for PDF
    const [propertyImages, setPropertyImages] = useState([]); // Array for multiple images (up to 40)

    // Floor selection and descriptions
    const [selectedFloors, setSelectedFloors] = useState('');
    const [floorImages, setFloorImages] = useState({}); // Object to store images for each floor
    const [floorDescriptions, setFloorDescriptions] = useState({}); // Object to store descriptions for each floor

    // Basement state
    const [hasBasement, setHasBasement] = useState(false);
    const [basementImage, setBasementImage] = useState(null);
    const [basementDescription, setBasementDescription] = useState('');
    const [LocalData, setLocalData] = useState({});

    const handleInputChange = (event, label) => {
        const { checked } = event.target;
        setLocalData(prevData => ({
            ...(prevData || {}),
            [label]: checked,
        }));
    };

    // Handler for Ground Floor Plan
    const handleGroundFloorImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type.startsWith('image/')) {
                setGroundFloorImage(URL.createObjectURL(file));
            }
        }
    };

    // Handler for First Floor Plan
    const handleFirstFloorImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type.startsWith('image/')) {
                setFirstFloorImage(URL.createObjectURL(file));
            }
        }
    };

    // Handler for Second Floor Plan
    const handleSecondFloorImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type.startsWith('image/')) {
                setSecondFloorImage(URL.createObjectURL(file));
            }
        }
    };

    // Handler for dynamic floor image changes
    const handleFloorImageChange = (floorNumber, event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type.startsWith('image/')) {
                setFloorImages(prev => ({
                    ...prev,
                    [floorNumber]: URL.createObjectURL(file)
                }));
            }
        }
    };

    // Handler for basement image
    const handleBasementImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type.startsWith('image/')) {
                setBasementImage(URL.createObjectURL(file));
            }
        }
    };

    // Handler for floor description changes
    const handleFloorDescriptionChange = (floorNumber, value) => {
        setFloorDescriptions(prev => ({
            ...prev,
            [floorNumber]: value
        }));
    };

    // Check if a floor is completed (has both image and description)
    const isFloorCompleted = (floorNumber) => {
        const hasImage = floorImages[floorNumber] && floorImages[floorNumber] !== '';
        const hasDescription = floorDescriptions[floorNumber] && floorDescriptions[floorNumber].trim() !== '';
        return hasImage && hasDescription;
    };

    // Check if a floor is enabled (first floor always enabled, others only if previous is completed)
    const isFloorEnabled = (floorNumber) => {
        if (floorNumber === 0) {
            // First floor is always enabled
            return true;
        }
        // For other floors, check if previous floor is completed
        return isFloorCompleted(floorNumber - 1);
    };

    // Handler for floor selection
    const handleFloorSelection = (value) => {
        setSelectedFloors(value);
        // Clear images and descriptions for floors beyond selected count
        if (value) {
            const floorCount = parseInt(value);
            const newFloorImages = {};
            const newFloorDescriptions = {};
            for (let i = 0; i < floorCount; i++) {
                if (floorImages[i]) newFloorImages[i] = floorImages[i];
                if (floorDescriptions[i]) newFloorDescriptions[i] = floorDescriptions[i];
            }
            setFloorImages(newFloorImages);
            setFloorDescriptions(newFloorDescriptions);
        } else {
            setFloorImages({});
            setFloorDescriptions({});
        }
    };

    // Helper function to get floor name
    const getFloorName = (floorNumber) => {
        const floorNames = [
            'Ground Floor',
            'First Floor',
            'Second Floor',
            'Third Floor',
            'Fourth Floor',
            'Fifth Floor',
            'Sixth Floor',
            'Seventh Floor',
            'Eighth Floor',
            'Ninth Floor',
            'Tenth Floor',
            'Eleventh Floor',
            'Twelfth Floor',
            'Thirteenth Floor',
            'Fourteenth Floor',
            'Fifteenth Floor',
            'Sixteenth Floor',
            'Seventeenth Floor',
            'Eighteenth Floor',
            'Nineteenth Floor',
            'Twentieth Floor'
        ];
        return floorNames[floorNumber] || `Floor ${floorNumber + 1}`;
    };

    // Handler for Property Video
    const handleVideoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type.startsWith('video/')) {
                setPropertyVideo(URL.createObjectURL(file));
            }
        }
    };

    // Handler for Project Brochure (PDF only)
    const handleBrochureChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type === 'application/pdf') {
                setProjectBrochure(file);
            }
        }
    };

    // Handler for Property Images (multiple, up to 40)
    const handlePropertyImagesChange = (event) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            const imageFiles = files.filter(file => file.type.startsWith('image/'));

            // Limit to 40 images total
            const remainingSlots = 40 - propertyImages.length;
            const filesToAdd = imageFiles.slice(0, remainingSlots);

            const newImages = filesToAdd.map(file => ({
                id: Date.now() + Math.random(),
                file: file,
                preview: URL.createObjectURL(file)
            }));

            setPropertyImages(prev => [...prev, ...newImages]);
        }
    };

    // Remove a property image
    const removePropertyImage = (id) => {
        setPropertyImages(prev => {
            const imageToRemove = prev.find(img => img.id === id);
            if (imageToRemove) {
                URL.revokeObjectURL(imageToRemove.preview);
            }
            return prev.filter(img => img.id !== id);
        });
    };

    // Cleanup object URLs on unmount
    useEffect(() => {
        return () => {
            if (groundFloorImage) URL.revokeObjectURL(groundFloorImage);
            if (firstFloorImage) URL.revokeObjectURL(firstFloorImage);
            if (secondFloorImage) URL.revokeObjectURL(secondFloorImage);
            if (propertyVideo) URL.revokeObjectURL(propertyVideo);
            if (basementImage) URL.revokeObjectURL(basementImage);
            // projectBrochure is a file object, no need to revoke URL
            propertyImages.forEach(img => URL.revokeObjectURL(img.preview));
            // Cleanup floor images
            Object.values(floorImages).forEach(url => {
                if (url) URL.revokeObjectURL(url);
            });
        };
    }, [groundFloorImage, firstFloorImage, secondFloorImage, propertyVideo, basementImage, propertyImages, floorImages]);


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
                                    >
                                        <MenuItem >
                                            Select bedrooms
                                        </MenuItem>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, +10,].map((num) => (
                                            <MenuItem key={num} value={num}>
                                                {num} {num === 1 ? 'Bedroom' : 'Bedrooms'}
                                            </MenuItem>
                                        ))}
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
                                    >
                                        <MenuItem >
                                            Select bathrooms
                                        </MenuItem>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, +10,].map((num) => (
                                            <MenuItem key={num} value={num}>
                                                {num} {num === 1 ? 'Bathroom' : 'Bathrooms'}
                                            </MenuItem>
                                        ))}
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
                                    >
                                        <MenuItem >
                                            Select kitchens
                                        </MenuItem>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, +10,].map((num) => (
                                            <MenuItem key={num} value={num}>
                                                {num} {num === 1 ? 'Kitchen' : 'Kitchens'}
                                            </MenuItem>
                                        ))}
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

                                    >
                                        <MenuItem >
                                            Select store rooms
                                        </MenuItem>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, +10,].map((num) => (
                                            <MenuItem key={num} value={num}>
                                                {num} {num === 1 ? 'Store room' : 'Store rooms'}
                                            </MenuItem>
                                        ))}
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
                                        value={selectedFloors}
                                        onChange={(e) => handleFloorSelection(e.target.value)}
                                    >
                                        <MenuItem value="">
                                            Select floors
                                        </MenuItem>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                                            <MenuItem key={num} value={num}>
                                                {num} {num === 1 ? 'Floor' : 'Floors'}
                                            </MenuItem>
                                        ))}
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
                                            checked={hasBasement}
                                            onChange={(e) => setHasBasement(e.target.checked)}
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
                {/* Basement Floor Plan - Shows at top when checkbox is checked */}
                {hasBasement && (
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
                                            Basement Floor Plan*
                                        </Typography>
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
                                            htmlFor="basement-floor-upload"
                                        >
                                            {basementImage ? (
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        position: 'relative',
                                                    }}
                                                >
                                                    <img
                                                        src={basementImage}
                                                        alt="Basement Floor Plan"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            display: 'block',
                                                        }}
                                                    />
                                                </Box>
                                            ) : (
                                                <>
                                                    <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                                    <Typography>Upload Image</Typography>
                                                </>
                                            )}
                                            <VisuallyHiddenInput
                                                id="basement-floor-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleBasementImageChange}
                                            />
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
                                            placeholder="Enter Basement Floor description"
                                            value={basementDescription}
                                            onChange={(e) => setBasementDescription(e.target.value)}
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
                )}

                {/* Dynamic Floor Plans based on selected floors */}
                {selectedFloors && parseInt(selectedFloors) > 0 && (
                    <Box sx={{ padding: "0px 20px 0px 20px" }}>
                        <Grid container spacing={2}>
                            {Array.from({ length: parseInt(selectedFloors) }, (_, index) => {
                                const enabled = isFloorEnabled(index);
                                return (
                                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12, md: 6 }}>
                                                <Typography style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    lineHeight: "31px",
                                                    color: enabled ? "#202020" : "#999999",
                                                    margin: "20px 0px 10px 0px"
                                                }}>
                                                    {getFloorName(index)} Plan*
                                                    {!enabled && (
                                                        <span style={{ fontSize: "14px", marginLeft: "8px", color: "#FF9800" }}>
                                                            (Complete previous floor to unlock)
                                                        </span>
                                                    )}
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        height: "250px",
                                                        width: "100%",
                                                        backgroundColor: enabled ? "#F4F4F4" : "#F9F9F9",
                                                        border: `2px dashed ${enabled ? 'grey' : '#CCCCCC'}`,
                                                        borderRadius: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        cursor: enabled ? 'pointer' : 'not-allowed',
                                                        position: 'relative',
                                                        minHeight: '200px',
                                                        overflow: 'hidden',
                                                        opacity: enabled ? 1 : 0.6,
                                                        pointerEvents: enabled ? 'auto' : 'none',
                                                    }}
                                                    component={enabled ? "label" : "div"}
                                                    htmlFor={enabled ? `floor-${index}-upload` : undefined}
                                                >
                                                    {floorImages[index] ? (
                                                        <Box
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                position: 'relative',
                                                            }}
                                                        >
                                                            <img
                                                                src={floorImages[index]}
                                                                alt={`${getFloorName(index)} Plan`}
                                                                style={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'cover',
                                                                    display: 'block',
                                                                }}
                                                            />
                                                        </Box>
                                                    ) : (
                                                        <>
                                                            <CloudUploadIcon sx={{ fontSize: 60, color: enabled ? 'grey.500' : '#CCCCCC' }} />
                                                            <Typography sx={{ color: enabled ? '#202020' : '#999999' }}>
                                                                {enabled ? 'Upload Image' : 'Locked'}
                                                            </Typography>
                                                        </>
                                                    )}
                                                    {enabled && (
                                                        <VisuallyHiddenInput
                                                            id={`floor-${index}-upload`}
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => handleFloorImageChange(index, e)}
                                                        />
                                                    )}
                                                </Box>
                                            </Grid>
                                            <Grid size={{ xs: 12, md: 6 }}>
                                                <Typography style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    lineHeight: "31px",
                                                    color: enabled ? "#202020" : "#999999",
                                                    margin: "90px 0px 10px 0px"
                                                }}>
                                                    Description
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={5}
                                                    placeholder={enabled ? `Enter ${getFloorName(index)} description` : 'Complete previous floor first'}
                                                    value={floorDescriptions[index] || ''}
                                                    onChange={(e) => handleFloorDescriptionChange(index, e.target.value)}
                                                    disabled={!enabled}
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            borderRadius: "10px",
                                                            "& fieldset": {
                                                                border: "1px solid #F4F4F4",
                                                            },
                                                            "&:hover fieldset": {
                                                                border: enabled ? "1px solid #F4F4F4" : "1px solid #E0E0E0",
                                                            },
                                                            "&.Mui-focused fieldset": {
                                                                border: "2px solid #F4F4F4",
                                                            },
                                                            "&.Mui-disabled": {
                                                                backgroundColor: "#F9F9F9",
                                                                opacity: 0.6,
                                                            }
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                )}

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
                                htmlFor="video-upload"
                            >
                                {propertyVideo ? (
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                        }}
                                    >
                                        <video
                                            src={propertyVideo}
                                            controls
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                display: 'block',
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <>
                                        <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                        <Typography>Upload Video</Typography>
                                    </>
                                )}
                                <VisuallyHiddenInput
                                    id="video-upload"
                                    type="file"
                                    accept="video/*"
                                    onChange={handleVideoChange}
                                />
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
                                htmlFor="brochure-upload"
                            >
                                {projectBrochure ? (
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                        p: 2
                                    }}>
                                        <PictureAsPdfIcon sx={{ fontSize: 80, color: '#d32f2f' }} />
                                        <Typography sx={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "#202020",
                                            textAlign: 'center',
                                            wordBreak: 'break-word',
                                            maxWidth: '100%'
                                        }}>
                                            {projectBrochure.name}
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "12px",
                                            color: "#676767"
                                        }}>
                                            {(projectBrochure.size / 1024 / 1024).toFixed(2)} MB
                                        </Typography>
                                    </Box>
                                ) : (
                                    <>
                                        <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                        <Typography>Upload PDF Brochure</Typography>
                                    </>
                                )}
                                <VisuallyHiddenInput
                                    id="brochure-upload"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleBrochureChange}
                                />
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
                                htmlFor="property-images-upload"
                            >
                                <CloudUploadIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                                <Typography>Upload Images (Up to 40)</Typography>
                                <Typography sx={{ fontSize: "12px", color: 'grey.600', mt: 1 }}>
                                    {propertyImages.length}/40 images uploaded
                                </Typography>
                                <VisuallyHiddenInput
                                    id="property-images-upload"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handlePropertyImagesChange}
                                    disabled={propertyImages.length >= 40}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Display uploaded images in a grid */}
                    {propertyImages.length > 0 && (
                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                {propertyImages.map((imageObj) => (
                                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={imageObj.id}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                                border: '1px solid #E0E0E0',
                                            }}
                                        >
                                            <img
                                                src={imageObj.preview}
                                                alt="Property"
                                                style={{
                                                    width: '100%',
                                                    height: '200px',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                            <IconButton
                                                onClick={() => removePropertyImage(imageObj.id)}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 8,
                                                    right: 8,
                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                                    },
                                                }}
                                                size="small"
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}
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