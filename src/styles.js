import { makeStyles, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  appContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
    marginLeft: "4rem",
  },
  textField: {
    margin: "8rem 0 3rem 0",
  },
  movieList: {
    [theme.breakpoints.down("xs")]: {
      width: "23rem",
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
    minHeight: 255,
    minWidth: 255,
  },
  cardTitle: {
    fontWeight: "bold",
    padding: "10px 5px",
  },
  addNomineeBtn: {
    margin: "0 auto",
  },
  nomineeList: {
    [theme.breakpoints.down("xs")]: {
      position: "static",
    },
    position: "absolute",
    right: "2rem",
    top: "10rem",
    width: "25rem",
    backgroundColor: "#424242",
    borderRadius: "3px",
  },
}));

export { useStyles, theme };
