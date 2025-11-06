import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Component/LandingPage/Pages/Navbar";
import Footer from "./Component/LandingPage/Pages/Footer";
import ImageBox from "./Component/LandingPage/Pages/ImageBox";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">

            <Navbar />


            <Box flex={1}>
                <Outlet />
            </Box>

            <Box sx={{ mt: "50px", px: { xs: "0px", md: "75px" } }}>
                <Footer />
            </Box>
            <ImageBox />
        </Box>
    );
};

export default Layout;