import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import Recipe from "./Recipe/Recipe";
import EditRecipe from "../../EditRecipe";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop: "35rem",
    // width: "90%",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

const Recipes = ({ recipes, onSetAddRecipe, onEdit }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <EditRecipe
        handleClickOpen={handleClickOpen}
        handleCloseDialog={handleClose}
        open={true}
        // onAddRecipe={addRecipe}
      /> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            //   backgroundColor: "gray",
            marginBottom: "1.8rem",
            gap: 18,
          }}
        >
          <Typography
            variant="h3"
            style={{
              //   fontStyle: "italic",
              padding: "0.8rem",
              backgroundColor: "#F0F0F0",
              borderRadius: "20px",
              width: "12rem",
            }}
          >
            Recipes
          </Typography>
          <Button
            onClick={() => onSetAddRecipe()}
            style={{
              padding: "0.5rem",
              backgroundColor: "#F0F0F0",
              borderRadius: "20px",
            }}
            size="large"
          >
            <AddCircleIcon /> add a recipe
          </Button>
        </div>
        <Grid container justify="center" spacing={4}>
          {recipes.map((recipe) => (
            <Grid item key={recipe.uuid} xs={12} sm={6} md={4} lg={3}>
              <Recipe recipe={recipe} onEdit={onEdit} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Recipes;
