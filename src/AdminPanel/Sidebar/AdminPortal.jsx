import React, { Fragment } from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import menuData from "./menuData";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Properties from "../Pages/Properties/Properties";
import Tours from "../Pages/Tours/Tours";
import Members from "../Pages/Members/Members";
import SoldOut from "../Pages/SoldOut/SoldOut";
import Brochure from "../Pages/Brochure/Brochure";
import Blog from "../Pages/Blog/Blog";
import Testimonial from "../Pages/Testimonial/Testimonial";
import AddBlog from "../Pages/Blog/AddBlog";










const Root = styled(Box)(({ theme }) => ({
    backgroundColor: "#F4F4F4",
    width: "100%",
    minHeight: "100vh",
    height: "auto",
    boxSizing: "border-box",
    padding: "70px 24px 0px 335px",
    [theme.breakpoints.down("lg")]: {
        padding: "50px 24px 24px 24px",
    },
    [theme.breakpoints.down("sm")]: {
        margin: "50px 0px 0px 0px",
    },
}));

const AdminPortal = () => {
    const navigate = useNavigate();




    return (
        <Fragment>
            <Nav menuData={menuData} />
            <Root>
                <Routes>
                    {/* Default route: redirect to dashboard */}
                    <Route path="" element={<Dashboard />} />
                    <Route
                        path="properties"
                        element={<Navigate to="/dashboard/properties/for-sale" replace />}
                    />
                    <Route path="properties/for-sale" element={<Properties propertyType="For Sale" />} />
                    <Route path="properties/for-rent" element={<Properties propertyType="For Rent" />} />
                    <Route path="tours" element={<Tours />} />
                    <Route path="members" element={<Members />} />
                    <Route path="soldOut" element={<SoldOut />} />
                    <Route path="brochure" element={<Brochure />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="testimonial" element={<Testimonial />} />
                    <Route path="AddBlog" element={<AddBlog />} />

                </Routes>
            </Root>
        </Fragment>
    );
};

export default AdminPortal;
