import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette:{

    primary:{
      main:"#2563EB",
    },

    secondary:{
      main:"#7C3AED",
    },

    background:{
      default:"#F4F7FC",
    },

  },

  shape:{
    borderRadius:16,
  },

  typography:{
    fontFamily:"Poppins",
  },

});

export default theme;