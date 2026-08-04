import {
  Paper,
  Typography,
  Box,
  Avatar,
  LinearProgress,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

const subjects = [
  {
    name: "DBMS",
    notes: 48,
    progress: 92,
    color: "#2563EB",
  },
  {
    name: "Java",
    notes: 42,
    progress: 84,
    color: "#10B981",
  },
  {
    name: "Operating System",
    notes: 35,
    progress: 75,
    color: "#F59E0B",
  },
  {
    name: "Computer Networks",
    notes: 31,
    progress: 68,
    color: "#8B5CF6",
  },
  {
    name: "Python",
    notes: 28,
    progress: 63,
    color: "#EC4899",
  },
  {
    name: "DSA",
    notes: 25,
    progress: 56,
    color: "#EF4444",
  },
  {
    name: "AI & ML",
    notes: 22,
    progress: 48,
    color: "#06B6D4",
  },
  {
    name: "Web Development",
    notes: 20,
    progress: 42,
    color: "#14B8A6",
  },
];

function PopularSubjects() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "18px",
        border: "1px solid #E5E7EB",
        background: "#fff",
      }}
    >
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 700,
          mb: 3,
          color: "#111827",
        }}
      >
        Popular Subjects
      </Typography>

      {subjects.map((subject, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,

            p: 2,

            mb: 2,

            borderRadius: "14px",

            transition: ".3s",

            "&:hover": {
              bgcolor: "#F8FAFC",
              transform: "translateX(4px)",
            },
          }}
        >
          {/* Icon */}

          <Avatar
            sx={{
              bgcolor: `${subject.color}15`,
              color: subject.color,
              width: 52,
              height: 52,
            }}
          >
            <MenuBookRoundedIcon />
          </Avatar>

          {/* Content */}

          <Box sx={{ flex: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              mb={1}
            >
              <Typography
                fontWeight={700}
                fontSize={15}
              >
                {subject.name}
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={13}
              >
                {subject.notes} Notes
              </Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={subject.progress}
              sx={{
                height: 8,
                borderRadius: 10,
                bgcolor: "#E5E7EB",

                "& .MuiLinearProgress-bar": {
                  borderRadius: 10,
                  backgroundColor: subject.color,
                },
              }}
            />
          </Box>
        </Box>
      ))}
    </Paper>
  );
}

export default PopularSubjects;