import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";

import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";

const drawerWidth = 240;

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
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    zIndex: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
}));

const NomineeList = ({ nomineeList, handleDelete }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Typography variant="h5" color="initial" align="center">
        Nominees
      </Typography>
      {nomineeList.map((movie) => (
        <Card className={classes.card} key={movie.key}>
          <CardContent>{movie.title}</CardContent>
          <Button
            onClick={() => handleDelete(movie.key)}
            color="secondary"
            size="small"
          >
            Remove
          </Button>
        </Card>
      ))}
    </div>
  );
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Shoppies
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
            anchor="right"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

export default NomineeList;
