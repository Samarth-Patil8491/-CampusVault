import {
  Paper,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

const notes = [
  {
    title: "DBMS Complete Notes",
    downloads: "245 Downloads",
  },
  {
    title: "Java Interview Notes",
    downloads: "198 Downloads",
  },
  {
    title: "CN Cheat Sheet",
    downloads: "175 Downloads",
  },
  {
    title: "OS Lab Manual",
    downloads: "162 Downloads",
  },
  {
    title: "Python Notes",
    downloads: "140 Downloads",
  },
];

function TrendingNotes() {
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
      {/* Header */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Trending Notes
        </Typography>

        <Chip
          icon={<TrendingUpRoundedIcon />}
          label="This Week"
          sx={{
            bgcolor: "#EEF4FF",
            color: "#2563EB",
            fontWeight: 700,
            borderRadius: "8px",
          }}
        />
      </Box>

      {notes.map((note, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            p: 1.8,
            mb: 1.5,

            borderRadius: "14px",

            transition: ".25s",

            "&:hover": {
              bgcolor: "#F8FAFC",
              transform: "translateX(4px)",
            },
          }}
        >
          {/* Left */}

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Avatar
              sx={{
                bgcolor: "#FEF3C7",
                color: "#F59E0B",
                width: 48,
                height: 48,
              }}
            >
              <PictureAsPdfRoundedIcon />
            </Avatar>

            <Box>
              <Typography
                fontWeight={700}
                fontSize={15}
              >
                {note.title}
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={13}
              >
                {note.downloads}
              </Typography>
            </Box>
          </Box>

          {/* Fire */}

          <Avatar
            sx={{
              bgcolor: "#FFF7ED",
              color: "#F97316",
              width: 38,
              height: 38,
            }}
          >
            <LocalFireDepartmentRoundedIcon
              sx={{ fontSize: 20 }}
            />
          </Avatar>
        </Box>
      ))}
    </Paper>
  );
}

export default TrendingNotes;