import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import { Link, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardRoundedIcon />,
    path: "/dashboard",
  },
  {
    title: "Upload Notes",
    icon: <CloudUploadRoundedIcon />,
    path: "/upload",
  },
  {
    title: "Browse Notes",
    icon: <MenuBookRoundedIcon />,
    path: "/notes",
  },
  {
    title: "My Uploads",
    icon: <FolderRoundedIcon />,
    path: "/my-uploads",
  },
  {
    title: "Profile",
    icon: <PersonRoundedIcon />,
    path: "/profile",
  },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

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
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 3,
        }}
      >
        {/* Logo */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 5,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 58,
              height: 58,
            }}
          >
            <SchoolRoundedIcon />
          </Avatar>

          <Box>
            <Typography fontWeight={700} fontSize={24}>
              CampusVault
            </Typography>

            <Typography color="text.secondary" fontSize={14}>
              Student Portal
            </Typography>
          </Box>
        </Box>

        {/* Menu */}

        <List sx={{ p: 0 }}>
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <ListItemButton
                key={item.title}
                component={Link}
                to={item.path}
                sx={{
                  mb: 1.2,
                  py: 1.5,
                  borderRadius: 4,

                  bgcolor: active ? "#2563EB" : "transparent",

                  color: active ? "#FFFFFF" : "#374151",

                  "&:hover": {
                    bgcolor: active ? "#1D4ED8" : "#EFF6FF",
                  },

                  transition: ".25s",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 42,
                    color: active ? "#FFFFFF" : "#2563EB",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: active ? 700 : 500,
                    fontSize: 15,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        {/* Push bottom section */}

        <Box sx={{ flexGrow: 1 }} />

        <Divider sx={{ mb: 3 }} />

        {/* User */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 50,
              height: 50,
            }}
          >
            S
          </Avatar>

          <Box>
            <Typography fontWeight={700}>
              Sam
            </Typography>

            <Typography
              fontSize={13}
              color="text.secondary"
            >
              Student
            </Typography>
          </Box>
        </Box>

        {/* Logout */}

        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 3,

            "&:hover": {
              bgcolor: "#F3F4F6",
            },
          }}
        >
          <ListItemIcon>
            <LogoutRoundedIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
}

export default Sidebar;