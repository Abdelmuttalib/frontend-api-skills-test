// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   FilledInput,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { useForm, useFormContext, Controller } from "react-hook-form";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "1rem",
//     border: "1px solid rgba(0,0,0,0.2)",
//     borderRadius: "0.3rem",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const AddNewRecipe = ({ open, handleClickOpen, handleClose, onAddRecipe }) => {
//   const [fields, setFields] = useState({});

//   useEffect(() => {
//     getFields();
//   }, []);
//   const getFields = async () => {
//     const response = await fetch(
//       "http://localhost:3001/recipes/3555aec3-47e1-44d4-b8f2-607aad5cee67"
//     );
//     console.log("RESSSS: ", response);
//     const data = await response.json();
//     setFields(data);
//     console.log("D: ", data);
//   };
//   const classes = useStyles();
//   const { register, handleSubmit } = useForm();
//   const { control } = useFormContext();

//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Edit a Recipe</DialogTitle>
//         <DialogContent>
//           <form
//             className={classes.form}
//             onSubmit={handleSubmit((data) => onAddRecipe(data))}
//             noValidate
//           >
//             {/* <FilledInput
//               name="title"
//               fullWidth
//               defaultValue="FKDF"
//               disableUnderline
//             /> */}
//             <Controller
//               name="First Name"
//               control={control}
//               defaultValue="FOOLA"
//               rules={{ required: "First name required" }} // render to be explained in next section
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               //   {...register("title", { required: true })}
//               id="title"
//               label="title"
//               name="title"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               //   {...register("description", { required: true })}
//               name="description"
//               label="description"
//               type="text"
//               id="description"
//               autoComplete="current-password"
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               //   {...register("cook time", { required: true })}
//               id="cookTime"
//               //   label="Cook Time"
//               value={fields.cookTime}
//               name="cookTime"
//               type="number"
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               //   {...register("preparation time", { required: true })}
//               name="prepTime"
//               label="Preparation Time"
//               type="number"
//               id="prepTime"
//               autoComplete="current-password"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               style={{ backgroundColor: "#009688" }}
//               className={classes.submit}
//             >
//               edit recipe
//             </Button>
//             <Button
//               onClick={handleClose}
//               variant="outlined"
//               fullWidth
//               style={{ color: "#009688" }}
//             >
//               Cancel
//             </Button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default AddNewRecipe;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FilledInput,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({
  handleClose,
  open,
  handleClickOpen,
  handleCloseDialog,
  onAddRecipe,
}) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const [fields, setFields] = useState({});

  useEffect(() => {
    getFields();
  }, []);
  const getFields = async () => {
    const response = await fetch(
      "http://localhost:3001/recipes/3555aec3-47e1-44d4-b8f2-607aad5cee67"
    );
    console.log("RESSSS: ", response);
    const data = await response.json();
    setFields(data);
    console.log("D: ", data);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit a Recipe</DialogTitle>
      <DialogContent>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "First name required" }}
          />
          <Controller
            name="description"
            control={control}
            defaultValue={
              fields.description !== undefined && fields.description
            }
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Description"
                variant="outlined"
                margin="normal"
                variant="outlined"
                //               margin="normal"
                //               required
                //               fullWidth
                //               //   {...register("cook time", { required: true })}
                //               id="cookTime"
                //               //   label="Cook Time"
                //               value={fields.cookTime}

                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Last name required" }}
          />
          <Controller
            name="cookTime"
            control={control}
            defaultValue={`${
              fields.cookTime !== undefined ? fields.cookTime : ""
            }`}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Cook Time"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="email"
              />
            )}
            rules={{ required: "Email required" }}
          />
          <Controller
            name="prepTime"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Preparation Time"
                variant="outlined"
                value={value}
                fullWidth
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
              />
            )}
            rules={{ required: "Password required" }}
          />
          <div>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
