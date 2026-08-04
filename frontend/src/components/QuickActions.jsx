import {
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Upload Notes",
      subtitle: "Share your study materials",
      icon: <CloudUploadRoundedIcon />,
      color: "#2563EB",
      path: "/upload",
    },
    {
      title: "Browse Notes",
      subtitle: "Explore all available notes",
      icon: <MenuBookRoundedIcon />,
      color: "#10B981",
      path: "/notes",
    },
    {
      title: "Bookmarks",
      subtitle: "View saved study materials",
      icon: <BookmarkRoundedIcon />,
      color: "#F59E0B",
      path: "/bookmarks",
    },
    {
      title: "Profile",
      subtitle: "Manage your account",
      icon: <PersonRoundedIcon />,
      color: "#8B5CF6",
      path: "/profile",
    },
  ];

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
        Quick Actions
      </Typography>

      <Grid container spacing={2}>
        {actions.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              onClick={() => navigate(item.path)}
              sx={{
                p: 2.5,
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                cursor: "pointer",
                transition: "all .3s ease",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(37,99,235,.12)",
                  borderColor: "#D6E4FF",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    bgcolor: `${item.color}15`,
                    color: item.color,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    "& svg": {
                      fontSize: 28,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#111827",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#6B7280",
                      mt: 0.3,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>

              <ArrowForwardRoundedIcon
                sx={{
                  color: "#9CA3AF",
                  fontSize: 22,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default QuickActions;