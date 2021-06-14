import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Recipes, HeadSection, RecipeView } from "./components";
import "./index.css";
import AddNewRecipe from "./AddNewRecipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [toAddRecipe, setToAddRecipe] = useState(false);
  const [open, setOpen] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [editFields, setEditFields] = useState({});
  const getRecipes = async () => {
    const fetchRecipes = await fetch("http://localhost:3001/recipes");
    const data = await fetchRecipes.json();
    console.log("DS: ", data);

    setRecipes(data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  console.log("RE: ", recipes);

  const onSetAddRecipe = () => {
    setToAddRecipe(!toAddRecipe);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setToAddRecipe(!toAddRecipe);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEdit = (data) => {
    console.log("FSNFKSDNFSKJDFN: ", data);
    setOpen(!open);
    setEditFields(data);
  };
  const onEditRecipe = () => {};

  const addRecipe = async (createdRecipe) => {
    console.log("SAS: ", createdRecipe);
    const response = await fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createdRecipe),
    });

    const data = await response.json();
    setRecipes([...recipes, data]);
    console.log("RESULT: ", data);
    setOpen(false);
  };

  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HeadSection />
            <Recipes
              recipes={recipes}
              onSetAddRecipe={handleClickOpen}
              onEdit={onEdit}
            />
          </Route>

          <Route exact path="/recipes/:id" component={RecipeView} />
        </Switch>
        <AddNewRecipe
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
          onAddRecipe={addRecipe}
        />
      </Router>
    </>
  );
};

export default App;
