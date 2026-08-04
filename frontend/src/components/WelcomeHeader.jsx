import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import { useNavigate } from "react-router-dom";

function WelcomeHeader() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
      <Box
  sx={{
    width: "100%",
    maxWidth: "1100px", // or 1200px if you want it wider
    mx: "auto",

    position: "relative",
    overflow: "hidden",

    borderRadius: "32px",

    background:
      "linear-gradient(135deg,#2563EB 0%,#3B82F6 45%,#6366F1 100%)",

    boxShadow: "0 22px 50px rgba(37,99,235,.28)",

    color: "#fff",

    px: { xs: 4, md: 7 },
    py: { xs: 5, md: 6 },
  }}
>
        {/* Background Circles */}

        <Box
          sx={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
            top: -140,
            right: -90,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,.05)",
            bottom: -90,
            left: -60,
          }}
        />

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          {/* LEFT */}

          <Box sx={{ maxWidth: 760 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 34,
                  md: 52,
                },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-1px",
              }}
            >
              Welcome Back, Sam 👋
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontSize: 20,
                lineHeight: 1.8,
                color: "rgba(255,255,255,.92)",
                maxWidth: 650,
              }}
            >
              Manage your notes, upload study materials,
              organize your resources and access everything
              from one centralized dashboard.
            </Typography>

            <Box
              sx={{
                mt: 5,
                display: "flex",
                gap: 2.5,
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

                  px: 4.5,
                  py: 1.5,

                  borderRadius: "14px",

                  textTransform: "none",

                  fontWeight: 700,

                  fontSize: 15,

                  boxShadow:
                    "0 10px 30px rgba(0,0,0,.18)",

                  "&:hover": {
                    bgcolor: "#F8FAFC",
                    transform: "translateY(-3px)",
                  },

                  transition: ".25s",
                }}
              >
                Upload Notes
              </Button>

              <Button
                variant="outlined"
                startIcon={<MenuBookRoundedIcon />}
                onClick={() => navigate("/notes")}
                sx={{
                  color: "#fff",

                  border: "1.5px solid rgba(255,255,255,.45)",

                  px: 4.5,
                  py: 1.5,

                  borderRadius: "14px",

                  textTransform: "none",

                  fontWeight: 700,

                  fontSize: 15,

                  backdropFilter: "blur(12px)",

                  "&:hover": {
                    bgcolor: "rgba(255,255,255,.10)",
                    borderColor: "#fff",
                    transform: "translateY(-3px)",
                  },

                  transition: ".25s",
                }}
              >
                Browse Notes
              </Button>
            </Box>
          </Box>

          {/* RIGHT */}

          <Box
            sx={{
              minWidth: 280,

              display: "flex",
              alignItems: "center",
              gap: 2,

              bgcolor: "rgba(255,255,255,.15)",

              backdropFilter: "blur(18px)",

              border: "1px solid rgba(255,255,255,.25)",

              borderRadius: "18px",

              px: 3.5,
              py: 2.5,

              boxShadow:
                "0 10px 25px rgba(0,0,0,.10)",
            }}
          >
            <CalendarMonthRoundedIcon
              sx={{
                fontSize: 38,
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  opacity: .8,
                  mb: .3,
                }}
              >
                Today's Date
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 17,
                }}
              >
                {today}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WelcomeHeader;