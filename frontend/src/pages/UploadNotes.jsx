import { useState } from "react";
import Layout from "../components/Layout";
import { uploadNote } from "../services/noteService";

import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UploadNotes() {

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    department: "",
    semester: "",
    uploadedBy: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!file) {
      toast.error("Please select a PDF file");
      return;
    }

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("file", file);

    try {

      const res = await uploadNote(data);

      toast.success(res.data.message);

      setFormData({
        title: "",
        subject: "",
        department: "",
        semester: "",
        uploadedBy: "",
      });

      setFile(null);

    } catch {

      toast.error("Upload Failed");

    }

  };

  return (

    <Layout>

      <ToastContainer />

      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Upload Notes
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Share your study materials with other students.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 5,
          borderRadius: 5,
          border: "1px solid #E5E7EB",
        }}
      >

        <form onSubmit={handleSubmit}>

          <Paper
            component="label"
            elevation={0}
            sx={{
              border: "2px dashed #2563EB",
              borderRadius: 4,
              p: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              background: "#F8FAFF",
              mb: 4,

              "&:hover": {
                background: "#EEF4FF",
              },
            }}
          >

            <input
              hidden
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />

            {file ? (
              <>
                <PictureAsPdfRoundedIcon
                  color="error"
                  sx={{ fontSize: 70 }}
                />

                <Typography
                  mt={2}
                  fontWeight={600}
                >
                  {file.name}
                </Typography>
              </>
            ) : (
              <>
                <CloudUploadRoundedIcon
                  sx={{
                    fontSize: 70,
                    color: "#2563EB",
                  }}
                />

                <Typography
                  mt={2}
                  fontWeight={700}
                >
                  Drag & Drop PDF
                </Typography>

                <Typography color="text.secondary">
                  or click to browse
                </Typography>
              </>
            )}

          </Paper>

          <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Uploaded By"
                name="uploadedBy"
                value={formData.uploadedBy}
                onChange={handleChange}
              />
            </Grid>

          </Grid>

          <Box
            textAlign="right"
            mt={4}
          >

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.5,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Upload Notes
            </Button>

          </Box>

        </form>

      </Paper>

    </Layout>

  );

}

export default UploadNotes;
