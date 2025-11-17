import { Box, Typography, Button, Grid } from "@mui/material";
import RevenueAnalyticsGraph from "./RevenueAnalyticsGraph";
import UnitsoldGraph from "./UnitsoldGraph";
import RevenueSummery from "./RevenueSummery";
import RecentUser from "./RecentUser";
import RentAnalytics from "./RentAnalytics";
import SalesAnalytics from "./SalesAnalytics";


const Dashboard = () => {
    return (
        <>
            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    fontSize: "36px",
                    color: "#202020",
                }}>
                    Dashboard
                </Typography>
            </Box>

            <Box>
                <Grid container spacing={2} mt={3}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box sx={{
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            padding: "10px 20px 10px 20px",
                            width: "100%",
                            height: "125px",
                            display: "flex",
                            justifyContent: "space-between",

                        }}>


                            <Box>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    color: "#676767"
                                }}>
                                    Total Sale
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 600,
                                    fontSize: "35px",
                                    color: "#202020",
                                    marginTop: "25px"
                                }}>
                                    ₹10.3M
                                </Typography>
                            </Box>

                            <Box style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <img src="/image/Dsale.png" />
                            </Box>


                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box sx={{
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            padding: "10px 20px 10px 20px",
                            width: "100%",
                            height: "125px",
                            display: "flex",
                            justifyContent: "space-between",

                        }}>


                            <Box>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    color: "#676767"
                                }}>
                                    Properties for Sale
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 600,
                                    fontSize: "35px",
                                    color: "#202020",
                                    marginTop: "25px"
                                }}>
                                    420
                                </Typography>
                            </Box>

                            <Box style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <img src="/image/Dproperty.png" />
                            </Box>


                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box sx={{
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            padding: "10px 20px 10px 20px",
                            width: "100%",
                            height: "125px",
                            display: "flex",
                            justifyContent: "space-between",

                        }}>


                            <Box>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    color: "#676767"
                                }}>
                                    Propeties for Rent
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 600,
                                    fontSize: "35px",
                                    color: "#202020",
                                    marginTop: "25px"
                                }}>
                                    540
                                </Typography>
                            </Box>

                            <Box style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <img src="/image/Drent.png" />
                            </Box>


                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Box sx={{
                            boxShadow: "0px 4px 30px 0px #0000001A",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            padding: "10px 20px 10px 20px",
                            width: "100%",
                            height: "125px",
                            display: "flex",
                            justifyContent: "space-between",

                        }}>


                            <Box>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    color: "#676767"
                                }}>
                                    Total Customer
                                </Typography>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 600,
                                    fontSize: "35px",
                                    color: "#202020",
                                    marginTop: "25px"
                                }}>
                                    3600
                                </Typography>
                            </Box>

                            <Box style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <img src="/image/Dcustomer.png" />
                            </Box>


                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box>
                <Grid container spacing={2} mt={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>
                            <RevenueAnalyticsGraph />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box>
                            <UnitsoldGraph />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box>
                            <RevenueSummery />
                        </Box>
                    </Grid>
                </Grid>
            </Box>



            <Box>
                <Grid container spacing={2} mt={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SalesAnalytics />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <RentAnalytics />
                    </Grid>

                </Grid>
            </Box>




            <Box>
                <RecentUser />
            </Box>



        </>
    )
}

export default Dashboard;