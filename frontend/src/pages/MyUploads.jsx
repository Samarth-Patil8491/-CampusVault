import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  getMyNotes,
  deleteNote,
} from "../services/noteService";
import { useNavigate } from "react-router-dom";


import {
  Paper,
  Typography,
  Grid,
  Button,
  Chip,
  Box,
} from "@mui/material";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

function MyUploads() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {

    try {

      const email = localStorage.getItem("email");

      const res = await getMyNotes(email);

      setNotes(res.data);

    } catch (err) {
      console.log(err);
    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this note?")) return;

    await deleteNote(id);

    loadNotes();

  };

  return (

    <Layout>

      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        My Uploads
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Manage all your uploaded notes.
      </Typography>

      <Grid container spacing={3}>

        {notes.map((note)=>(

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={note.id}
          >

            <Paper
              elevation={0}
              sx={{
                p:3,
                borderRadius:5,
                border:"1px solid #E5E7EB"
              }}
            >

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >

                <PictureAsPdfRoundedIcon
                  sx={{
                    fontSize:55,
                    color:"#EF4444"
                  }}
                />

                <Chip
                  label={note.department}
                  color="primary"
                />

              </Box>

              <Typography
                fontWeight={700}
                fontSize={20}
              >
                {note.title}
              </Typography>

              <Typography
                color="text.secondary"
                mb={2}
              >
                {note.subject}
              </Typography>

              <Typography mb={3}>
                Semester {note.semester}
              </Typography>

              <Box
                display="flex"
                gap={2}
              >

                <Button
    fullWidth
    variant="outlined"
    startIcon={<EditRoundedIcon />}
    onClick={() => navigate(`/edit-note/${note.id}`)}
>
    Edit
</Button>

                <Button
                  fullWidth
                  color="error"
                  variant="contained"
                  startIcon={<DeleteRoundedIcon/>}
                  onClick={()=>handleDelete(note.id)}
                >
                  Delete
                </Button>

              </Box>

            </Paper>

          </Grid>

        ))}

      </Grid>

    </Layout>

  );

}

export default MyUploads;