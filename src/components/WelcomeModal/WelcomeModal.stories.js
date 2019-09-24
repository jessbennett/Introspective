import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import WelcomeModal from "./WelcomeModal";

storiesOf("WelcomeModal", module).add("Default", () => (
  <WelcomeModal open title="Hello">
    <Typography>Please select an option: </Typography>
    <Button variant="contained" color="primary">
      New Season ID
    </Button>
    <Button variant="contained" color="secondary">
      Enter Season ID
    </Button>
  </WelcomeModal>
));
