import { Card, CardContent, Typography } from "@mui/material";

function DashboardCard({ title, value, color }) {
    return (
        <Card
            sx={{
                minWidth: 250,
                backgroundColor: color,
                color: "white",
                borderRadius: 3,
                boxShadow: 5
            }}
        >
            <CardContent>

                <Typography variant="h6">
                    {title}
                </Typography>

                <Typography
                    variant="h3"
                    sx={{ mt: 2 }}
                >
                    {value}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default DashboardCard;