import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./WelcomeModal.css";

const closeButton = {
  marginRight: "-15px",
  height: "46px",
  color: "#6a6d6d",
  cursor: "pointer"
};

const styles = theme => ({
  paper: {
    width: "420px",
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: theme.spacing.unit * 3,
    paddingTop: "5px",
    borderRadius: "4px",
    outline: "none"
  },
  modal: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "SlatePro-Bk"
  },
  closeIcon: {
    width: "16px",
    height: "16px",
    color: "#6a6d6d",
    cursor: "pointer"
  },

  closeButton,
  closeButtonFocused: {
    ...closeButton,
    borderStyle: "solid"
  },

  title: {
    fontFamily: "SlatePro-Medium",
    fontSize: 27.2,
    color: "#3d3f3f",
    marginBottom: "20px"
  }
});

class WelcomeModal extends React.Component {
  render() {
    const { open, classes, customStyles, closeFunc } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
        >
          <div
            style={customStyles}
            className={`${classes.paper} ${classes.modal}`}
          >
            <Grid
              container
              justify="space-between"
              style={{ height: this.props.gridHeight }}
            >
              <Typography
                style={{ fontFamily: "SlatePro-Medium" }}
                variant="h6"
                id="modal-title"
                className={classes.title}
              >
                {this.props.title}
              </Typography>
              <Button
                id="closeButton"
                onFocus={() => this.setState({ closeButtonFocused: true })}
                onBlur={() => this.setState({ closeButtonFocused: false })}
                onClick={closeFunc}
              ></Button>
            </Grid>

            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}

WelcomeModal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classes: PropTypes.object.isRequired,
  customStyles: PropTypes.object,
  closeFunc: PropTypes.func.isRequired,
  gridHeight: PropTypes.string
};

WelcomeModal.defaultProps = {
  title: "",
  children: {},
  customStyles: {},
  gridHeight: "auto"
};

const GeneralModalWrapped = withStyles(styles)(WelcomeModal);
export default GeneralModalWrapped;
