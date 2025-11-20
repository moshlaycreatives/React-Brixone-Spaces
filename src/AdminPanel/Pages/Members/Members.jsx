import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useStepContext } from "@mui/material";
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
import DeleteMember from "./DeleteMember";
import BlockMember from "./BlockMember";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdBlockFlipped } from "react-icons/md";
import { endpoints } from "../../../endpoint";
import axios from "axios";
import toast from "react-hot-toast";



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
    {
        id: "6",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
    {
        id: "7",
        Id: "2315",
        UserName: "Lay Patel",
        Email: "lay@gmail.com",
        Phone: "+912212345678",
        Date: "09-10-2024, 10:15 PM",
    },
]







const Members = () => {
    const navigate = useNavigate();
    const [memberData, setmemberData] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [BlockPopup, setBlockPopup] = useState(false);
    const [menuUserId, setMenuUserId] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);

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
    const handleCloseBlockPopup = () => {
        setBlockPopup(false);
        setSelectedUserId(null);
    };

    const handleDelete = (userId) => {
        setShowPopup(true);
        setAnchorEl(null);
        setSelectedUserId(userId);
    };
    const handleBlock = (userId) => {
        setAnchorEl(null);
        setBlockPopup(true);
        setSelectedUserId(userId);
    };




    const getMember = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${endpoints.MemberApi}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setmemberData(response.data.data.users);
            toast.success(response.data.message);
        } catch (error) {
            setmemberData([]);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    useEffect(() => {
        getMember();
    }, []);




    return (
        <>
            <DeleteMember
                open={showPopup}
                onClose={handleClosePopup}
                userId={selectedUserId}
                onDelete={getMember}
            />
            <BlockMember
                open={BlockPopup}
                onClose={handleCloseBlockPopup}
                userId={selectedUserId}
                onDelete={getMember}
            />

            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    fontSize: "36px",
                    color: "#202020",
                }}>
                    Dashboard /<span style={{ color: "#4079ED" }}> Members</span>
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
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>User Name</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Email</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Phone</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Date</TableCell>
                                <TableCell style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: "14px", lineHeight: "21px" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {memberData?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.customId}</TableCell>
                                    <TableCell>{row.fullName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row?.createdAt ? new Date(row.createdAt).toLocaleDateString() : "N/A"}</TableCell>
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

                                            <MenuItem onClick={() => handleBlock(row._id)} sx={{ color: "#ED4040", gap: "5px" }}>
                                                <MdBlockFlipped fontSize="20px" />
                                                Block</MenuItem>
                                            <MenuItem onClick={() => handleDelete(row._id)} sx={{ color: "#ED4040", gap: "5px" }}>
                                                <RiDeleteBinLine fontSize="20px" />
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

export default Members;


