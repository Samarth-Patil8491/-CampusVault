import {
  Paper,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", uploads: 12 },
  { month: "Feb", uploads: 18 },
  { month: "Mar", uploads: 25 },
  { month: "Apr", uploads: 32 },
  { month: "May", uploads: 40 },
  { month: "Jun", uploads: 46 },
];

function AnalyticsChart() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Monthly Upload Analytics
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="uploads"
            stroke="#2563EB"
            fill="#93C5FD"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default AnalyticsChart;