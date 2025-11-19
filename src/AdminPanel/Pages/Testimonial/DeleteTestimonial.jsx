import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Modal, Typography, Divider, TextField, Grid } from "@mui/material";
import useStyles from "./PopupStyle";
import { useNavigate } from "react-router-dom";
// import { endpoints } from "../../../apiEndpoints";
// import axios from "axios";
// import toast from "react-hot-toast";




const DeleteTestimonial = ({ open, onClose, }) => {
    const classes = useStyles();




    // const DeleteProduct = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.delete(`${endpoints.SellerDeleteProduct}${userId}`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         });

    //         toast.success(response.data.message);
    //         onClose();
    //         onDeleteProductSuccess();
    //     } catch (error) {

    //         toast.error(error.response?.data?.message || "An error occurred");
    //     }
    // };



    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="popup-modal-title"
            aria-describedby="popup-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                className={classes.Poproot}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 8px #222222',
                }}
            >


                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        fontSize: "25px",
                        lineHeight: "31px",
                        color: "#222222"
                    }}>
                        Delete Testimonial
                    </Typography>
                </Box>

                <Box sx={{ marginTop: "15px" }}>
                    <Divider />
                </Box>


                <Box>
                    <Typography style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "31px",
                        color: "#222222",
                        marginTop: "15px"
                    }}>
                        Are you sure you want to delete this testimonial?
                    </Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "15px"
                }}>
                    <Button style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "18px",
                        color: "#222222",
                        backgroundColor: "#ECECEC",
                        width: "160px",
                        height: "50px",
                        borderRadius: "10px",
                        margin: "20px 0px 30px 0px",
                        textTransform: "none"
                    }}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "18px",
                        color: "#FFFFFF",
                        backgroundColor: "#ED4040",
                        width: "160px",
                        height: "50px",
                        borderRadius: "10px",
                        margin: "20px 0px 30px 0px",
                        textTransform: "none"
                    }}
                    // onClick={DeleteProduct}
                    >
                        Delete
                    </Button>
                </Box>





            </Box>

        </Modal>
    );
};

export default DeleteTestimonial;



