import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Special from "./Special/Special";

const Ingredient = ({ ingredient }) => {
  const [special, setSpecial] = useState(null);

  const fetchSpecials = async () => {
    const getSpecials = await fetch(`http://localhost:3001/specials`);

    const allSpecials = await getSpecials.json();

    console.log("DSD: ", allSpecials);

    for (var i = 0; i < allSpecials.length; i++) {
      if (allSpecials[i].ingredientId === ingredient.uuid) {
        setSpecial(allSpecials[i]);
        console.log("SPECIAL: ", allSpecials[i]);
      }
    }
  };
  useEffect(() => {
    fetchSpecials();
  }, []);

  return (
    <>
      <Typography variant="h6">{ingredient.name}</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Measurement: {ingredient.measurement}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Amount:{ingredient.amount}
      </Typography>
      {special !== null ? <Special special={special} /> : ""}
    </>
  );
};

export default Ingredient;
