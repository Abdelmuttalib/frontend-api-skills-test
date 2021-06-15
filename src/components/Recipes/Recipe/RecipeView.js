import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Ingredients from "./Ingredients/Ingredients";
import Directions from "./Directions/Directions";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    marginTop: "6rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "50rem",
      maxHeight: "auto",
    },
  },
  card: {
    display: "flex",
    width: "80%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "90%",
    },
  },
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "50%",
      justifyContent: "center",
      marginTop: "1.5rem",
    },
  },
  content: {
    flex: "1 0 auto",
  },
  title: {
    width: "90%",
    // marginTop: "2rem",
    // marginLeft: "1rem",
    margin: "3rem 0 1rem 1rem",
    // backgroundColor: "#C8C8C8",
    lineHeight: "48px",
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "column",
      margin: "1rem 0 0 1rem",
    },
  },
  brief: {
    color: theme.palette.text.secondary,
    // backgroundColor: "#C8C8C8",
    marginLeft: "2rem",
    width: "90%px",
    height: "5rem",
    alignSelf: "start",
    fontweight: "400",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "column",
      margin: "1.5rem 0 0 1.8rem",
    },
  },
  info: {
    width: "50%",
    //   backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    gap: 19,
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "column",
      justifyContent: "center",
      width: "80%",
      gap: 30,
      marginLeft: "1rem",
    },
  },
  infoItem: {
    padding: "0.7rem",
    backgroundColor: "#F0F0F0",
    borderRadius: "20px",
    width: "100%",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardFooter: {
    display: "flex",
    // backgroundColor: "#C8C8C8",
    flexDirection: "row",
    justifyContent: "start",
    gap: 40,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 1,
    },
    width: "90%",
  },
  cover: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "40%",
      maxHeight: "50rem",
    },
  },

  showIngredients: {
    width: "100%",
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  },
  ingredientsCard: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const RecipeView = ({ match }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [fetchedRecipe, setFetchedRecipe] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [expandedTwo, setExpandedTwo] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClickTwo = () => {
    setExpandedTwo(!expandedTwo);
  };
  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  const fetchRecipeDetails = async () => {
    console.log("MATCHING: ", match.params.id);
    const response = await fetch(
      `http://localhost:3001/recipes/${match.params.id}`
    );

    const data = await response.json();
    setFetchedRecipe(data);
    console.log("UP: ", data);
  };

  return (
    <>
      <div className={classes.root}>
        <Card className={classes.card} elevation={1}>
          <CardMedia
            className={classes.cover}
            image={
              fetchedRecipe.images == undefined
                ? "https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                : fetchedRecipe.images.medium
            }
            title={fetchedRecipe.title}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.title} variant="h4" gutterBottom>
                {fetchedRecipe.title}
              </Typography>
              <Typography className={classes.brief}>
                {fetchedRecipe.description}
              </Typography>
              <div className={classes.cardFooter}>
                <div className={classes.info}>
                  <Typography className={classes.infoItem}>
                    Cook Time: {fetchedRecipe.cookTime}
                  </Typography>
                  <Typography className={classes.infoItem}>
                    Servings: {fetchedRecipe.servings}
                  </Typography>
                </div>
                <div className={classes.info}>
                  <Typography className={classes.infoItem}>
                    Preparation Time: {fetchedRecipe.prepTime}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className={classes.showIngredients}>
        <Card style={{ width: "80%" }} elevation={0}>
          {/* <div className={classes.ingredientsCard}>
            <Typography variant="h5" style={{ padding: "1rem" }}>
              Show Ingredients
            </Typography>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </div> */}
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {fetchedRecipe.ingredients !== undefined && (
              <Ingredients ingredients={fetchedRecipe.ingredients} />
            )}
            {fetchedRecipe.directions !== undefined && (
              <Directions directions={fetchedRecipe.directions} />
            )}
          </CardContent>
          {/* </Collapse> */}
        </Card>
      </div>
      {/* <div className={classes.showIngredients}>
        <Card style={{ width: "80%" }} elevation={0}>
          <div className={classes.ingredientsCard}>
            {/* <Typography variant="h5" style={{ padding: "1rem" }}>
              Show Directions
            </Typography>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClickTwo}
                aria-expanded={expandedTwo}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions> */}
      {/* </div> */}
      {/* <Collapse in={expandedTwo} timeout="auto" unmountOnExit> */}
      {/* <CardContent>
            <Directions directions={fetchedRecipe.directions} />
          </CardContent> */}
      {/* </Collapse> */}
      {/* </Card> */}
      {/* </div> */}
    </>
  );
};

export default RecipeView;
