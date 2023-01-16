import React, { useReducer, useState } from "react";
import classes from './index.module.css'

import { withStyles, makeStyles } from '@mui/styles'
import { green } from '@mui/material/colors';
import { FormGroup, Checkbox, FormControlLabel, Button, Icon, TextField, Paper, Typography } from '@mui/material';
import { CheckBoxOutlineBlank, Favorite, FavoriteBorder } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import CheckBoxIcon from '@mui/icons-material/CheckBox'

// import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

export const CheckoutBoxGroup = () => {
  return (
    <div className={classes.wrapper}>
      <CheckboxLabels />
      <div className={classes.empty}></div>
      <MaterialUIFormSubmit
        formName="Sample Form Submit"
        formDescription="This is sample form using Material UI."
      />
    </div>
  )
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(state, 'statestate')
  const handleSubmit = (values) => {
    console.log(values, 'values')
  }
  return (
    <FormGroup row onSubmit={handleSubmit}>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        label="Primary"

        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
      />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Custom color"
      />
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Custom size"
      />
      <Button variant='contained' color='primary' type="submit">
        onSubmit
      </Button>
    </FormGroup>
  );
}

function MaterialUIFormSubmit(props) {
  const useStyles = makeStyles((theme = {}) => {
    console.log('theme', theme)
    return ({
      button: {
        margin: 1
      },
      leftIcon: {
        marginRight: 1
      },
      rightIcon: {
        marginLeft: 1
      },
      iconSmall: {
        fontSize: 20
      },
      root: {
        padding: '3 2'
      },
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
        marginLeft: 1,
        marginRight: 1,
        width: 400
      }
    })
  });

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: ""
    }
  );
  let [errors, setErrors] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      nameError: "",
      emailError: ""
    }
  );
  const defaultHelperText = { nameText: 'Enter your full name', emailText: 'e.g. name@gmail.com' }
  const [helperText, setHelperText] = useState(defaultHelperText)

  const valid = () => {
    const { name, email } = formInput;
    let nameError, emailError, nameText = defaultHelperText['nameText'], emailText = defaultHelperText['emailText'];
    if (!name) {
      nameError = true
      nameText = "please enter your full name";
    } else if (name && name.length > 10) {
      nameError = true;
      nameText = "the length of Name should be less than 10";
    }
    if (!email) {
      emailError = true
      emailText = "please enter your email";
    } else if (email && email.indexOf("@") === -1) {
      emailError = true
      emailText = "the email is incorrect";
    }
    let errors = { nameError, emailError }
    setErrors(errors);
    setHelperText({ nameText, emailText });
    if (Object.values(errors).filter(Boolean).length > 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!valid()) return;
    let data = { formInput };
    console.log(data, "data");
    return;
    //   fetch("https://pointy-gauge.glitch.me/api/form", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then((response) => response.json())
    //     .then((response) => console.log("Success:", JSON.stringify(response)))
    //     .catch((error) => console.error("Error:", error));
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setFormInput({ [name]: newValue });


  };

  // const classes = useStyles();

  // console.log(props, "props");

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit} className={classes.form}>
          <section className={classes.formPart}>

            <TextField
              variant="outlined"
              label="Name"
              id="margin-normal"
              name="name"
              defaultValue={formInput.email}
              className={classes.textField}
              error={!!errors.nameError}
              helperText={helperText.nameText}
              onChange={handleInput}
            />
            <TextField
              label="Email"
              id="margin-normal"
              name="email"
              defaultValue={formInput.name}
              className={classes.textField}
              error={!!errors.emailError}
              helperText={helperText.emailText}
              onChange={handleInput}
            />
          </section>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Subscribe <SendIcon className={classes.rightIcon} />
          </Button>
        </form>
      </Paper>
    </div>
  );
}











