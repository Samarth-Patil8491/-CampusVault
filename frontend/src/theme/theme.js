import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {

    primary: {
      main: "#2563EB",
    },

    secondary: {
      main: "#4F46E5",
    },

    background: {
      default: "#F5F7FB",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },

  },

  typography: {

    fontFamily: [
      "Inter",
      "Roboto",
      "sans-serif",
    ].join(","),

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },

  },

  shape: {
    borderRadius: 16,
  },

  components: {

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },

    MuiButton: {
      styleOverrides: {

        root: {
          borderRadius: 12,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: "15px",
          boxShadow: "none",

          "&:hover": {
            boxShadow: "0 8px 20px rgba(37,99,235,.25)",
          },

        },

      },

    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {

      styleOverrides: {

        root: {

          borderRadius: 14,

          background: "#fff",

        },

      },

    },

    MuiChip: {

      styleOverrides: {

        root: {

          borderRadius: 10,
          fontWeight: 600,

        },

      },

    },

  },

});

export default theme;