import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // Get logged-in user's information
  const name = localStorage.getItem("fullName") || "Student";
  const email = localStorage.getItem("email") || "";
  const department = localStorage.getItem("department") || "";
  const semester = localStorage.getItem("semester") || "";
  const role = localStorage.getItem("role") || "STUDENT";

  // Create initials
  const initials = name
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  // Profile completion
  const fields = [
    name !== "Student" ? name : "",
    email,
    department,
    semester,
  ];

  const completed = fields.filter(
    (value) => value && value.trim() !== ""
  ).length;

  const completion = Math.round(
    (completed / fields.length) * 100
  );

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: "18px",
        p: 3.5,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 8px 24px rgba(15,23,42,.05)",
        transition: ".3s",

        "&:hover": {
          boxShadow:
            "0 16px 40px rgba(37,99,235,.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >

        {/* ================= AVATAR ================= */}

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
            {initials}
          </Avatar>

          {/* Online indicator */}

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

        {/* ================= NAME ================= */}

        <Typography
          fontWeight={700}
          fontSize={22}
          textAlign="center"
        >
          {name}
        </Typography>

        {/* ================= ROLE ================= */}

        <Typography
          color="text.secondary"
          fontSize={15}
          mb={2}
        >
          {role === "STUDENT" ? "Student" : role}
        </Typography>

        {/* ================= DEPARTMENT ================= */}

        <Chip
          icon={<SchoolRoundedIcon />}
          label={
            department || "Department not set"
          }
          sx={{
            mb: 3,
            bgcolor: "#EEF4FF",
            color: "#2563EB",
            fontWeight: 600,
            borderRadius: "10px",
          }}
        />

        {/* ================= PROFILE COMPLETION ================= */}

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
            {completion}%
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={completion}
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

        {/* ================= STATUS ================= */}

        <Box
          mt={2}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <CheckCircleRoundedIcon
            sx={{
              color:
                completion === 100
                  ? "#10B981"
                  : "#2563EB",
              fontSize: 18,
            }}
          />

          <Typography
            fontSize={14}
            color="text.secondary"
          >
            {completion === 100
              ? "Profile completed!"
              : "Complete your profile information"}
          </Typography>
        </Box>

        {/* ================= BUTTON ================= */}

        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/profile")}
          sx={{
            mt: 3,
            py: 1.3,
            borderRadius: "12px",
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "none",

            "&:hover": {
              boxShadow:
                "0 10px 25px rgba(37,99,235,.25)",
            },
          }}
        >
          {completion === 100
            ? "View Profile"
            : "Complete Profile"}
        </Button>

      </Box>
    </Paper>
  );
}

export default ProfileCard;