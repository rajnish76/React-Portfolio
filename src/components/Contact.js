import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  TextField,
  withStyles,
  Button,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import * as emailjs from "emailjs-com";

import Navbar from "./Navbar";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  },
})(TextField);

const useStyle = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    background: "#233",
    padding: "2rem",
    [theme.breakpoints.down('sm')]: {
      width: "16rem",
    },
  },
  button: {
    color: "tomato",
    borderColor: "tomato",
  },
}));

const Contact = () => {
  const classes = useStyle();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
      from_name: name,
      to_name: "rajnishsrivastava5888@gmail.com",
      subject: "Portfolio Contact",
      message_html: name,
      message_html1: email,
      message_html2: des,
    };

    emailjs
      .send(
        "gmail",
        "template_mKrqbD0J",
        templateParams,
        "user_wmiaVadrfbMFRMjZrQgrn"
      )
      .then(() => {
        setLoading(true);
        history.push("/");
      });
  };

  return (
    <Box component="div">
      <Navbar />
      {loading === false ? (
        <Grid container className="contact_form_class">
          <Box
            component="form"
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                color: "tomato",
              }}
            >
              Contact me...
            </Typography>
            <InputField
              label="Name"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <br />
            <InputField
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <InputField
              label="Description"
              variant="outlined"
              fullWidth={true}
              multiline
              rows={4}
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
              value={des}
              onChange={(event) => setDes(event.target.value)}
            />
            <br /> <br />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
              className={classes.button}
              type="onSubmit"
            >
              Contact
            </Button>
          </Box>
        </Grid>
      ) : (
        <Box component="div" className={classes.form}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Contact;
