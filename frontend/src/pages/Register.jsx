import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/AuthService";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";
import ApartmentIcon from "@mui/icons-material/Apartment";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    usn: "",
    email: "",
    password: "",
    university: "",
    department: "",
    semester: "",
    section: "",
    role: "STUDENT",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await register(formData);

      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#2563EB,#4F8EF7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >

      <ToastContainer />

      <Paper
        elevation={12}
        sx={{
          width: "100%",
          maxWidth: 1250,
          display: "flex",
          overflow: "hidden",
          borderRadius: 6,
        }}
      >

        {/* LEFT */}

        <Box
          sx={{
            flex: 1,
            background:
              "linear-gradient(135deg,#2563EB,#4F8EF7)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 8,
          }}
        >

          <SchoolIcon sx={{ fontSize: 80 }} />

          <Typography
            variant="h2"
            fontWeight="bold"
            mt={4}
          >
            CampusVault
          </Typography>

          <Typography
            mt={4}
            fontSize={22}
            sx={{ opacity: .9 }}
          >
            Join thousands of students sharing
            quality study materials with CampusVault.
          </Typography>

        </Box>

        {/* RIGHT */}

        <Box
          sx={{
            flex: 1,
            p: 6,
            background: "#fff",
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
            mb={1}
          >
            Create Account
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            Register to continue
          </Typography>

          <form onSubmit={handleSubmit}>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="USN"
                  name="usn"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="University"
                  name="university"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Department"
                  name="department"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ApartmentIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={6} md={3}>
                <TextField
                  fullWidth
                  select
                  label="Semester"
                  name="semester"
                  onChange={handleChange}
                >
                  {[1,2,3,4,5,6,7,8].map((sem)=>(
                    <MenuItem key={sem} value={sem}>
                      {sem}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={6} md={3}>
                <TextField
                  fullWidth
                  label="Section"
                  name="section"
                  onChange={handleChange}
                />
              </Grid>

            </Grid>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt:4,
                py:1.6,
                borderRadius:10,
                fontSize:18,
              }}
            >
              Create Account
            </Button>

          </form>

          <Typography
            mt={3}
            textAlign="center"
          >
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color:"#2563EB",
                fontWeight:600,
                textDecoration:"none",
              }}
            >
              Login
            </Link>
          </Typography>

        </Box>

      </Paper>

    </Box>

  );

}

export default Register;