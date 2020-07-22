import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import project1 from "../assets/react-native.png";
import project2 from "../assets/node.js.png";
import project3 from "../assets/mongo.jpeg";
import project4 from "../assets/react.png";
import Navbar from "./Navbar";

const useStyle = makeStyles({
  mainContainer: {
    background: "#233",
    paddingTop: 10,
  },
  cardConatiner: {
    maxWidth: 345,
    marginBottom: 27,
  },
});

const port = [
  {
    title: "React-Native + Redux",
    des:
      "It is used to develop native applications for Android, iOS, Web and UWP.",
    img: project1,
  },
  {
    title: "Node.js + Express.js",
    des:
      "Node.js is an open-source, JavaScript runtime environment that executes JScript code outside a web browser.",
    img: project2,
  },
  {
    title: "MongoDB",
    des:
      "MongoDB is a cross-platform document-oriented database, classified as a NoSQL database.",
    img: project3,
  },
  {
    title: "React.js + Redux",
    des:
      "React can be used as a base in the development of single-page or mobile applications.",
    img: project4,
  },
];

const Technology = () => {
  const classes = useStyle();
  return (  
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" align="center">
          {port.map((item, key) => {
            return (
              <Grid item xs={12} sm={8} md={6} key={key}>
                <Card className={classes.cardConatiner}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Project 1"
                      height="160"
                      image={item.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.des}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Technology;
