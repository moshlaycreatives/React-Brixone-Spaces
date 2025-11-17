import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";




const Data = [
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
    {
        id: "1",
        Image: "/image/AdminBlog.png",
        Title: "Lorem ipsum dolor sit ame uis aute irure dolor"
    },
]



const Blog = () => {
    const navigate = useNavigate();


    const handleBlog = () => {
        navigate(`/dashboard/AddBlog`)
    }

    return (
        <>


            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 600,
                        fontSize: "36px",
                        color: "#202020",
                    }}>
                    Dashboard /<span style={{ color: "#4079ED" }}> Blog</span>

                </Typography>
                <Box sx={{ display: 'flex', gap: "10px" }}>
                    <Button style={{
                        backgroundColor: "#4079ED",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        lineHeight: "16px",
                        fontWeight: 400,
                        textTransform: "none",
                        width: "130px",
                        height: "50px",
                        margin: "0px 0px 10px 0px",
                        borderRadius: "10px"
                    }}
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={handleBlog}
                    >Add Blog</Button>
                </Box>
            </Box >



            <Box >
                <Grid container spacing={2} sx={{ marginTop: { xs: "20px", md: "10px" } }}>
                    {
                        Data.map((item, index) => {
                            return (
                                <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index} >
                                    <Box sx={{
                                        width: "100%", boxShadow: "0px 4px 30px 0px #0000001A",
                                        borderRadius: "15px",
                                        backgroundColor: "white",
                                        padding: "10px"
                                    }}>
                                        <Box sx={{ position: "relative", width: "100%" }}>
                                            <img src={item.Image} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', mt: "10px" }}>
                                            <Typography
                                                style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                    lineHeight: "100%",
                                                    marginTop: "6px"
                                                }}>

                                                Mar 17, 2024
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: "10px" }}>
                                                <Typography style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#202020",
                                                    margin: "0px 10px 0px 0px"

                                                }}>
                                                    3 min read
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Typography sx={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "20px",
                                                color: "#202020",
                                                marginTop: "8px"
                                            }}>
                                                Lorem ipsum dolor sit ame uis aute irure dolor
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', mt: "10px" }}>
                                            <Typography
                                                style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#FF0000",
                                                    lineHeight: "100%",
                                                    marginTop: "5px"
                                                }}>

                                                Delete
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: "10px" }}>
                                                <Typography style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 400,
                                                    fontSize: "18px",
                                                    color: "#2A6BE5",
                                                    margin: "0px 10px 0px 0px"

                                                }}>
                                                    Edit
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Box>


        </>
    )
}

export default Blog;