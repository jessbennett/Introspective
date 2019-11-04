import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  card: {
    maxWidth: 600,
    minHeight: "100px"
  },
  text: {}
}));

export default function WelcomeModal() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Card className={classes.card}>
        <Paper className={classes.root}>
          <Typography variant="h1" component="h3">
            Welcome to Introspective!
          </Typography>
          <Typography
            className={classes.text}
            gutterBottom={true}
            align="center"
            component="p"
          >
            Please select an option below:
          </Typography>
          <Grid item container direction="row" justify="center">
            <Grid>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Create New Team
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Enter Team Code
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Card>
    </Grid>
  );
}
