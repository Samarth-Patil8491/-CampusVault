import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  InputBase,
  Badge,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const drawerWidth = 260;

function Navbar() {
  return (
    <AppBar
  position="fixed"
  elevation={0}
  sx={{
    left: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    bgcolor: "#fff",
    color: "#111827",
    borderBottom: "1px solid #E5E7EB",
    boxShadow: "none",
    zIndex: 1200,
  }}
>
      <Toolbar
        sx={{
          height: 90,
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left */}

        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
          >
            Dashboard
          </Typography>

          <Typography
            color="text.secondary"
            fontSize={22}
          >
            Welcome back 👋
          </Typography>
        </Box>

        {/* Right */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: 360,
              px: 2,
              py: 0.7,
              borderRadius: 10,
              border: "1px solid #E5E7EB",
            }}
          >
            <SearchIcon color="disabled" />

            <InputBase
              placeholder="Search..."
              sx={{
                ml: 1,
                flex: 1,
              }}
            />
          </Paper>

          <IconButton>
            <Badge
              badgeContent={3}
              color="error"
            >
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 48,
              height: 48,
            }}
          >
            S
          </Avatar>

          <Box>
            <Typography fontWeight={700}>
              Sam
            </Typography>

            <Typography
              color="text.secondary"
              fontSize={14}
            >
              Student
            </Typography>
          </Box>

          <KeyboardArrowDownRoundedIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;