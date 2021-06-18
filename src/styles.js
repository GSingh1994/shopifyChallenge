import { makeStyles, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#a35709",
    },
  },
});

const useStyles = makeStyles(
  (theme) => ({
    appContainer: {
      [theme.breakpoints.up("lg")]: {
        padding: "0 10rem 5rem 10rem",
        minHeight: "100vh",
      },
    },
    header: {
      margin: "2rem 0",
      diplay: "flex",
    },
    footer: {
      padding: "0.1rem",
      textAlign: "center",
      backgroundColor: "black",
      [theme.breakpoints.up("sm")]: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        padding: "0.6rem",
      },
    },
    textField: {
      marginBottom: theme.spacing(2),
    },
    movieList: {},
    banner: {
      marginBottom: "2rem",
      [theme.breakpoints.down("sm")]: {
        height: "2rem",
        marginBottom: "1rem",
      },
    },
    cardContent: {
      padding: 4,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      },
    },
    cardMedia: {
      paddingTop: "100%",
    },
    cardTitle: {
      [theme.breakpoints.down("xs")]: {
        margin: 0,
      },
      fontWeight: "bold",
      padding: "0 9px",
      marginTop: 9,
    },
    addNomineeBtn: {
      margin: "0 auto",
    },
    removeBtn: {
      "&:hover": {
        color: "red",
      },
      minWidth: 0,
      transition: "all 0.3s ease",
    },
    nomineeList: {
      [theme.breakpoints.down("xs")]: {
        paddingTop: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
    },
    movieGrid: {
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
  }),
  { index: 1 }
);

export { useStyles, theme };
