import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getMyNotes, updateNote } from "../services/noteService";

import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

function EditNote() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({
    title: "",
    subject: "",
    department: "",
    semester: "",
  });

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {

    const email = localStorage.getItem("email");

    const res = await getMyNotes(email);

    const selected = res.data.find(
      n => String(n.id) === id
    );

    if(selected){
      setNote(selected);
    }

  };

  const handleChange = (e) => {

    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateNote(id, note);

    navigate("/my-uploads");

  };

  return (

    <Layout>

      <Paper
        sx={{
          maxWidth:700,
          mx:"auto",
          p:4,
          borderRadius:5
        }}
      >

        <Typography
          variant="h4"
          fontWeight={700}
          mb={3}
        >
          Edit Note
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            fullWidth
            label="Title"
            name="title"
            value={note.title}
            onChange={handleChange}
            sx={{mb:3}}
          />

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={note.subject}
            onChange={handleChange}
            sx={{mb:3}}
          />

          <TextField
            fullWidth
            select
            label="Department"
            name="department"
            value={note.department}
            onChange={handleChange}
            sx={{mb:3}}
          >

            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="ISE">ISE</MenuItem>
            <MenuItem value="ECE">ECE</MenuItem>
            <MenuItem value="AIML">AIML</MenuItem>

          </TextField>

          <TextField
            fullWidth
            type="number"
            label="Semester"
            name="semester"
            value={note.semester}
            onChange={handleChange}
            sx={{mb:4}}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Save Changes
          </Button>

        </form>

      </Paper>

    </Layout>

  );

}

export default EditNote;