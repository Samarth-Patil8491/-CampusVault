import { Box, Typography, Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function HeroBanner() {

    const today = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <Box
            sx={{
                background: "linear-gradient(90deg,#2563EB,#4F46E5)",
                color: "white",
                borderRadius: "20px",
                padding: "32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
            }}
        >

            <Box>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                >
                    Welcome Back 👋
                </Typography>

                <Typography
                    variant="h6"
                    sx={{ mt: 1, opacity: 0.9 }}
                >
                    Upload, organize and access study materials anytime.
                </Typography>

            </Box>

            <Chip
                icon={<CalendarMonthIcon sx={{ color: "white !important" }} />}
                label={today}
                sx={{
                    bgcolor: "rgba(255,255,255,0.18)",
                    color: "white",
                    fontSize: "16px",
                    px: 1.5,
                    py: 2.8,
                    borderRadius: "12px"
                }}
            />

        </Box>

    );
}

export default HeroBanner;