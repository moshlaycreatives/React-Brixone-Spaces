import { Box, Typography, Grid } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const ImageBox = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `linear-gradient(#0000004D, #0000004D), url('/image/footerimage.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "auto",
                position: "relative",
                display: "flex",
                flexDirection: "column",

            }}>


                <Box sx={{ padding: { xs: "0px 0px 50px 0px", md: "0px 75px 75px 75px" } }}>
                    <Box sx={{ px: { xs: "20px", md: "75px" }, py: "20px", backgroundColor: "#202020", borderRadius: "0px 0px 30px 30px" }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 400,
                                    fontSize: { xs: "13px", md: "18px" },
                                    color: "#FFFFFF",
                                    textAlign: { xs: "center", md: "left" }
                                }}>
                                    All rights reserved Brixone Spaces © 2025
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 2 }}>
                                {/* <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                                    <img src="/image/facebookicon.png" />
                                    <img src="/image/insta.png" />
                                    <img src="/image/twittericon.png" />
                                </Box> */}
                                <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                                    <a href="https://www.facebook.com/profile.php?id=61581132009380" target="_blank" rel="noopener noreferrer">
                                        <img src="/image/facebookicon.png" alt="Facebook" />
                                    </a>
                                    <a href="https://www.instagram.com/brixonespaces/" target="_blank" rel="noopener noreferrer">
                                        <img src="/image/insta.png" alt="Instagram" />
                                    </a>
                                    <a>
                                        <img src="/image/twittericon.png" alt="Twitter" />
                                    </a>
                                </Box>

                            </Grid>

                        </Grid>
                    </Box>
                </Box>


            </Box>


        </>
    )
}

export default ImageBox;