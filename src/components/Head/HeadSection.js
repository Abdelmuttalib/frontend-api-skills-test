import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/2813132/pexels-photo-2813132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)`,
    height: "80vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "contain",
    position: "absolute",
    top: "0px",
    right: "0px",
    fontStyle: "italic",
    fontWeight: "800",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

const HeadSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <Typography variant="h2" style={{ color: "#fff", padding: "3rem" }}>
        THE <span style={{ color: "#009688" }}>CREPERIE</span> RESTAURANT
      </Typography>
    </div>
  );
};

export default HeadSection;
