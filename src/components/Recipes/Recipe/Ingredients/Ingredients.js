import React from "react";
import { Typography } from "@material-ui/core";
import Ingredient from "./Ingredient/Ingredient";

const Ingredients = ({ ingredients }) => {
  return (
    <>
      <div
        style={{
          borderRadius: "1rem",
          backgroundColor: "#F0F0F0",
          padding: "2rem",
        }}
      >
        <Typography variant="h5">Ingredients:</Typography>
        <ul>
          {ingredients.map((ingredient) => (
            <li>
              <Ingredient key={ingredient.id} ingredient={ingredient} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Ingredients;
