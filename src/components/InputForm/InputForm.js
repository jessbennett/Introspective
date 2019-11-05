import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function InputForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Yes");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-name"
          label="Your Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          multiline
          id="team-name"
          className={classes.textField}
          label="Team Name"
          margin="normal"
          variant="outlined"
        />
        <Grid>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              Would you like to have anonymous users?
            </FormLabel>
            <RadioGroup
              aria-label="user selection"
              name="selection1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>
    </form>
  );
}
