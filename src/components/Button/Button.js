import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import MaterialButton from "@material-ui/core/Button";

const styles = {
  button: {
    boxShadow: "none",
    textTransform: "none",
    fontFamily: "SlatePro-Bk",
    fontSize: 18,
    color: "#ffffff",
    borderRadius: 5,
    minHeight: 24,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#ca0092",
    borderStyle: "solid"
  },
  RIfilled: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    "&:hover": {
      backgroundColor: "#62bbf9",
      color: "#123467"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#8fd7ff",
      color: "#ffffff"
    },
    "&:disabled": {
      opacity: 0.5,
      color: "#ffffff"
    }
  },
  RIoutlined: {
    borderColor: "#ffffff",
    borderWidth: 1,
    "&:hover": {
      borderColor: "transparent",
      backgroundColor: "#62bbf9",
      color: "#123467"
    },
    "&:active": {
      borderColor: "transparent",
      boxShadow: "none",
      backgroundColor: "#8fd7ff",
      color: "#ffffff"
    }
  },
  MIfilled: {
    backgroundColor: "#2773bb",
    borderColor: "transparent",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#204d90",
      color: "#ffffff"
    },
    "&:disabled": {
      opacity: 0.4,
      color: "#ffffff"
    }
  },
  large: {
    fontWeight: 800,
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "60px",
    paddingRight: "60px"
  },
  middleAlign: {
    display: "inline-flex",
    verticalAlign: "middle"
  },
  marginLeft: {
    marginLeft: 10
  },
  marginRight: {
    marginRight: 10
  }
};

const Button = props => {
  const {
    classes,
    btnStyle,
    btnOutlined,
    disabled,
    btnName,
    btnSize,
    btnIconPosition,
    btnIcon,
    onClick,
    customStyle
  } = props;
  let appStyle;
  let iconPosition;

  if (btnStyle === "blue") {
    appStyle = [classes.button, classes.MIfilled];
  } else {
    appStyle =
      btnOutlined === true
        ? [classes.button, classes.RIoutlined]
        : [classes.button, classes.RIfilled];
  }

  if (btnIconPosition === "left") {
    iconPosition = (
      <span>
        <span style={styles.marginRight} className={classes.middleAlign}>
          {/* {btnIcon || <HelpIcon />} */}
        </span>
        <span className={classes.middleAlign}>{btnName || "Default"}</span>
      </span>
    );
  } else if (btnIconPosition === "middle") {
    iconPosition = (
      <span>
        <span className={classes.middleAlign}>
          {/* {btnIcon || <HelpIcon />} */}
        </span>
      </span>
    );
  } else if (btnIconPosition === "right") {
    iconPosition = (
      <span>
        <span className={classes.middleAlign}>{btnName || "Default"}</span>
        <span style={styles.marginLeft} className={classes.middleAlign}>
          {/* {btnIcon || <HelpIcon />} */}
        </span>
      </span>
    );
  } else {
    iconPosition = <span>{btnName || "Default"}</span>;
  }

  if (btnSize === "large") {
    appStyle[2] = classes.large;
  }

  return (
    <MaterialButton
      style={customStyle}
      className={appStyle.join(" ")}
      size={btnSize || "medium"}
      variant={btnOutlined === true ? "outlined" : "contained"}
      disabled={disabled || false}
      onClick={onClick || null}
    >
      {iconPosition}
    </MaterialButton>
  );
};

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  btnStyle: PropTypes.string,
  disabled: PropTypes.bool,
  btnOutlined: PropTypes.bool,
  btnName: PropTypes.string,
  btnSize: PropTypes.string,
  btnIconPosition: PropTypes.string,
  btnIcon: PropTypes.element,
  onClick: PropTypes.func,
  customStyle: PropTypes.object
};
Button.defaultProps = {
  btnOutlined: false,
  btnName: "Default",
  btnSize: "medium",
  btnStyle: "",
  btnIconPosition: null,
  // btnIcon: <HelpIcon />,
  onClick: null,
  customStyle: {},
  disabled: false,
  borderColor: "#ca0092",
  borderStyle: "solid"
};

export const ButtonComponent = Button;
export default withStyles(styles)(Button);
