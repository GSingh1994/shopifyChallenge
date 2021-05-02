import { makeStyles, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#a35709",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appContainer: {
    [theme.breakpoints.up("sm")]: {
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
  movieList: {
    // [theme.breakpoints.down("xs")]: {
    //   width: "23rem",
    // },
  },
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
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  cardMedia: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    // paddingTop: "56.25%",
    height: 345,
    marginBottom: theme.spacing(2),
  },
  cardTitle: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      fontSize: "0.8rem",
    },
    fontWeight: "bold",
    padding: "0 9px",
    // height: "4rem",
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
    // [theme.breakpoints.down("xs")]: {
    //   position: "static",
    // },
    // position: "absolute",
    // right: "3.5rem",
    // top: "15rem",
    // width: "25rem",
    // backgroundColor: "#424242",
    // borderRadius: "3px",
    // height: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2rem",
    },
  },
  movieGrid: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
}));

export { useStyles, theme };
