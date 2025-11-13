import { Box, Typography, Grid, Button } from "@mui/material";
import AddReview from "./AddReview";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';






const BlogDetail = () => {
    return (
        <>

            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(#0000004D, #0000004D), url('/image/BlogDetail.png')`,
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
                        sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "20px", md: "60px" },
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                            textAlign: "center",
                        }}
                    >
                        The Majestic Kudu: Preserving a Species
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#202020",
                            textAlign: "center",
                            backgroundColor: "#FFFFFF",
                            width: "210px",
                            height: "30px",
                            borderRadius: "26px",
                            paddingTop: "2px"

                        }}
                    >
                        Home /Blog <span style={{ color: "#2A6BE5" }}>/Blog Details</span>
                    </Typography>
                </Box>
            </Box>


            <Box sx={{
                display: "flex",
                gap: "25px",
                padding: { xs: "0px 20px", md: "0px 75px" },
                mt: "50px"
            }}>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    color: "#202020",
                    display: "flex",
                    alignItems: "center",
                    gap: "2px"

                }}>
                    < Person2OutlinedIcon sx={{ fontSize: "17px", color: "#2A6BE5" }} />
                    Shyamal Patel
                </Typography>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    color: "#202020",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px"

                }}>
                    <VisibilityOutlinedIcon sx={{ fontSize: "17px", color: "#2A6BE5" }} />
                    345
                </Typography>
                <Typography sx={{
                    fontFamily: "Afacad",
                    fontWeight: 400,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    color: "#202020",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                }}>
                    <CalendarMonthOutlinedIcon sx={{ fontSize: "17px", color: "#2A6BE5" }} />
                    May 19,2025
                </Typography>
            </Box>


            <Box sx={{ mt: "10px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <Grid size={{ xs: 12, md: 12 }}>
                    <Box>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "25px", md: "50px" },
                            color: "#202020",
                            marginTop: "10px"
                        }}>
                            The Majestic Kudu: Preserving a Species
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#676767",
                            marginTop: "10px"
                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                        <Box sx={{ mt: "30px" }}>
                            <Box
                                component="img"
                                src="/image/BlogDetail.png"
                                sx={{
                                    width: "100%",
                                    height: { xs: "250px", md: "450px" },
                                    borderRadius: "15px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>

                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "25px", md: "35px" },
                            color: "#202020",
                            marginTop: "10px"
                        }}>
                            The Introduction of Kudu to Texas: A New Home
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "10px"

                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "5px"

                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "25px", md: "35px" },
                            color: "#202020",
                            marginTop: "10px"
                        }}>
                            The Introduction of Kudu to Texas: A New Home
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "5px"
                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                    </Box>
                    <Box sx={{ gap: "10px", display: "flex", mt: "20px" }}>
                        <Box
                            component="img"
                            src="/image/BlogDetail.png"
                            sx={{
                                width: "50%",
                                height: { xs: "200px", md: "400px" },
                                borderRadius: "15px",
                                objectFit: "cover"
                            }}
                        />
                        <Box
                            component="img"
                            src="/image/BlogDetail.png"
                            sx={{
                                width: "50%",
                                height: { xs: "200px", md: "400px" },
                                borderRadius: "15px",
                                objectFit: "cover"
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "25px", md: "35px" },
                            color: "#202020",
                            marginTop: "15px"
                        }}>
                            The Introduction of Kudu to Texas: A New Home
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "5px"
                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "5px"
                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ mt: "30px" }}>
                          <Box
                                component="img"
                                src="/image/BlogDetail.png"
                                sx={{
                                    width: "100%",
                                    height: { xs: "250px", md: "450px" },
                                    borderRadius: "15px",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                        <Typography sx={{
                            fontFamily: "Afacad",
                            fontWeight: 600,
                            fontSize: { xs: "25px", md: "35px" },
                            color: "#202020",
                            marginTop: "15px"
                        }}>
                            The Introduction of Kudu to Texas: A New Home
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "5px"
                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                        <Typography style={{
                            fontFamily: "Afacad",
                            fontWeight: 400,
                            fontSize: "18px",
                            color: "#6D6E71",
                            marginTop: "5px"
                        }}>
                            Native to the savannas of sub-Saharan Africa, the Kudu (Tragelaphus strepsiceros) is a large, majestic antelope known for its spiraled horns and striking tan coat adorned with vertical white stripes. Males can sport impressive horns that grow up to 5 feet long and are capable of leaping high fences when startled, showcasing their agility and grace. They thrive in areas where dense brush and open grasslands meet, allowing them to graze freely while using the cover for protection.
                        </Typography>
                    </Box>

                </Grid>
            </Box>


            <Box sx={{ mt: "50px", padding: { xs: "0px 20px", md: "0px 75px" } }}>
                <AddReview />
            </Box>

        </>
    )
}

export default BlogDetail;