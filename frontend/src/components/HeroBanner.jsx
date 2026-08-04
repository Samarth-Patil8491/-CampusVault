import {
  Paper,
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { useNavigate } from "react-router-dom";

function HeroBanner() {

  const navigate = useNavigate();

  return (

    <Paper
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",

        borderRadius: "18px",

        p: 4,

        background:
          "linear-gradient(135deg,#2563EB 0%,#3B82F6 55%,#4F46E5 100%)",

        color: "#fff",

        boxShadow:
          "0 16px 40px rgba(37,99,235,.22)",
      }}
    >

      {/* Background Circle */}

      <Box
        sx={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.08)",
          top: -100,
          right: -70,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.05)",
          bottom: -80,
          left: -40,
        }}
      />

      <Box
        sx={{
          position: "relative",

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: 4,
        }}
      >

        {/* LEFT */}

        <Box sx={{ maxWidth: 620 }}>

          <Typography
            variant="h4"
            fontWeight={800}
          >
            Welcome Back, Sam 👋
          </Typography>

          <Typography
            sx={{
              mt: 2,

              fontSize: 17,

              lineHeight: 1.8,

              color: "rgba(255,255,255,.92)",
            }}
          >
            Upload, organize and access your study materials
            from one centralized platform built for students.
          </Typography>

          {/* Stats */}

          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              mt: 3,
            }}
          >

            <Chip
              icon={<DescriptionRoundedIcon />}
              label="248 Notes"
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                color: "#fff",
                backdropFilter: "blur(10px)",
              }}
            />

            <Chip
              icon={<CloudUploadRoundedIcon />}
              label="32 Uploads"
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                color: "#fff",
                backdropFilter: "blur(10px)",
              }}
            />

            <Chip
              icon={<DownloadRoundedIcon />}
              label="1.2K Downloads"
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                color: "#fff",
                backdropFilter: "blur(10px)",
              }}
            />

          </Box>

          {/* Buttons */}

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 4,
              flexWrap: "wrap",
            }}
          >

            <Button
              variant="contained"
              startIcon={<CloudUploadRoundedIcon />}
              onClick={() => navigate("/upload")}
              sx={{
                bgcolor: "#fff",
                color: "#2563EB",

                px: 3.5,
                py: 1.2,

                borderRadius: "12px",

                textTransform: "none",

                fontWeight: 700,

                boxShadow: "none",

                "&:hover": {
                  bgcolor: "#F8FAFC",
                },
              }}
            >
              Upload Notes
            </Button>

            <Button
              variant="outlined"
              startIcon={<MenuBookRoundedIcon />}
              onClick={() => navigate("/notes")}
              sx={{
                borderColor: "rgba(255,255,255,.45)",

                color: "#fff",

                px: 3.5,
                py: 1.2,

                borderRadius: "12px",

                textTransform: "none",

                fontWeight: 700,

                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,.08)",
                },
              }}
            >
              Browse Notes
            </Button>

          </Box>

        </Box>

        {/* RIGHT */}

        <Avatar
          sx={{
            width: 145,
            height: 145,

            bgcolor: "rgba(255,255,255,.15)",

            backdropFilter: "blur(15px)",

            border: "2px solid rgba(255,255,255,.25)",

            fontSize: 60,

            boxShadow:
              "0 12px 35px rgba(0,0,0,.15)",
          }}
        >
          📚
        </Avatar>

      </Box>

    </Paper>

  );

}

export default HeroBanner;