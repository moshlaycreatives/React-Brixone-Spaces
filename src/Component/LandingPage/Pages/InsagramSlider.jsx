import React from "react";
import { Box, Card, CardActionArea, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";


export default function InsagramSlider({
    images = [
        "/image/insta1.png",
        "/image/insta2.png",
        "/image/insta3.png",
        "/image/insta4.png",
        "/image/insta5.png",

    ],
    height = 220,
    width = 220,
    radius = 16,
    gap = 16,
    durationSec = 30,
}) {

    const trackImages = [...images, ...images];

    return (
        <>

            <Box sx={{ px: { xs: "20px", md: "75px" }, backgroundColor: "#FFFFFF", py: "30px" }}>
                <Box
                    sx={{
                        display: "inline-block",
                        mt: 2,
                        borderRadius: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#676767",
                            lineHeight: "100%",
                        }}
                    >
                        Instagram
                    </Typography>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 10 }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: { xs: "25px", md: "50px" },
                                    color: "#202020",
                                    lineHeight: "100%",
                                    marginTop: "15px"
                                }}>
                                    Follow on Instagram
                                </Typography>
                            </Box>
                        </Grid>


                    </Grid>
                </Box>
            </Box>


            <Box sx={{ p: 1 }}>

                <Box
                    sx={{
                        overflow: "hidden",
                        position: "relative",
                        width: "100%",
                        borderRadius: 2,
                    }}
                >

                    <Box
                        className="slider-track"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: `${gap}px`,
                            width: `calc(2 * (${images.length} * ${width + gap}px))`,
                            animation: `scrollRight ${durationSec}s linear infinite`,
                            "&:hover": { animationPlayState: "paused" },
                        }}
                    >
                      
                        {trackImages.map((src, i) => (
                            <Card
                                elevation={0}
                                key={i}
                                sx={{
                                    width,
                                    height,
                                    borderRadius: `${radius}px`,
                                    position: "relative",
                                    overflow: "hidden",
                                    flex: `0 0 ${width}px`,
                                    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                                }}
                            >
                                <a
                                    href="https://www.instagram.com/brixonespaces/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: "block", width: "100%", height: "100%" }}
                                >
                                    <CardActionArea
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`home-${i}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                filter: "saturate(95%)",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 8,
                                                right: 8,
                                                width: 28,
                                                height: 28,
                                                borderRadius: "50%",
                                                // backgroundColor: "rgba(255,255,255,0.85)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backdropFilter: "blur(2px)",
                                            }}
                                        >
                                            <InstagramIcon fontSize="small" sx={{color:"white"}} />
                                        </Box>
                                    </CardActionArea>
                                </a>
                            </Card>
                        ))}

                    </Box>

                    <Box
                        sx={{
                            "@keyframes scrollRight": {
                                "0%": { transform: "translateX(0%)" },
                                "100%": { transform: "translateX(-15%)" },
                            },
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export const Preview = () => (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <MuiImageSlider durationSec={28} />
    </Box>
);
