import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import coreTheme from "./coreTheme";

// Create a theme instance.
const theme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    background: {
      default: "#F0F2F5",
      paper: "#ffffff"
    },
    type: "light"
  },
  overrides: {
    ...coreTheme.overrides,
    MuiSnackbarContent: {
      root: {
        color: "rgba(0, 0, 0, 0.87)",
        backgroundColor: "#F8F9FE",
        padding: "0px",
        minWidth: "auto",
        "@media (min-width: 960px)": {
          minWidth: "500px"
        }
      },
      message: {
        padding: "0px"
      },
      action: {
        marginRight: "0px"
      }
    },
    headerContainer: {
      root: {
        backgroundColor: "#FF00aa"
      }
    },
    MuiTooltip: {
      tooltip: {
        background: "#fff !important",
        border: "1px solid #000",
        borderRadius: "8px",
        color: "#000",
        fontSize: "13px"
      }
    }
  }
});

export default theme;