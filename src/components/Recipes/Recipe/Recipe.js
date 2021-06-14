import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  IconButton,
  Button,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Ingredients from "./Ingredients/Ingredients";
import Directions from "./Directions/Directions";

import { makeStyles } from "@material-ui/core/styles";

const Recipe = ({ recipe, onEdit }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 0,
      paddingTop: "66.25%",
      //   objectFit: "fit",
    },
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onToEdit = async (id) => {
    const fetchToEdit = await fetch(`http://localhost:3001/recipes/${id}`);
    const data = await fetchToEdit.json();
    onEdit(data);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/recipes/${recipe.uuid}`}>
        <CardMedia
          className={classes.media}
          image={
            recipe.images == undefined
              ? "https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              : recipe.images.medium
          }
          title={recipe.title}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {recipe.title}
            </Typography>
            <Typography variant="h5">
              {/* {product.price.formatted_with_symbol} */}
            </Typography>
          </div>
          <Typography
            //   dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          >
            {recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        {/* <FavoriteIcon style={{ color: "#009688" }} /> */}
        <Button
          style={{ color: "#009688" }}
          component={Link}
          to={`/recipes/${recipe.uuid}`}
          // variant="outlined"
          // color="primary"
        >
          VIEW
        </Button>
        {/* <Button onClick={() => onToEdit(recipe.uuid)}>EDIT</Button> */}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {recipe.ingredients !== undefined && (
            <Ingredients key={recipe.uuid} ingredients={recipe.ingredients} />
          )}
          {recipe.directions !== undefined && (
            <Directions key={recipe.uuid} directions={recipe.directions} />
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Recipe;

// cookTime: 20;
// ​​
// description: "A delicious breakfast, fit for a crowd."
// ​​
// directions: Array(10) [ {…}, {…}, {…}, … ]
// ​​
// editDate: "02/05/2018 11:56:29 PM"
// ​​
// images: Object { full: "/img/queso_brat_scramble.jpg", medium: "/img/queso_brat_scramble--m.jpg", small: "/img/queso_brat_scramble--s.jpg" }
// ​​
// ingredients: Array(15) [ {…}, {…}, {…}, … ]
// ​​
// postDate: "01/20/2018 05:15:03 PM"
// ​​
// prepTime: 10
// ​​
// servings: 5
// ​​
// title: "Queso Brat Scramble"
// ​​
// uuid: "e80ea521-4d42-48fe-a7a6-ac8952bc0de4"

{
  /* <IconButton
            aria-label="Add to Cart"
            //   onClick={() => onAddToCart(recipe.id, 1)}
          >
            {/* <AddShoppingCart /> */
}
//</IconButton> */}
