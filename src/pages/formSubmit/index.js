import React from 'react'
import classes from './index.module.css'

import { withStyles } from '@mui/styles'
import { green } from '@mui/material/colors';
import { FormGroup, Checkbox, FormControlLabel ,Button} from '@mui/material';
import { CheckBoxOutlineBlank, Favorite, FavoriteBorder } from '@mui/icons-material'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

export const FormSubmit = () => {
  return (
    <div className={classes.wrapper}>
      <CheckboxLabels />
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

export default function CheckboxLabels() {
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








