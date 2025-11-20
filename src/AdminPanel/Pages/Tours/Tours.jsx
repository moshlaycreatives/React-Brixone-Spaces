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
import DeleteTour from "./DeleteTour";
import { RiDeleteBinLine } from "react-icons/ri";
import { endpoints } from "../../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";




const Data = [
    {
        id: "1",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },
    {
        id: "2",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },
    {
        id: "3",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },
    {
        id: "4",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },
    {
        id: "5",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },
    {
        id: "6",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },
    {
        id: "7",
        Id: "2315",
        FullName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        PropertyName: "Lorem Ipsum dolot sit",
        Date: "09-10-2024"
    },

]





const Tours = () => {
    const navigate = useNavigate();
    const [TourData, setTourData] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuUserId, setMenuUserId] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const open = Boolean(anchorEl);



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






    return (
        <>
            <DeleteTour
                open={showPopup}
                onClose={handleClosePopup}
                userId={selectedUserId}
            />


            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    fontSize: "36px",
                    color: "#202020",
                }}>
                    Dashboard /<span style={{ color: "#4079ED" }}> Tour Bookings</span>
                </Typography>
            </Box>



            <Box sx={{
                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "15px",
                backgroundColor: "white",
                marginTop: "20px"
            }}>



                <Box style={{ overflowX: "auto" }}>
                    <Table sx={{ border: "1px solid #EFEFEF", minWidth: "70rem" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Id</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Full Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Email</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Phone</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Property Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Date</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.Id}</TableCell>
                                    <TableCell>{row.FullName}</TableCell>
                                    <TableCell>{row.Email}</TableCell>
                                    <TableCell>{row.Phone}</TableCell>
                                    <TableCell>{row.PropertyName}</TableCell>
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

export default Tours;


