import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.3rem",
  },
  drawer: {
    width: "20rem",
    zIndex: 0,
    paddingTop: "8rem",
  },
}));
const NomineeList = ({ nomineeList }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        classes={{ paper: classes.drawer }}
        variant="permanent"
        anchor="right"
      >
        <Typography variant="h5" color="initial" align="center">
          Nominees
        </Typography>
        {nomineeList.map((movie) => (
          <Card className={classes.card} key={movie.key}>
            <CardContent>{movie.title}</CardContent>
            <Button color="secondary" size="small">
              Remove
            </Button>
          </Card>
        ))}
      </Drawer>
    </>
  );
};

export default NomineeList;
