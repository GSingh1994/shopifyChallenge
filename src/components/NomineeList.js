import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  drawer: {
    width: "6rem",
    marginTop: "3rem",
    zIndex: 0,
  },
});
const NomineeList = ({ nomineeList }) => {
  const classes = useStyles();
  return (
    <Box>
      <Drawer className={classes.drawer} variant="permanent" anchor="right">
        <Toolbar />
        <List>
          {nomineeList.map((movie) => (
            <ListItem key={movie.key}>
              <ListItemText>{movie.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NomineeList;
