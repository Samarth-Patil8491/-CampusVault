import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Box
        sx={{
          ml: "240px",
          mt: "64px",
          p: 4,
          minHeight: "100vh",
          backgroundColor: "#f5f7fb",
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default Layout;