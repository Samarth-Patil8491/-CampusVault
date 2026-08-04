import {
  Paper,
  Typography,
  Box,
  Chip,
} from "@mui/material";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

const announcements = [
  {
    title: "Mid Semester Timetable Released",
    date: "Today",
  },
  {
    title: "New DBMS Notes Uploaded",
    date: "Yesterday",
  },
  {
    title: "Java Lab Manual Available",
    date: "2 days ago",
  },
  {
    title: "Campus Placement Drive",
    date: "3 days ago",
  },
];

function Announcements() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        Latest Announcements
      </Typography>

      {announcements.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 45,
              height: 45,
              borderRadius: 3,
              bgcolor: "#EEF4FF",
              color: "#2563EB",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CampaignRoundedIcon />
          </Box>

          <Box flex={1}>
            <Typography fontWeight={600}>
              {item.title}
            </Typography>

            <Chip
              label={item.date}
              size="small"
              sx={{
                mt: 1,
                bgcolor: "#EEF4FF",
                color: "#2563EB",
              }}
            />
          </Box>
        </Box>
      ))}
    </Paper>
  );
}

export default Announcements;