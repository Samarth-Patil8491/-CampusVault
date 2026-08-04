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
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

function Profile() {
  const user = {
    name: "Sam",
    email: "sam@gmail.com",
    department: "CSE",
    semester: 5,
    uploads: 12,
  };

  return (
    <Layout>

      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
      >
        My Profile
      </Typography>

      <Grid container spacing={4}>

        {/* ================= LEFT PROFILE CARD ================= */}

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

                  fontSize: 52,

                  border:
                    "5px solid rgba(255,255,255,.25)",
                }}
              >
                {user.name.charAt(0)}
              </Avatar>

              <Typography
                variant="h4"
                fontWeight={700}
              >
                {user.name}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  opacity: .9,
                }}
              >
                Student
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

              {/* ================= STATS ================= */}

              <Grid
                container
                spacing={2}
                mt={4}
              >

                <Grid item xs={4}>

                  <Paper
                    elevation={0}
                    sx={{
                      py: 2.5,
                      bgcolor:
                        "rgba(255,255,255,.15)",
                      backdropFilter:
                        "blur(10px)",
                      color: "#fff",
                      borderRadius: 3,
                    }}
                  >

                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >
                      {user.uploads}
                    </Typography>

                    <Typography
                      variant="body2"
                    >
                      Uploads
                    </Typography>

                  </Paper>

                </Grid>

                <Grid item xs={4}>

                  <Paper
                    elevation={0}
                    sx={{
                      py: 2.5,
                      bgcolor:
                        "rgba(255,255,255,.15)",
                      backdropFilter:
                        "blur(10px)",
                      color: "#fff",
                      borderRadius: 3,
                    }}
                  >

                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >
                      {user.semester}
                    </Typography>

                    <Typography
                      variant="body2"
                    >
                      Semester
                    </Typography>

                  </Paper>

                </Grid>

                <Grid item xs={4}>

                  <Paper
                    elevation={0}
                    sx={{
                      py: 2.5,
                      bgcolor:
                        "rgba(255,255,255,.15)",
                      backdropFilter:
                        "blur(10px)",
                      color: "#fff",
                      borderRadius: 3,
                    }}
                  >

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {user.department}
                    </Typography>

                    <Typography
                      variant="body2"
                    >
                      Department
                    </Typography>

                  </Paper>

                </Grid>

              </Grid>

            </Box>

          </Paper>

        </Grid>

        {/* ================= RIGHT ACCOUNT CARD STARTS HERE ================= */}

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
              mb={4}
            >
              Account Information
            </Typography>
                        {/* Name */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2.5,
                borderBottom: "1px solid #E5E7EB",
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

              <Avatar
                sx={{
                  bgcolor: "#EFF6FF",
                  color: "#2563EB",
                  width: 44,
                  height: 44,
                }}
              >
                {user.name.charAt(0)}
              </Avatar>
            </Box>

            {/* Email */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom: "1px solid #E5E7EB",
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

              <EmailRoundedIcon
                sx={{
                  color: "#2563EB",
                }}
              />
            </Box>

            {/* Department */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom: "1px solid #E5E7EB",
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

              <ApartmentRoundedIcon
                sx={{
                  color: "#2563EB",
                }}
              />
            </Box>

            {/* Semester */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2.5,
                borderBottom: "1px solid #E5E7EB",
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

              <SchoolRoundedIcon
                sx={{
                  color: "#2563EB",
                }}
              />
            </Box>

            {/* Uploads */}

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
                  Total Uploads
                </Typography>

                <Typography
                  fontWeight={600}
                  mt={0.5}
                >
                  {user.uploads} Notes Uploaded
                </Typography>
              </Box>

              <UploadFileRoundedIcon
                sx={{
                  color: "#2563EB",
                }}
              />
            </Box>

          </Paper>

        </Grid>

      </Grid>

    </Layout>
  );
}

export default Profile;