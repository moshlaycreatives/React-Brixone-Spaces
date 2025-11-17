import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';







const data = [
    { name: 'Sale', value: 7.3, color: '#4079ED' },
    { name: 'Rent', value: 3.0, color: '#202020' },

];

const total = data.reduce((sum, item) => sum + item.value, 0);

// ✅ Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];
        return (
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Outfit',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#222222',
                    }}
                >
                    {name} : {value.toLocaleString()}
                </Typography>
            </Box>
        );
    }
    return null;
};

const RevenueSummery = () => {
    return (
        <Box
            sx={{
                width: '100%',
                boxShadow: '0px 4px 30px 0px #0000001A',
                borderRadius: '15px',
                backgroundColor: 'white',
                padding: '10px 15px 10px 15px',
                height:"455px"
            }}
        >

            <Box sx={{ display: 'flex', flexFlow: "row", justifyContent: 'space-between', width: '100%', }}>
                <Typography
                    style={{
                        fontFamily: 'Outfit',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '31px',
                        color: '#222222',
                    }}
                >
                    Revenue Summery
                </Typography>
                <Box sx={{ display: 'flex', gap: "10px" }}>


                </Box>
            </Box >





            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <PieChart width={250} height={310}>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={75}
                        outerRadius={100}
                        paddingAngle={3}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    {/* ✅ Add Custom Tooltip */}
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>

                {/* Center Text */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" color="textSecondary">
                        Total Revenue
                    </Typography>
                    <Typography variant="h6">₹{total.toLocaleString()}</Typography>
                </Box>
            </Box>

            <Stack spacing={1} mt={2}>
                {data.map((item, index) => (
                    <Box key={index} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    backgroundColor: item.color,
                                    borderRadius: '50%',
                                    marginRight: 1,
                                }}
                            />
                            <Typography
                                style={{
                                    fontFamily: 'Outfit',
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '31px',
                                    color: '#6D6E71',
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>
                        <Typography
                            style={{
                                fontFamily: 'Outfit',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '31px',
                                color: '#222222',
                            }}
                        >
                            ₹{item.value.toLocaleString()}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default RevenueSummery;