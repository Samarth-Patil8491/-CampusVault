import {
  Paper,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
  Button,
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const rows = [
  {
    title: "DBMS Unit 5",
    subject: "DBMS",
    semester: "5",
    time: "2 hrs ago",
  },
  {
    title: "Java Notes",
    subject: "Java",
    semester: "4",
    time: "Yesterday",
  },
  {
    title: "CN Notes",
    subject: "Computer Networks",
    semester: "6",
    time: "2 days ago",
  },
  {
    title: "Operating System",
    subject: "OS",
    semester: "5",
    time: "3 days ago",
  },
];

function RecentUploads() {
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
        Recent Uploads
      </Typography>

      {rows.map((row, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 2,
              transition: ".25s",

              "&:hover": {
                bgcolor: "#F8FAFC",
                borderRadius: "12px",
                px: 1,
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
                  bgcolor: "#FEE2E2",
                  color: "#DC2626",
                  width: 56,
                  height: 56,
                }}
              >
                <PictureAsPdfRoundedIcon />
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {row.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: 14,
                    mt: .4,
                  }}
                >
                  {row.subject}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: .5,
                    mt: .7,
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
                      fontSize: 13,
                      color: "#9CA3AF",
                    }}
                  >
                    {row.time}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Chip
                label={`Sem ${row.semester}`}
                sx={{
                  bgcolor: "#EEF4FF",
                  color: "#2563EB",
                  fontWeight: 700,
                  borderRadius: "8px",
                }}
              />

              <Button
                variant="contained"
                startIcon={<DownloadRoundedIcon />}
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2.5,
                  boxShadow: "none",

                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(37,99,235,.25)",
                  },
                }}
              >
                Download
              </Button>
            </Box>
          </Box>

          {index !== rows.length - 1 && (
            <Divider sx={{ my: 1 }} />
          )}
        </Box>
      ))}
    </Paper>
  );
}

export default RecentUploads;