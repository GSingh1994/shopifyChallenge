import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
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

const NomineeList = ({ nomineeList, handleDelete }) => {
  const classes = useStyles();

  return (
    <>
      <List
        className={classes.root}
        component="nav"
        aria-label="main mailbox folders"
      >
        {nomineeList.map((movie) => (
          <ListItem button key={movie.key}>
            <ListItemText primary={movie.title} />
            <ListItemIcon>
              <DeleteIcon
                color="secondary"
                onClick={() => handleDelete(movie.key)}
              />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NomineeList;
