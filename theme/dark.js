import { createTheme } from "@material-ui/core/styles";
import coreTheme from "./coreTheme";

// Create a theme instance.
const theme = createTheme({
  ...coreTheme,
  shape: {
    borderRadius: "2px",
  },
  shadows: ["none"],
  palette: {
    ...coreTheme.palette,
    background: {
      default: "#000",
      paper: "rgb(25, 33, 56)"
    },
    primary: {
      main: "#FFFFFF"
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "#7E99B0",
    },
    type: "dark"
  },
  overrides: {
    ...coreTheme.overrides,
    MuiSnackbarContent: {
      root: {
        color: "#fff",
        backgroundColor: "#2A2E3C",
        padding: "0px",
        minWidth: "auto",
        "@media (min-width: 960px)": {
          minWidth: "400px"
        }
      },
      message: {
        padding: "0px"
      },
      action: {
        marginRight: "0px"
      }
    },
    MuiTooltip: {
      tooltip: {
        background: "#FFF !important",
        border: "1px solid #fff",
        borderRadius: "8px",
        color: "#000",
        fontSize: "13px"
      }
    },
    MuiButton: {
      root: {
        backgroundColor: "black !important",
        border: "1px solid rgba(255, 255, 255, .2) !important",
        borderRadius: "2px !important",
      },
      label: {
        color: "white",
      }
    },
    MuiPaper: {
      root: {
        padding: "none !important",
        border: "1px solid rgba(255, 255, 255, .2) !important",
        backgroundColor: "#000"
      }
    },
    MuiCircularProgress: {
      svg: {
        color: "white"
      }
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
    MuiInput: {
      disableUnderline: true,
    }
  }
});

export default theme;
