// import { Box, Typography, Button, Grid } from "@mui/material";
// import { ArrowBack, ArrowForward } from '@mui/icons-material';






// const ClientReview = () => {
//     return (
//         <>
// <Box sx={{ px: "50px", backgroundColor: "#E9E9E9", py: "30px" }}>
//     <Box
//         sx={{
//             display: "inline-block",
//             mt: 5,
//             borderRadius: 1,
//         }}
//     >
//         <Typography
//             sx={{
//                 fontFamily: "Afacad",
//                 fontWeight: 400,
//                 fontSize: "18px",
//                 color: "#676767",
//                 lineHeight: "100%",
//             }}
//         >
//             Testimonial
//         </Typography>
//     </Box>

//     <Box>
//         <Grid container spacing={2}>
//             <Grid size={{ xs: 12, md: 10 }}>
//                 <Box>
//                     <Typography sx={{
//                         fontFamily: "Afacad",
//                         fontWeight: 600,
//                         fontSize: "50px",
//                         color: "#202020",
//                         lineHeight: "100%",
//                         marginTop: "20px"
//                     }}>
//                         What Our Customers Says
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid size={{ xs: 12, md: 2 }}>
//                 <Box
//                     mt={5}
//                     display="flex"
//                     gap={2}
//                     justifyContent={{ xs: 'center', md: 'flex-end' }}
//                 >
//                     <Button
//                         variant="outlined"
//                         sx={{
//                             minWidth: '45px',
//                             height: '30px',
//                             borderRadius: '24px',
//                             borderColor: '#676767',
//                             color: '#676767'
//                         }}
//                     >
//                         <ArrowBack fontSize="small" />
//                     </Button>
//                     <Button
//                         variant="contained"
//                         sx={{
//                             minWidth: '45px',
//                             height: '30px',
//                             borderRadius: '24px',
//                             backgroundColor: '#2A6BE5',

//                         }}
//                     >
//                         <ArrowForward fontSize="small" />
//                     </Button>
//                 </Box>
//             </Grid>

//         </Grid>
//     </Box>








// </Box>





//         </>
//     )
// }


// export default ClientReview;




import * as React from "react";
import {
    Box,
    Card,
    CardMedia,
    Avatar,
    Typography,
    Grid,
    Paper,
    Stack,
    Button
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const OVERLAY_WIDTH = 340;
const HALF_OUT = OVERLAY_WIDTH / 2;




function QuoteBox({ side = "right" }) {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "absolute",
                top: "50%",
                ...(side === "right"
                    ? { right: 0, transform: "translate(50%, -50%)" }
                    : { left: 0, transform: "translate(-50%, -50%)" }),
                width: OVERLAY_WIDTH,
                p: 2.5,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.97)",
                boxShadow: "0 14px 40px rgba(0,0,0,.18)",
                zIndex: 2,
                "@media (max-width:600px)": {
                    left: 16,
                    right: "auto",
                    transform: "translateY(-50%)",
                    width: "calc(100% - 32px)",
                },
            }}
        >
            <Stack spacing={1.5}>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: "#676767",
                }}>
                    "Brixone Spaces made buying my first home so easy. They understood exactly what I needed and guided me through every step with patience and care.."
                </Typography>

                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                        src="/image/person.png"
                        sx={{ width: 40, height: 40 }}
                    />
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            Sophia Reed
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Home owner
                        </Typography>
                    </Box>
                </Stack>

                <FormatQuoteIcon
                    sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 10,
                        fontSize: 36,
                        opacity: 0.15,
                    }}
                />
            </Stack>
        </Paper>
    );
}

function ImageCard({ img, boxSide = "right" }) {
    return (
        <Card
            sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "visible",
                height: 360,
                width: "100%",
            }}
        >
            <CardMedia
                component="img"
                image={img}
                alt=""
                sx={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "15px" }}
            />
            <QuoteBox side={boxSide} />
        </Card>
    );
}

export default function ClientReview() {
    return (
        <>

            <Box sx={{ padding: { xs: "0px 20px", md: "0px 75px" }, backgroundColor: "#E9E9E9", }}>
                <Box
                    sx={{
                        display: "inline-block",
                        mt: 5,
                        borderRadius: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#676767",
                            lineHeight: "100%",
                        }}
                    >
                        Testimonial
                    </Typography>
                </Box>

                <Box>
                    <Grid container spacing={2} mt={2}>
                        <Grid size={{ xs: 12, md: 10 }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "Afacad",
                                    fontWeight: 600,
                                    fontSize: { xs: "25px", md: "50px" },
                                    color: "#202020",
                                    lineHeight: "100%",

                                }}>
                                    What Our Customers Says
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: "none", md: "block" } }}>
                            <Box
                                display="flex"
                                gap={2}
                                justifyContent={{ xs: 'center', md: 'flex-end' }}

                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        minWidth: '45px',
                                        height: '30px',
                                        borderRadius: '24px',
                                        borderColor: '#676767',
                                        color: '#676767'
                                    }}
                                >
                                    <ArrowBack fontSize="small" />
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        minWidth: '45px',
                                        height: '30px',
                                        borderRadius: '24px',
                                        backgroundColor: '#2A6BE5',

                                    }}
                                >
                                    <ArrowForward fontSize="small" />
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>




            </Box>

            <Box sx={{ bgcolor: "#E9E9E9", py: { xs: 4, md: 1 }, overflow: "hidden", padding: { xs: "40px 20px", md: "40px 0px" } }}>
                <Grid
                    container
                    justifyContent="center"
                    sx={{
                        px: { xs: 2, md: 6 },
                        columnGap: { xs: 0, md: `200px` },

                    }}
                >
                    <Grid item size={{ xs: 12, md: 5 }} >
                        <ImageCard
                            img="/image/client1.png"
                            boxSide="right"

                        />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }} sx={{ display: { xs: "none", md: "block" } }} >
                        <ImageCard
                            img="/image/client2.png"
                            boxSide="right"
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
