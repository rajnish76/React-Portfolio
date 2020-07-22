import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timelineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        rigth: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timelineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: 0,
    textTransform: "uppercase",
  },
}));

const data = [
  {
    year: 2015,
    title: "Bachelor of Technology",
    comp: "Hindustan College of Science and Technology",
    des: "Information Technology",
    start: "2015(Aug.)",
    end: "2019(June)",
  },
  {
    year: 2019,
    title: "React-Native",
    comp: "Fourtek It Solutions Pvt Ltd",
    des:
      "Works as React-Native Developer For Both IOS and Android App Development",
    start: "2019(Oct.)",
    end: "2020(Apr.)",
  },
];

const Resume = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education & Experience
        </Typography>
        {data.map((item, key) => (
          <Box component="div" className={classes.timeline} key={key}>
            <Typography
              variant="h2"
              className={`${classes.timelineYear} ${classes.timelineItem}`}
            >
              {item.year}
            </Typography>
            <Box component="div" className={classes.timelineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {item.comp}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "white" }}
              >
                {item.des}
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                style={{ color: "tan" }}
              >
                Duration : {item.start} to {item.end}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Resume;
