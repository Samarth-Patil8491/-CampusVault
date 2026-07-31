import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Avatar,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        bgcolor: "white",
        color: "#111827",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#2563EB"
        >
          CampusVault
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <SearchIcon
              sx={{
                position: "absolute",
                left: 12,
                top: 12,
                color: "gray",
              }}
            />

            <TextField
              size="small"
              placeholder="Search notes..."
              sx={{
                width: 320,
                "& input": {
                  pl: 4,
                },
              }}
            />
          </Box>

          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>

          <Avatar sx={{ bgcolor: "#2563EB" }}>
            S
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;