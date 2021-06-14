import React from "react";
import { Typography } from "@material-ui/core";
import Direction from "./Direction/Direction";

const Directions = ({ directions }) => {
  return (
    <div
      style={{
        borderRadius: "1rem",
        backgroundColor: "#F0F0F0",
        padding: "2rem",
      }}
    >
      <Typography variant="h5">Directions:</Typography>
      <ol>
        {directions.map((direction) => (
          <li>
            <Direction key={direction.id} direction={direction} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Directions;
