import Layout from "../components/Layout";

import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  Chip,
} from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";

function Profile() {
  const user = {
    name: localStorage.getItem("fullName") || "Student",
    email: localStorage.getItem("email") || "Not available",
    department: localStorage.getItem("department") || "Not available",
    semester: localStorage.getItem("semester") || "Not available",
    role: localStorage.getItem("role") || "STUDENT",
  };

  const initials = user.name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <Layout>
      <Typography variant="h4" fontWeight={700} mb={4}>
        My Profile
      </Typography>

      <Grid container spacing={4}>

        {/* PROFILE CARD */}

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
              background:
                "linear-gradient(135deg,#2563EB,#4F46E5)",
              color: "#fff",
              boxShadow:
                "0 18px 40px rgba(37,99,235,.18)",
            }}
          >
            <Box
              sx={{
                p: 5,
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 130,
                  height: 130,
                  mx: "auto",
                  mb: 3,
                  bgcolor: "#fff",
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: 42,
                  border:
                    "5px solid rgba(255,255,255,.25)",
                }}
              >
                {initials}
              </Avatar>

              <Typography variant="h4" fontWeight={700}>
                {user.name}
              </Typography>

              <Typography sx={{ mt: 1, opacity: 0.9 }}>
                {user.role}
              </Typography>

              <Chip
                label={user.department}
                sx={{
                  mt: 3,
                  bgcolor: "#fff",
                  color: "#2563EB",
                  fontWeight: 700,
                }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* ACCOUNT INFORMATION */}

        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 5,
              border: "1px solid #E5E7EB",
              boxShadow:
                "0 10px 30px rgba(15,23,42,.05)",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              mb={3}
            >
              Account Information
            </Typography>

            {/* NAME */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom:
                  "1px solid #E5E7EB",
              }}
            >
              <Box>
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  Full Name
                </Typography>

                <Typography
                  fontWeight={600}
                  mt={0.5}
                >
                  {user.name}
                </Typography>
              </Box>

              <BadgeRoundedIcon color="primary" />
            </Box>

            {/* EMAIL */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom:
                  "1px solid #E5E7EB",
              }}
            >
              <Box>
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  Email Address
                </Typography>

                <Typography
                  fontWeight={600}
                  mt={0.5}
                >
                  {user.email}
                </Typography>
              </Box>

              <EmailRoundedIcon color="primary" />
            </Box>

            {/* DEPARTMENT */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom:
                  "1px solid #E5E7EB",
              }}
            >
              <Box>
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  Department
                </Typography>

                <Typography
                  fontWeight={600}
                  mt={0.5}
                >
                  {user.department}
                </Typography>
              </Box>

              <ApartmentRoundedIcon color="primary" />
            </Box>

            {/* SEMESTER */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom:
                  "1px solid #E5E7EB",
              }}
            >
              <Box>
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  Semester
                </Typography>

                <Typography
                  fontWeight={600}
                  mt={0.5}
                >
                  Semester {user.semester}
                </Typography>
              </Box>

              <SchoolRoundedIcon color="primary" />
            </Box>

            {/* ROLE */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
              }}
            >
              <Box>
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  Account Type
                </Typography>

                <Typography
                  fontWeight={600}
                  mt={0.5}
                >
                  {user.role}
                </Typography>
              </Box>

              <BadgeRoundedIcon color="primary" />
            </Box>

          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Profile;