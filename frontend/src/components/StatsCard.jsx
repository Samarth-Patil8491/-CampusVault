import {
  Paper,
  Typography,
  Box,
} from "@mui/material";

function StatsCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",

        borderRadius: "18px",

        border: "1px solid #E5E7EB",

        background: "#FFFFFF",

        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 35px rgba(37,99,235,.12)",
          borderColor: "#D6E4FF",
        },
      }}
    >
      {/* Top */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 15,
              color: "#6B7280",
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: 34,
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1,
            }}
          >
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 56,
            height: 56,

            borderRadius: "16px",

            bgcolor: `${color}15`,

            color,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "& svg": {
              fontSize: 30,
            },
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* Bottom */}

      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: color,
          }}
        />

        <Typography
          sx={{
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          Updated just now
        </Typography>
      </Box>
    </Paper>
  );
}

export default StatsCard;