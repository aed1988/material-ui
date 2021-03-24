import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
