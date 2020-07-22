import React from "react";
import { Box, Avatar, Typography, makeStyles, Grid } from "@material-ui/core";
import Typed from "react-typed";

import avatar from "../assets/avatar.png";

const useStyle = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#ee4035",
    textShadow: "4px 4px #000",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar src={avatar} alt="rajnish" className={classes.avatar} />
      </Grid>
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Rajnish Srivastava"]} typeSpeed={30} />
      </Typography>
      <br />
      <Typography variant="h4" className={classes.subtitle}>
        <Typed
          strings={["React-Native Developer", "MERN Stack Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
