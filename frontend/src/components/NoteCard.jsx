import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";

function NoteCard({ note }) {

  return (

    <Card
      sx={{
        borderRadius:4,
        p:1,
        transition:.3,

        "&:hover":{
          transform:"translateY(-5px)",
          boxShadow:8
        }
      }}
    >

      <CardContent>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >

          <PictureAsPdfIcon
            color="error"
            sx={{fontSize:45}}
          />

          <div>

            <Typography fontWeight={700}>
              {note.title}
            </Typography>

            <Typography color="text.secondary">
              {note.subject}
            </Typography>

          </div>

        </Stack>

        <Stack
          direction="row"
          spacing={1}
          mt={2}
        >

          <Chip
            label={note.department}
            color="primary"
          />

          <Chip
            label={`Sem ${note.semester}`}
          />

        </Stack>

        <Typography
          mt={2}
          color="text.secondary"
        >

          Uploaded by

          {" "}

          {note.uploadedBy}

        </Typography>

        <Button

          fullWidth

          variant="contained"

          startIcon={<DownloadIcon />}

          sx={{
            mt:3,
            borderRadius:3
          }}

        >
          Download
        </Button>

      </CardContent>

    </Card>

  );

}

export default NoteCard;