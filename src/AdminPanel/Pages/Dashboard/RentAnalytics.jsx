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

const rentMonthData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 13 },
  { name: "Mar", value: 16 },
  { name: "Apr", value: 13 },
  { name: "May", value: 11 },
  { name: "Jun", value: 15 },
  { name: "Jul", value: 18 },
  { name: "Aug", value: 17 },
  { name: "Sep", value: 15 },
  { name: "Oct", value: 14 },
  { name: "Nov", value: 16 },
  { name: "Dec", value: 20 },
];

export default function RentAnalytics() {
  const [active, setActive] = useState("Month");

  return (
    <Card sx={{ borderRadius: 3, p: 1, boxShadow: 3, height: "400px" }}>
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "22px",
            color: "#222222",
          }}>
            Rent Analytics
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
        <Box height={260} mt={2}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={rentMonthData}
              margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="grayFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000000" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#000000" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                interval={0}
                padding={{ left: 10, right: 10 }}
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
                stroke="#000000"
                strokeWidth={2}
                fill="url(#grayFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
