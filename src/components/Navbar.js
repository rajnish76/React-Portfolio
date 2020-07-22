import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuOutlined,
  Home,
  AssignmentInd,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer";

import avatar from "../assets/avatar.png";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#222",
  },
  menu: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "linear-gradient(45deg,#FE6B8B 30%,#FF8E53 90%)",
    height: "100vh",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Technology",
    listPath: "/technology",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [slider]: open });
  };

  const sideList = (slide) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider("right", false)}
    >
      <Avatar src={avatar} alt="rajnish" className={classes.avatar} />
      <Divider light />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
            <ListItemText primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuOutlined className={classes.menu} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Portfolio
            </Typography>
            <Drawer
              open={state["right"]}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
