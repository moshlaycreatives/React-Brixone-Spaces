// import React from "react";
// import { Box, Typography, Card, Divider } from "@mui/material";
// import {
//     PieChart,
//     Pie,
//     Cell,
// } from "recharts";





// const UnitsoldGraph = () => {
//     const totalUsers = 2532;
//     const buyers = 1500;
//     const sellers = 1032;

//     const data = [
//         { name: "Buyers", value: buyers },
//         { name: "Sellers", value: sellers },
//     ];

//     const COLORS = ["#4079ED", "#202020"]; // Dark green & Orange

//     return (
//         <Card
//             sx={{
//                 p: 2,
//                 borderRadius: "16px",
//                 boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
//                 textAlign: "center",
//                 width: "100%",
//                 height: "395px",
//             }}
//         >
//             <Typography sx={{
//                 fontFamily: "Outfit",
//                 fontWeight: 500,
//                 fontSize: "22px",
//                 color: "#222222",
//             }}>
//                 Total Units Sold Out
//             </Typography>

//             {/* Gauge Chart */}
//             <PieChart width={250} height={150}>
//                 <Pie
//                     data={data}
//                     startAngle={180}
//                     endAngle={0}
//                     innerRadius={60}
//                     outerRadius={80}
//                     paddingAngle={2}
//                     dataKey="value"
//                 >
//                     {data.map((entry, index) => (
//                         <Cell key={index} fill={COLORS[index]} />
//                     ))}
//                 </Pie>
//             </PieChart>

//             {/* Total Users */}
//             <Typography variant="h6" sx={{ fontWeight: 600, marginTop: "-40px" }}>
//                 Total Users
//             </Typography>
//             <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 {totalUsers.toLocaleString()}
//             </Typography>

//             <Divider sx={{ my: 2 }} />

//             {/* Buyers & Sellers Row */}
//             <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
//                 <Box sx={{ textAlign: "left" }}>
//                     <Typography sx={{ fontWeight: "bold", color: COLORS[0] }}>
//                         {buyers.toLocaleString()}
//                     </Typography>
//                     <Typography variant="body2">Sale</Typography>
//                 </Box>

//                 <Box sx={{ textAlign: "right" }}>
//                     <Typography sx={{ fontWeight: "bold", color: COLORS[1] }}>
//                         {sellers.toLocaleString()}
//                     </Typography>
//                     <Typography variant="body2">Rent</Typography>
//                 </Box>
//             </Box>
//         </Card>
//     );
// };

// export default UnitsoldGraph;




import React, { useState, useEffect } from "react";
import { Box, Typography, Card } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";






const UserGraph = () => {
    const totalUsers = 2532;
    const buyers = 1500;
    const sellers = 1032;


    const COLORS = ["#4079ED", "#202020"];





    const data = [
        { name: "Buyers", value: buyers },
        { name: "Sellers", value: sellers },
    ];



    return (
        <Card
            sx={{
                p: 2,
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                height: "455px",
            }}
        >
            <Typography
                sx={{
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    fontSize: "22px",
                    color: "#222222",
                }}
            >
                Total Units Sold Out
            </Typography>



            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <PieChart width={250} height={230}>
                    <Pie
                        data={data}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"

                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </Box>

            <Typography
                sx={{
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#6D6E71",
                    marginTop: "-100px",
                    textAlign: "center",
                }}
            >
                Total Users
            </Typography>
            <Typography
                sx={{
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    fontSize: "25px",
                    color: "#222222",
                    marginTop: "0px",
                    textAlign: "center",
                }}
            >
                {totalUsers.toLocaleString()}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 2,
                    backgroundColor: "#F4F4F4",
                    borderRadius: "10px",
                    padding: "15px",
                    marginTop: "50px",
                }}
            >
                <Box sx={{ textAlign: "left" }}>
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            fontSize: "22px",
                            color: "#222222",
                        }}
                    >
                        {buyers.toLocaleString()}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#6D6E71",
                        }}
                    >
                        Sale
                    </Typography>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            fontSize: "22px",
                            color: "#222222",
                        }}
                    >
                        {sellers.toLocaleString()}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#6D6E71",
                        }}
                    >
                        Rent
                    </Typography>
                </Box>
            </Box>


        </Card>
    );
};

export default UserGraph;
