import { useStyles } from "../styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
            <ListItem divider button key={movie.key}>
              <ListItemText primary={movie.title} />
              <ListItemIcon>
                <DeleteIcon onClick={() => handleDelete(movie.key)} />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default NomineeList;
