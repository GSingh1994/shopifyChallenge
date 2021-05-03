import { useStyles } from "../styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
  Divider,
  Fade,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
const NomineeList = ({ nomineeList, handleDelete }) => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xs" className={classes.nomineeList}>
        <Typography variant="h4" color="initial" align="center" gutterBottom>
          Nominee List
        </Typography>
        <Divider />
        <List component="nav">
          {nomineeList.map((movie) => (
            <Fade in key={movie.key}>
              <ListItem divider button>
                <ListItemText primary={movie.title} />
                <ListItemIcon className={classes.removeBtn}>
                  <RemoveCircleIcon onClick={() => handleDelete(movie.key)} />
                </ListItemIcon>
              </ListItem>
            </Fade>
          ))}
        </List>
      </Container>
    </>
  );
};

export default NomineeList;
