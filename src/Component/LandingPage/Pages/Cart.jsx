import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Divider,
    IconButton,
    Drawer,
    CircularProgress,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { InputBase } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';






const Cart = ({ open, onClose }) => {





    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
                sx: {
                    width: { xs: "90%", sm: 300, md: 450 },
                    backgroundColor: "#FFFFFF",
                },
            }}
        >
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column", p: "15px 30px" }}>
                <Box sx={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                    <IconButton onClick={onClose} sx={{ color: "#222222" }}>
                        <CloseIcon />
                    </IconButton>

                </Box>

                <Box >
                    <img src="/image/Logo.png" style={{ width: "180px", height: "75px" }} />
                </Box>


                <Box>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#676767",
                        marginTop: "20px"
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a facilisis libe ro, in cursus magna. Vestibulum eleifend felis ac ultricies facilisis. Vivamus augue risus, elementum vel laoreet a, molestie congue sem.
                    </Typography>
                </Box>


                <Box>

                    <Box>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 500,
                            fontSize: "25px",
                            color: "#202020",
                            marginTop: "20px"
                        }}>Get in Touch</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px", mt: "15px" }}>
                        <Box mt={1}>
                            <img src="/image/CartA.png" />
                        </Box>
                        <Box >
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "25px",
                                color: "#676767",
                            }}>
                                Address
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#676767",
                            }}>
                                lorem Ipsum Ahmadabad, India
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Box mt={1}>
                            <img src="/image/CartP.png" />
                        </Box>
                        <Box >
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "25px",
                                color: "#676767",
                            }}>
                                Phone
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#676767",
                            }}>
                                +91 (309) 2087119
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Box mt={1}>
                            <img src="/image/CartM.png" />
                        </Box>
                        <Box >
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 500,
                                fontSize: "25px",
                                color: "#676767",
                            }}>
                                Mail Info
                            </Typography>
                            <Typography style={{
                                fontFamily: "Afacad",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#676767",
                            }}>
                                info@brixonespaces.com
                            </Typography>
                        </Box>
                    </Box>




                </Box>



                <Box>
                    <Typography style={{
                        fontFamily: "Afacad",
                        fontWeight: 500,
                        fontSize: "25px",
                        color: "#202020",
                        marginBottom: "10px",
                        marginTop: "15px"
                    }}>
                        Our Newsletter
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #676767',
                            borderRadius: '6px',
                            // backgroundColor: '#2A6BE5',
                            padding: '5px 5px',
                            width: '90%',
                        }}
                    >
                        <InputBase
                            placeholder="Your email address"
                            sx={{
                                ml: 1,
                                flex: 1,
                                color: '#676767',
                                fontFamily: 'Afacad',
                                '& input::placeholder': {
                                    color: '#676767',
                                    opacity: 1,
                                },
                            }}
                            inputProps={{ 'aria-label': 'your email address' }}
                        />
                        <IconButton
                            sx={{
                                backgroundColor: '#2A6BE5',
                                color: '#FF',
                                '&:hover': {
                                    backgroundColor: '#2A6BE5',
                                },
                                width: 40,
                                height: 40,
                                borderRadius: '6%',
                            }}
                            aria-label="send"
                        >
                            <SendIcon fontSize="small" sx={{ color: "#FFFFFF" }} />
                        </IconButton>
                    </Box>
                </Box>





            </Box>



        </Drawer>
    );
};

export default Cart;
