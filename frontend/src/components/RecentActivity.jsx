import {
  Paper,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const activities = [
  {
    icon: <CloudUploadRoundedIcon />,
    title: "Uploaded DBMS Notes",
    subtitle: "Database Management System",
    time: "10 mins ago",
    color: "#2563EB",
    type: "Upload",
  },
  {
    icon: <DownloadRoundedIcon />,
    title: "Downloaded Java Notes",
    subtitle: "Object Oriented Programming",
    time: "45 mins ago",
    color: "#10B981",
    type: "Download",
  },
  {
    icon: <BookmarkRoundedIcon />,
    title: "Bookmarked CN Notes",
    subtitle: "Computer Networks",
    time: "2 hours ago",
    color: "#F59E0B",
    type: "Bookmark",
  },
  {
    icon: <PersonRoundedIcon />,
    title: "Updated Profile",
    subtitle: "Account Information",
    time: "Yesterday",
    color: "#EC4899",
    type: "Profile",
  },
];

function RecentActivity() {
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

      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 700,
          mb: 3,
          color: "#111827",
        }}
      >
        Recent Activity
      </Typography>

      {activities.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

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
          {/* Left */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              sx={{
                width: 52,
                height: 52,
                bgcolor: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.icon}
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#111827",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: 13,
                  mt: 0.3,
                }}
              >
                {item.subtitle}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 0.8,
                }}
              >
                <AccessTimeRoundedIcon
                  sx={{
                    fontSize: 15,
                    color: "#9CA3AF",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#9CA3AF",
                  }}
                >
                  {item.time}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right */}

          <Chip
            label={item.type}
            sx={{
              bgcolor: `${item.color}15`,
              color: item.color,
              fontWeight: 700,
              borderRadius: "8px",
            }}
          />
        </Box>
      ))}
    </Paper>
  );
}

export default RecentActivity;