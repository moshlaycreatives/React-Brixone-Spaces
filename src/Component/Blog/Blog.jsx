import { Box, Typography, Grid, Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';




const Data = [
    {
        id: "1",
        Image: "/image/Blog1.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
    {
        id: "2",
        Image: "/image/Blog2.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    }
]


const SData = [
    {
        id: "1",
        Image: "/image/Pic1.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
    {
        id: "2",
        Image: "/image/pic2.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
    {
        id: "3",
        Image: "/image/pic3.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
    {
        id: "4",
        Image: "/image/pic4.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
    {
        id: "5",
        Image: "/image/pic5.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
    {
        id: "6",
        Image: "/image/pic6.png",
        title: "The Majestic Kudu: Preserving a Species",
        eye: "345",
        Date: "May 19,2025",
        Content: "Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large..."
    },
]



const Blog = () => {

    const navigate = useNavigate();


    const handleBlogDetail = () => {
        navigate(`/BlogDetail`)
    }


    return (
        <>

            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#0000004D, #0000004D), url('/image/Rent1.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        // height: "580px",
                        height: { xs: "380px", md: "362px" },
                        borderRadius: "30px",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: "60px",
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                            textAlign: "center",
                        }}
                    >
                        Blog
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#202020",
                            textAlign: "center",
                            backgroundColor: "#FFFFFF",
                            width: "120px",
                            height: "30px",
                            borderRadius: "26px",
                            paddingTop: "2px"

                        }}
                    >
                        Home / <span style={{ color: "#2A6BE5" }}>Blog</span>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={2}>
                    {Data.map((item, index) => {
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                                <Box sx={{ width: "100%" }}>
                                    <img src={item.Image} style={{ width: "100%", height: "400px" }} />

                                    <Box>
                                        <Typography sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: { xs: "20px", md: "35px" },
                                            textTransform: "capitalize",
                                            color: "#202020",
                                            marginTop: "5px"

                                        }}>
                                            {item.title}
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: "30px" ,  mt:"5px" }}>
                                            <Typography style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#202020",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "3px"

                                            }}>
                                                <VisibilityOutlinedIcon sx={{ fontSize: "20px", color: "#2A6BE5" }} />
                                                {item.eye}
                                            </Typography>
                                            <Typography style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#202020",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "3px"
                                            }}>
                                                <CalendarMonthOutlinedIcon sx={{ fontSize: "17px", color: "#2A6BE5" }} />
                                                {item.Date}
                                            </Typography>

                                        </Box>

                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            textTransform: "capitalize",
                                            color: "#676767",
                                            marginTop: "5px"

                                        }}>
                                            Native to the savannas of sub-Saharan Africa, <br /> the Kudu (Tragelaphus strepsiceros) is a large...
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#2A6BE5",
                                                marginTop: "5px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px"
                                            }}
                                            onClick={handleBlogDetail}

                                        >
                                            Read More
                                            <ArrowOutwardIcon sx={{ fontSize: "20px" }} />
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}

                </Grid>

            </Box>

            <Box sx={{ mt: "35px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid container spacing={2}>
                    {SData.map((item, index) => {
                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Box sx={{ width: "100%" }}>
                                    <img src={item.Image} style={{ width: "100%", height: "400px" }} />

                                    <Box>
                                        <Typography sx={{
                                            fontFamily: "Afacad",
                                            fontWeight: 600,
                                            fontSize: { xs: "20px", md: "30px" },
                                            textTransform: "capitalize",
                                            color: "#202020",
                                            marginTop: "5px"

                                        }}>
                                            {item.title}
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: "30px" , mt:"5px" }}>
                                            <Typography style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#202020",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "3px"

                                            }}>
                                                <VisibilityOutlinedIcon sx={{ fontSize: "20px", color: "#2A6BE5" }} />
                                                {item.eye}
                                            </Typography>
                                            <Typography style={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#202020",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "3px"
                                            }}>
                                                <CalendarMonthOutlinedIcon sx={{ fontSize: "17px", color: "#2A6BE5" }} />
                                                {item.Date}
                                            </Typography>

                                        </Box>

                                        <Typography style={{
                                            fontFamily: "Afacad",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            textTransform: "capitalize",
                                            color: "#676767",
                                            marginTop: "5px"

                                        }}>
                                            Native to the savannas of sub-Saharan Africa, <br /> the Kudu (Tragelaphus strepsiceros) is a large...
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "Afacad",
                                                fontWeight: 400,
                                                fontSize: "18px",
                                                textTransform: "capitalize",
                                                color: "#2A6BE5",
                                                marginTop: "5px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px"
                                            }}
                                            onClick={handleBlogDetail}
                                        >
                                            Read More
                                            <ArrowOutwardIcon sx={{ fontSize: "20px" }} />
                                        </Typography>


                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>




        </>
    )
}


export default Blog;