import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/AuthService";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter your email and password");
      return;
    }

    try {
      const response = await login(formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "email",
        response.data.email || formData.email
      );
      localStorage.setItem(
        "fullName",
        response.data.fullName || "Student"
      );
      localStorage.setItem(
        "role",
        response.data.role || "STUDENT"
      );
      localStorage.setItem(
        "department",
        response.data.department || ""
      );
      localStorage.setItem(
        "semester",
        response.data.semester || ""
      );

      toast.success(
        response.data.message || "Login successful"
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 700);

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
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
          maxWidth: 1150,
          minHeight: 700,
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
            fontSize={23}
            sx={{ opacity: 0.9 }}
          >
            Store, manage and share study
            materials with students from
            your department.
          </Typography>
        </Box>

        {/* RIGHT */}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            p: 6,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 420,
            }}
          >

            <Typography
              variant="h3"
              fontWeight="bold"
            >
              Welcome Back
            </Typography>

            <Typography
              color="text.secondary"
              mb={5}
            >
              Sign in to continue
            </Typography>

            <form onSubmit={handleSubmit}>

              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 4,
                  py: 1.6,
                  borderRadius: 10,
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                Sign In
              </Button>

            </form>

            <Typography
              mt={4}
              textAlign="center"
            >
              Don't have an account?{" "}

              <Link
                to="/register"
                style={{
                  color: "#2563EB",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Register
              </Link>
            </Typography>

          </Box>
        </Box>

      </Paper>
    </Box>
  );
}

export default Login;
