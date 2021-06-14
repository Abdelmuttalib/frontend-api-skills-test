import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "0.3rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddNewRecipe = ({ open, handleClickOpen, handleClose, onAddRecipe }) => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new Recipe</DialogTitle>
        <DialogContent>
          <form
            className={classes.form}
            onSubmit={handleSubmit((data) => onAddRecipe(data))}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              {...register("title", { required: true })}
              id="title"
              label="title"
              name="title"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              {...register("description", { required: true })}
              name="description"
              label="description"
              type="text"
              id="description"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              {...register("cook time", { required: true })}
              id="cookTime"
              label="Cook Time"
              name="cook time"
              type="number"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              {...register("preparation time", { required: true })}
              name="preparation time"
              label="Preparation Time"
              type="number"
              id="prepTime"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#009688" }}
              className={classes.submit}
            >
              add recipe
            </Button>
            <Button
              onClick={handleClose}
              variant="outlined"
              fullWidth
              style={{ color: "#009688" }}
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewRecipe;
