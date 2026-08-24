import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAllNotes } from "../services/noteService";

import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Chip,
  Box,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

function ViewNotes() {

  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("");

  const [semester, setSemester] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {

    try {

      const res = await getAllNotes();

      setNotes(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const filteredNotes = notes.filter((note) => {

    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.subject.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "" ||
      note.department === department;

    const matchesSemester =
      semester === "" ||
      String(note.semester) === semester;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesSemester
    );

  });

  return (

    <Layout>

      <Typography
        variant="h4"
        fontWeight={700}
      >
        Browse Notes
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Find study materials shared by students across departments.
      </Typography>

      {/* ================= FILTER CARD ================= */}

      <Paper
  elevation={0}
  sx={{
    width: "100%",
    maxWidth: "1150px",
    mx: "auto",
    borderRadius: 5,
    p: 4,
    mb: 5,
    border: "1px solid #E5E7EB",
    boxShadow: "0 10px 25px rgba(15,23,42,.05)",
  }}
>

        <Typography
          fontWeight={700}
          fontSize={20}
          mb={3}
        >
          Search Notes
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>

            <TextField
              fullWidth

              placeholder="Search by title or subject..."

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }

              InputProps={{
                startAdornment: (

                  <InputAdornment position="start">

                    <SearchRoundedIcon />

                  </InputAdornment>

                ),
              }}
            />

          </Grid>

          <Grid item xs={6} md={3}>

            <FormControl fullWidth>

              <InputLabel>

                Department

              </InputLabel>

              <Select
                value={department}
                label="Department"
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
              >

                <MenuItem value="">
                  All
                </MenuItem>

                <MenuItem value="CSE">
                  CSE
                </MenuItem>

                <MenuItem value="ISE">
                  ISE
                </MenuItem>

                <MenuItem value="ECE">
                  ECE
                </MenuItem>

                <MenuItem value="AIML">
                  AIML
                </MenuItem>

              </Select>

            </FormControl>

          </Grid>

          <Grid item xs={6} md={3}>

            <FormControl fullWidth>

              <InputLabel>

                Semester

              </InputLabel>

              <Select
                value={semester}
                label="Semester"
                onChange={(e) =>
                  setSemester(e.target.value)
                }
              >

                <MenuItem value="">
                  All
                </MenuItem>

                {[1,2,3,4,5,6,7,8].map((sem)=>(

                  <MenuItem
                    key={sem}
                    value={String(sem)}
                  >

                    Semester {sem}

                  </MenuItem>

                ))}

              </Select>

            </FormControl>

          </Grid>

        </Grid>

      </Paper>

      {/* ================= NOTES ================= */}

      {

        filteredNotes.length === 0 ?

        (

          <Paper
            elevation={0}
            sx={{
              borderRadius: 5,
              p: 8,
              textAlign: "center",
              border: "1px solid #E5E7EB",
            }}
          >

            <PictureAsPdfRoundedIcon
              sx={{
                fontSize: 90,
                color: "#D1D5DB",
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
              fontWeight={700}
            >
              No Notes Found
            </Typography>

            <Typography
              color="text.secondary"
              mt={1}
            >
              Try changing your search or filters.
            </Typography>

          </Paper>

        )

        :

        (

          <Grid
  container
  spacing={4}
  justifyContent="center"
  sx={{
    maxWidth: "1200px",
    mx: "auto",
  }}
>

            {filteredNotes.map((note) => (

             <Grid
  item
  xs={12}
  sm={6}
  md={6}
  lg={4}
  xl={3}
  key={note.id}
>
                                <Paper
  elevation={0}
  sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "18px",
    border: "1px solid #E5E7EB",
    background: "#fff",
    transition: ".3s",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 18px 45px rgba(37,99,235,.15)",
    },
  }}
>

  {/* Header */}

  <Box
    sx={{
      background:
        "linear-gradient(135deg,#2563EB,#4F46E5)",
      color: "#fff",
      p: 2.5,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <PictureAsPdfRoundedIcon
      sx={{
        fontSize: 48,
      }}
    />

    <Chip
      label={note.department}
      sx={{
        bgcolor: "#fff",
        color: "#2563EB",
        fontWeight: 700,
      }}
    />
  </Box>

  {/* Body */}

  <Box
    sx={{
      p: 3,
      flexGrow: 1,
    }}
  >

    <Typography
      variant="h6"
      fontWeight={700}
      mb={2}
    >
      {note.title}
    </Typography>

    <Box
      display="flex"
      alignItems="center"
      gap={1}
      mb={1.5}
    >
      <MenuBookRoundedIcon
        color="primary"
      />

      <Typography color="text.secondary">
        {note.subject}
      </Typography>
    </Box>

    <Box
      display="flex"
      alignItems="center"
      gap={1}
    >
      <SchoolRoundedIcon
        color="primary"
      />

      <Typography color="text.secondary">
        Semester {note.semester}
      </Typography>
    </Box>

  </Box>

  {/* Footer */}

  <Box
    sx={{
      p: 2.5,
      borderTop: "1px solid #E5E7EB",
    }}
  >

    <Button
      fullWidth
      variant="contained"
      startIcon={<DownloadRoundedIcon />}
      href={`/api/files/download/${note.fileName}`}
      sx={{
        borderRadius: "12px",
        py: 1.2,
        textTransform: "none",
        fontWeight: 700,
        fontSize: 15,
      }}
    >
      Download PDF
    </Button>

  </Box>

</Paper>

              </Grid>

            ))}

          </Grid>

        )

      }

    </Layout>

  );

}

export default ViewNotes;