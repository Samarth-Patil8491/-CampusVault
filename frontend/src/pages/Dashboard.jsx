import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import StatsCard from "../components/StatsCard";

import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DownloadIcon from "@mui/icons-material/Download";

import { getAllNotes } from "../services/noteService";

function Dashboard() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {

    try {

      const response = await getAllNotes();

      setNotes(response.data);

    } catch (err) {

      console.log(err);

    }

  };

  const totalNotes = notes.length;

  const departments = new Set(
    notes.map((note) => note.department)
  ).size;

  return (

    <Layout>

      <HeroBanner />

      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <StatsCard
            title="Total Notes"
            value={totalNotes}
            color="#2563EB"
            icon={<DescriptionIcon />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatsCard
            title="My Uploads"
            value={totalNotes}
            color="#16A34A"
            icon={<UploadFileIcon />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatsCard
            title="Departments"
            value={departments}
            color="#F97316"
            icon={<ApartmentIcon />}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatsCard
            title="Downloads"
            value="0"
            color="#7C3AED"
            icon={<DownloadIcon />}
          />
        </Grid>

      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>

        <Grid item xs={12} md={6}>

          <Paper sx={{ p: 3, borderRadius: 4 }}>

            <Typography variant="h6" fontWeight="bold">

              Recent Uploads

            </Typography>

            <List>

              {notes.slice(0,5).map((note)=>(

                <div key={note.id}>

                  <ListItem>

                    {note.title}

                  </ListItem>

                  <Divider/>

                </div>

              ))}

            </List>

          </Paper>

        </Grid>

        <Grid item xs={12} md={6}>

          <Paper sx={{ p: 3, borderRadius: 4 }}>

            <Typography variant="h6" fontWeight="bold">

              Latest Subjects

            </Typography>

            <List>

              {notes.slice(0,5).map((note)=>(

                <div key={note.id}>

                  <ListItem>

                    {note.subject}

                  </ListItem>

                  <Divider/>

                </div>

              ))}

            </List>

          </Paper>

        </Grid>

      </Grid>

    </Layout>

  );

}

export default Dashboard;