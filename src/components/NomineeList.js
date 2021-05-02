import { useStyles } from "../styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const NomineeList = ({ nomineeList, handleDelete }) => {
  const classes = useStyles();

  return (
    <>
      <List
        className={classes.nomineeList}
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
