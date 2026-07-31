import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    text: "Upload Notes",
    icon: <CloudUploadIcon />,
    path: "/upload",
  },
  {
    text: "Browse Notes",
    icon: <MenuBookIcon />,
    path: "/notes",
  },
  {
    text: "My Uploads",
    icon: <FolderIcon />,
    path: "/myuploads",
  },
  {
    text: "Profile",
    icon: <PersonIcon />,
    path: "/profile",
  },
  {
    text: "Logout",
    icon: <LogoutIcon />,
    path: "/",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #E5E7EB",
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="#2563EB"
        >
          CampusVault
        </Typography>

        <Typography
          variant="body2"
          color="gray"
        >
          Notes Portal
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>

        {menuItems.map((item) => (

          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              mb: 1,
              borderRadius: 3,

              "&.Mui-selected": {
                backgroundColor: "#2563EB",
                color: "white",
              },

              "&.Mui-selected .MuiListItemIcon-root": {
                color: "white",
              },

              "&:hover": {
                backgroundColor: "#EAF2FF",
              },
            }}
          >

            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />

          </ListItemButton>

        ))}

      </List>
    </Drawer>
  );
}

export default Sidebar;