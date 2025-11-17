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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';




const Data = [
    {
        id: "1",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
    {
        id: "2",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
    {
        id: "3",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
    {
        id: "4",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
    {
        id: "5",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
]







const RecentUser = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const open = Boolean(anchorEl);



    const handleMenuClick = (event,) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };






    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleRequest = () => {
        setAnchorEl(null);
        setShowPopup(true);
    };






    return (
        <>



            <Box sx={{
                boxShadow: "0px 4px 30px 0px #0000001A",
                borderRadius: "15px",
                backgroundColor: "white",
                marginTop: "20px"
            }}>



                <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                    <Typography
                        style={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            fontSize: "22px",
                            lineHeight: "31px",
                            color: "#222222",
                            padding: "20px"
                        }}>
                        Recent Users
                    </Typography>
                    <Box sx={{ display: 'flex', gap: "10px" }}>
                        <Typography
                            style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "31px",
                                color: "#4079ED",
                                padding: "20px",
                                cursor: "pointer"
                            }}

                        >
                            See All
                        </Typography>



                    </Box>
                </Box >





                <Box style={{ overflowX: "auto" }}>
                    <Table sx={{ border: "1px solid #EFEFEF", minWidth: "70rem" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Id</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>User Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Email</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Phone</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Date</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.Id}</TableCell>
                                    <TableCell>{row.UserName}</TableCell>
                                    <TableCell>{row.Email}</TableCell>
                                    <TableCell>{row.Phone}</TableCell>
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
                                            open={open}
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

                                            {/* <MenuItem>View Order</MenuItem>
                                            <MenuItem>Cancel Order</MenuItem> */}

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

export default RecentUser;


