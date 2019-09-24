import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../Button/Button";

const styles = {
  root: {
    flexgrow: 1
  },
  container: {
    maxWidth: 628,
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 25,
    paddingLeft: 25
  },
  noAudioContainer: {
    maxWidth: 628,
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 25,
    paddingLeft: 35
  },
  title: {
    fontFamily: "SlatePro-Medium",
    fontSize: 24,
    color: "#3d3f3f",
    marginBottom: 15,
    marginTop: 5,
    marginLeft: 45
  },
  noAudioTitle: {
    fontFamily: "SlatePro-Medium",
    fontSize: 24,
    color: "#3d3f3f",
    marginBottom: 15,
    marginTop: 5
  },
  text: {
    maxWidth: 424,
    color: "#3d3f3f",
    fontFamily: "SlatePro-Bk",
    fontSize: 18,
    lineHeight: 1.11,
    marginLeft: 45,
    marginBottom: 25
  },
  noAudioText: {
    maxWidth: 424,
    color: "#3d3f3f",
    fontFamily: "SlatePro-Bk",
    fontSize: 18,
    lineHeight: 1.11,
    marginBottom: 25
  },
  line: {
    marginBottom: 25,
    display: "flex",
    height: 3,
    borderTop: "1px solid #3d3f3f",
    marginLeft: 45
  },
  noAudioLine: {
    marginBottom: 25,
    display: "flex",
    height: 3,
    borderTop: "1px solid #3d3f3f"
  },
  floatLeft: {
    float: "left"
  },
  font: {
    fontFamily: "SlatePro-Bold",
    paddingBottom: 7
  }
};

const StaticModal = props => {
  const {
    classes,
    customStyle,
    customTextStyle,
    customButtonStyle,
    audio,
    locale,
    audioEN,
    audioES,
    btnName,
    title,
    onClick,
    children
  } = props;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={customStyle}
      className={classes.root}
    >
      <Grid
        item
        sm={8}
        className={audio ? classes.container : classes.noAudioContainer}
      >
        {/* {audio ? (
					<AudioButton
						alt=" Exam Instructions"
						locale={locale}
						src={{
							// eslint-disable-next-line camelcase
							en_US: audioEN,
							// eslint-disable-next-line camelcase
							es_US: audioES
						}}
					/>
				) : (
					''
				)} */}
        <Typography
          variant="h1"
          className={audio ? classes.title : classes.noAudioTitle}
        >
          {title}
        </Typography>
        <Typography
          style={customTextStyle}
          variant="body1"
          className={audio ? classes.text : classes.noAudioText}
        >
          {children}
        </Typography>

        <div className={audio ? classes.line : classes.noAudioLine} />

        <Grid container justify="flex-end">
          <Button
            customStyle={customButtonStyle ? customButtonStyle : styles.font}
            btnName={btnName}
            btnStyle="blue"
            onClick={onClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

StaticModal.propTypes = {
  classes: PropTypes.object.isRequired,
  customStyle: PropTypes.object,
  customTextStyle: PropTypes.object,
  customButtonStyle: PropTypes.object,
  audio: PropTypes.bool.isRequired,
  locale: PropTypes.string,
  audioES: PropTypes.string,
  audioEN: PropTypes.string,
  btnName: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.array,
    PropTypes.string
  ])
};

StaticModal.defaultProps = {
  customStyle: {},
  audioEN: "",
  audioES: "",
  locale: null,
  customTextStyle: {},
  customButtonStyle: {},
  btnName: "Default",
  title: "Title",
  children: [],
  onClick: () => {}
};

export default withStyles(styles)(StaticModal);
