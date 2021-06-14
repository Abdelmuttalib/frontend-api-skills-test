import React from "react";
import { Typography } from "@material-ui/core";

const Direction = ({ direction }) => {
  return (
    <>
      <Typography paragraph variant="body1">
        {direction.instructions}
        {direction.optional && (
          <Typography color="textSecondary">(optional)</Typography>
        )}
      </Typography>
    </>
  );
};

export default Direction;
