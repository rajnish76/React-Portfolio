import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20vw",
    textAlign: "center",
    zIndex: 1,
  },
});

const Error = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.center}>
      <Typography variant="h2">Page Not found</Typography>
    </Paper>
  );
};

export default Error;
