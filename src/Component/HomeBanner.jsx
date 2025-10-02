import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const STATS = [
    { value: "20+", label: "Years of Experience" },
    { value: "270+", label: "Modern Houses" },
    { value: "15+", label: "Team Members" },
    { value: "5k+", label: "Satisfied Clients" },
    { value: "800+", label: "Trusted Partners" }
];

const HomeBanner = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#2A6BE5",

            }}
        >

            <Grid
                container
                spacing={2}
            >
                {STATS.map((item) => (
                    <Grid
                        key={item.label}
                        item
                        size={{ xs: 6, sm: 6, md: 2.4 }}
                        sx={{
                            mt: { xs: "20px", md: "70px" },
                            mb: { xs: "20px", md: "70px" },
                        }}

                    >
                        <Typography
                            sx={{
                                fontFamily: "Afacad",
                                fontWeight: 600,
                                fontSize: "64px",
                                color: "#FFFFFF",
                                lineHeight: "100%",
                                textAlign: "center"
                            }}
                        >
                            {item.value}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Afacad",
                                fontWeight: 300,
                                fontSize: "20px",
                                color: "#FFFFFF",
                                lineHeight: "100%",
                                textAlign: "center",
                                marginTop: "10px"
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

        </Box >
    );
}


export default HomeBanner;