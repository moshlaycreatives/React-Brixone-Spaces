import React, { useState } from 'react';
import { Box, IconButton, Stack, CardMedia } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const images = [
    '/image/AboutSlider1.png',
    '/image/AboutSlider2.png',
    '/image/AboutSlider3.png',
   
];

const AboutSlider = () => {
    const [imageOrder, setImageOrder] = useState(images);

    const handleNext = () => {
        const updatedOrder = [...imageOrder];
        const first = updatedOrder.shift();
        updatedOrder.push(first);
        setImageOrder(updatedOrder);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: { xs: "0px", md: "20px" }, px: 2 }}>
            <Stack direction="row" alignItems="center" sx={{ position: 'relative' }}>
                
                {/* First Image - Largest */}
                <Box
                    sx={{
                        width: { xs: 180, sm: 220, md: 380 },
                        height: { xs: 220, sm: 280, md: 580 },
                        borderRadius: 3,
                        boxShadow: 3,
                        zIndex: 3,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={imageOrder[0]}
                        alt="Main"
                        sx={{ width: '100%', height: '100%', borderRadius: 3 }}
                    />
                </Box>

                {/* Second Image - Medium */}
                <Box
                    sx={{
                        width: { xs: 140, sm: 160, md: 230 },
                        height: { xs: 180, sm: 240, md: 500 },
                        borderRadius: 3,
                        boxShadow: 2,
                        zIndex: 2,
                        transform: {
                            xs: 'translateX(-30px)',
                            sm: 'translateX(-35px)',
                            md: 'translateX(-80px)'
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={imageOrder[1]}
                        alt="Second"
                        sx={{ width: '100%', height: '100%', borderRadius: 3 }}
                    />
                </Box>

                {/* Third Image - Smallest */}
                <Box
                    sx={{
                        width: { xs: 100, sm: 120, md: 130 },
                        height: { xs: 140, sm: 200, md: 450 },
                        borderRadius: 3,
                        boxShadow: 1,
                        zIndex: 1,
                        transform: {
                            xs: 'translateX(-60px)',
                            sm: 'translateX(-70px)',
                            md: 'translateX(-120px)'
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={imageOrder[2]}
                        alt="Third"
                        sx={{ width: '100%', height: '100%', borderRadius: 3 }}
                    />
                </Box>

                {/* Next Arrow Button */}
                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        right: { xs: "58%", sm: "10%", md: "49%" },
                        transform: 'translateX(50%)',
                        zIndex: 4,
                        backgroundColor: '#202020',
                        minWidth: '55px',
                        height: '30px',
                        borderRadius: '24px',
                        border:"1px solid #FFFFFF",
                        mt: { xs: '60px', sm: '130px', md: '20px' },
                        '&:hover': {
                            backgroundColor: '#333'
                        }
                    }}
                >
                    <ArrowForward fontSize="small" sx={{ color: "#FFFFFF" }} />
                </IconButton>
            </Stack>
        </Box>
    );
};

export default AboutSlider;
