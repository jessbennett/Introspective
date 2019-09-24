import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

const AlertModal = props => (
  <Dialog aria-labelledby="alert-dialog-title"></Dialog>
);

export default withStyles(styles)(AlertModal);
