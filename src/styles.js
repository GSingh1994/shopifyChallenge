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
        padding: "0 10rem",
      },
    },
    header: {
      margin: "3rem",
      diplay: "flex",
    },
    textField: {
      marginBottom: theme.spacing(2),
    },
    movieList: {},
    banner: {
      marginBottom: "1rem",
      height: "4rem",
    },
    cardContent: {
      padding: 4,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      },
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    cardMedia: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      paddingTop: "86.25%",
    },
    cardTitle: {
      [theme.breakpoints.down("xs")]: {
        margin: 0,
        fontSize: "0.8rem",
      },
      fontWeight: "bold",
      padding: "0 9px",
      marginTop: 9,
    },
    smallCard: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    addNomineeBtn: {
      margin: "0 auto",
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
