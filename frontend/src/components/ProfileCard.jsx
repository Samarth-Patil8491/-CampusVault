import {
  Paper,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  Button,
  Chip,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function ProfileCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: "18px",
        p: 3.5,
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 24px rgba(15,23,42,.05)",
        transition: ".3s",

        "&:hover": {
          boxShadow: "0 16px 40px rgba(37,99,235,.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Avatar */}

        <Box
          sx={{
            position: "relative",
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              fontSize: 38,
              fontWeight: 700,
              background:
                "linear-gradient(135deg,#2563EB,#4F46E5)",
            }}
          >
            S
          </Avatar>

          <Box
            sx={{
              position: "absolute",
              right: 4,
              bottom: 4,
              width: 18,
              height: 18,
              bgcolor: "#10B981",
              border: "3px solid white",
              borderRadius: "50%",
            }}
          />
        </Box>

        {/* Name */}

        <Typography
          fontWeight={700}
          fontSize={22}
        >
          Sam
        </Typography>

        <Typography
          color="text.secondary"
          fontSize={15}
          mb={2}
        >
          Student
        </Typography>

        <Chip
          icon={<SchoolRoundedIcon />}
          label="Computer Science"
          sx={{
            mb: 3,
            bgcolor: "#EEF4FF",
            color: "#2563EB",
            fontWeight: 600,
            borderRadius: "10px",
          }}
        />

        {/* Progress Header */}

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          mb={1}
        >
          <Typography
            fontWeight={600}
            color="#374151"
          >
            Profile Completion
          </Typography>

          <Typography
            fontWeight={700}
            color="#2563EB"
          >
            72%
          </Typography>
        </Box>

        {/* Progress */}

        <LinearProgress
          variant="determinate"
          value={72}
          sx={{
            width: "100%",
            height: 9,
            borderRadius: 20,
            bgcolor: "#E5E7EB",

            "& .MuiLinearProgress-bar": {
              borderRadius: 20,
              background:
                "linear-gradient(90deg,#2563EB,#4F46E5)",
            },
          }}
        />

        <Box
          mt={2}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <CheckCircleRoundedIcon
            sx={{
              color: "#10B981",
              fontSize: 18,
            }}
          />

          <Typography
            fontSize={14}
            color="text.secondary"
          >
            You're almost done!
          </Typography>
        </Box>

        {/* Button */}

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,

            py: 1.3,

            borderRadius: "12px",

            fontWeight: 700,

            textTransform: "none",

            boxShadow: "none",

            "&:hover": {
              boxShadow: "0 10px 25px rgba(37,99,235,.25)",
            },
          }}
        >
          Complete Profile
        </Button>
      </Box>
    </Paper>
  );
}

export default ProfileCard;