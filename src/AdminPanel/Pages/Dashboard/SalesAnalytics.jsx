import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    ButtonGroup,
    Box,
} from "@mui/material";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const monthData = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 12 },
    { name: "Mar", value: 15 },
    { name: "Apr", value: 13 },
    { name: "May", value: 10 },
    { name: "Jun", value: 14 },
    { name: "Jul", value: 19 },
    { name: "Aug", value: 18 },
    { name: "Sep", value: 16 },
    { name: "Oct", value: 15 },
    { name: "Nov", value: 17 },
    { name: "Dec", value: 24 },
];

export default function SalesAnalytics() {
    const [active, setActive] = useState("Month");

    return (
        <>
            <Box>
                <Card sx={{ borderRadius: 3, p: 1, boxShadow: 3 , height:"400px" }}>
                    <CardContent>
                        {/* Header */}
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography sx={{
                                fontFamily: "Outfit",
                                fontWeight: 500,
                                fontSize: "22px",
                                color: "#222222",
                            }}>
                                Sales Analytics
                            </Typography>

                            <ButtonGroup variant="outlined">
                                {["This Week", "Month", "Year"].map((label) => (
                                    <Button
                                        key={label}
                                        onClick={() => setActive(label)}
                                        variant={active === label ? "contained" : "outlined"}
                                        sx={{
                                            textTransform: "none",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Box>

                        {/* Chart */}
                        <Box height={300} mt={2}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={monthData}
                                    margin={{ top: 20, right: 10, left: 0, bottom: 10 }}
                                >
                                    <defs>
                                        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4A90E2" stopOpacity={0.4} />
                                            <stop offset="100%" stopColor="#4A90E2" stopOpacity={0.1} />
                                        </linearGradient>
                                    </defs>

                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        interval={0}
                                        padding={{ left: 5, right: 0 }}
                                    />
                                    <YAxis
                                        tickFormatter={(v) => `₹${v}M`}
                                        domain={[0, 25]}
                                        ticks={[5, 10, 15, 20, 25]}
                                    />
                                    <Tooltip formatter={(v) => `₹${v}M`} />

                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#3B82F6"
                                        strokeWidth={3}
                                        fill="url(#colorBlue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

        </>
    );
}
