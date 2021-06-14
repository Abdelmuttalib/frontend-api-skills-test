import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useLocation } from "react-router-dom";

import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    backgroundColor: "#000",
    // color: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    color: "#009688",
    // color: "#fff",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="secondary">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="initial"
          >
            FrontEnd Api Skills Test
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname !== "/" && (
              <IconButton
                component={Link}
                to="/"
                aria-label="Show cart items"
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
