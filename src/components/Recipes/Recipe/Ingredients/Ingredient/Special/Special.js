import React from "react";
import { Typography } from "@material-ui/core";
const Special = ({ special }) => {
  console.log("SPECIAL : ", special);
  return (
    <>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Specials:
        </Typography>
        <Typography
          style={{ color: "#009688" }}
          color="textSecondary"
          variant="body2"
        >
          {" "}
          {special.title}
        </Typography>
        <Typography style={{ color: "#009688" }} color="textSecondary">
          {special.type}
        </Typography>
        <Typography style={{ color: "#009688" }} color="textSecondary">
          {special.text}
        </Typography>
      </div>
    </>
  );
};

export default Special;
