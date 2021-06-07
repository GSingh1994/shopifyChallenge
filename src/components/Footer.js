import { Typography } from "@material-ui/core";
import { useStyles } from "../styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="body1" color="inherit">
        Made with ☕
      </Typography>
    </div>
  );
}
