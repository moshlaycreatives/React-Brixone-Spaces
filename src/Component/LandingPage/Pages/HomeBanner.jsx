import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const STATS = [
    { value: 20, suffix: "+", label: "Years of Experience" },
    { value: 270, suffix: "+", label: "Modern Houses" },
    { value: 15, suffix: "+", label: "Team Members" },
    { value: 5000, suffix: "+", label: "Satisfied Clients" },
    { value: 800, suffix: "+", label: "Trusted Partners" }
];

const HomeBanner = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only animate once
        threshold: 0.3
    });

    return (
        <Box sx={{ backgroundColor: "#2A6BE5" }} ref={ref}>
            <Grid container spacing={2} justifyContent="center">
                {STATS.map((item, index) => (
                    <Grid
                        key={item.label}
                        item
                        size={{ xs: 6, md: 2.4 }}
                        xs={6}
                       
                        sx={{
                            mt: { xs: "20px", md: "70px" },
                            mb: { xs: "20px", md: "70px" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
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
                            {inView ? (
                                <CountUp end={item.value} duration={2} separator="," />
                            ) : (
                                "0"
                            )}
                            {item.suffix}
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

                {/* For odd count, center last item on mobile */}
                {STATS.length % 2 !== 0 && (
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: { xs: "flex", md: "none" },
                            justifyContent: "center"
                        }}
                    >
                        <Box sx={{ width: "50%" }} />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default HomeBanner;
