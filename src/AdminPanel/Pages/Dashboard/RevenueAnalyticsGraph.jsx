


import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Box,
} from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", revenue: 120000 },
    { name: "Feb", revenue: 320000 },
    { name: "Mar", revenue: 200000 },
    { name: "Apr", revenue: 280000 },
    { name: "May", revenue: 800000 },
    { name: "Jun", revenue: 360000 },
    { name: "Jul", revenue: 220000 },
    { name: "Aug", revenue: 240000 },
    { name: "Sep", revenue: 480000 },
    { name: "Oct", revenue: 330000 },
    { name: "Nov", revenue: 240000 },
    { name: "Dec", revenue: 370000 },
];

const RevenueAnalyticsGraph = () => {
    const [view, setView] = useState("Month");

    const handleChange = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    return (
        <Card sx={{
            boxShadow: "0px 4px 30px 0px #0000001A",
            borderRadius: "15px",
            backgroundColor: "white",
            height:"455px"
            // marginTop: "20px"
        }}>
            <CardContent>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Typography sx={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "22px",
                        color: "#222222"
                    }}>
                        Revenue Analytics
                    </Typography>

                    <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleChange}
                        size="small"

                    >
                        <ToggleButton value="This Week">This Week</ToggleButton>
                        <ToggleButton value="Month">Month</ToggleButton>
                        <ToggleButton value="Year">Year</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis
                            tickFormatter={(value) => `₹${value / 1000}M`}
                            domain={[0, 500000]}
                        />
                        <Tooltip
                            formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]}
                        />
                        <Bar dataKey="revenue" fill="#4079ED" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}


export default RevenueAnalyticsGraph;