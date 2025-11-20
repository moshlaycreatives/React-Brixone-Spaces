import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteTestimonial from "./DeleteTestimonial";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { endpoints } from "../../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";




const Data = [
    {
        id: "1",
        Id: "2315",
        FullName: "Lay Patel",
        Designation: "Property Owner",
        Review: "Lorem ipsum dolor sit amet consectetur. Vestibulum tristique egestas etiam ante integer hendrerit sociis. Mattis dolor orci nunc porta suspendisse felis volutpat.",
        Date: "09-10-2024, 10:15 PM"
    },


]





const Testimonial = () => {
    const navigate = useNavigate();
    const [TestimonialData, setTestimonialData] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuUserId, setMenuUserId] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const open = Boolean(anchorEl);



    const handletestimonal = () => {
        navigate(`/dashboard/addtestimonial`)
    }

    const handleEdittestimonal = () => {
        navigate(`/dashboard/EditTestimonail`)
    }


    const handleMenuClick = (event, userId) => {
        setAnchorEl(event.currentTarget);
        setMenuUserId(userId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMenuUserId(null);
    };


    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedUserId(null);
    };

    const handleDelete = (userId) => {
        setShowPopup(true);
        setAnchorEl(null);
        setSelectedUserId(userId);
    };




    // const getAllTestimonial = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.get(`${endpoints.AdminGetReview}`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         });

    //         setTestimonialData(response.data.data);
    //         toast.success(response.data.message);
    //     } catch (error) {
    //         setTestimonialData([]);
    //         toast.error(error.response?.data?.message || "An error occurred");
    //     }
    // };

    // useEffect(() => {
    //     getAllTestimonial();
    // }, []);





    return (
        <>
            <DeleteTestimonial
                open={showPopup}
                onClose={handleClosePopup}
                userId={selectedUserId}
            />

            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        fontSize: "36px",
                        color: "#202020",
                    }}>
                    Dashboard /<span style={{ color: "#4079ED" }}> Testimonial</span>

                </Typography>
                <Box sx={{ display: 'flex', gap: "10px" }}>
                    <Button style={{
                        backgroundColor: "#4079ED",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        lineHeight: "16px",
                        fontWeight: 400,
                        textTransform: "none",
                        width: "180px",
                        height: "50px",
                        margin: "0px 0px 10px 0px",
                        borderRadius: "10px"
                    }}
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={handletestimonal}
                    >Add Testimonial</Button>
                </Box>
            </Box >


            <Box sx={{
                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "10px",
                backgroundColor: "white",
                marginTop: "20px"
            }}>
                <Box style={{ overflowX: "auto" }}>
                    <Table sx={{ border: "1px solid #EFEFEF", minWidth: "70rem" }}>
                        <TableHead>
                            <TableRow>

                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Id</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Full Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Designation</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Property Image</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Client Feedback</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Date</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.Id}</TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <img src="/image/name.png" style={{ width: "30px", height: "30px", borderRadius: "6px" }} />
                                            {row.FullName}
                                        </Box>

                                    </TableCell>

                                    <TableCell>{row.Designation}</TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: "5px" }}>
                                            <img src="/image/Blogimage.jpg" style={{ width: "30px", height: "30px", borderRadius: "6px" }} />
                                        </Box>
                                    </TableCell>
                                    <TableCell>{row.Review}</TableCell>
                                    <TableCell>{row.Date}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={(e) => handleMenuClick(e, row._id)}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="demo-positioned-menu"
                                            aria-labelledby="demo-positioned-button"
                                            anchorEl={anchorEl}
                                            open={open && menuUserId === row._id}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={() => handleEdittestimonal(row._id)} sx={{ color: "#1DBE38", gap: "5px" }}>
                                                <FaEdit fontSize="20px" sx={{ mr: 1 }} />
                                                Edit</MenuItem>
                                            <MenuItem onClick={() => handleDelete(row._id)} sx={{ color: "#ED4040", gap: "5px" }}>
                                                <RiDeleteBinLine fontSize="20px" sx={{}} />
                                                Delete</MenuItem>

                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>


                    </Table>

                </Box>


            </Box>




        </>
    )
}

export default Testimonial;


