import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import WelcomeModal from "./WelcomeModal";

storiesOf("WelcomeModal", module).add("Default", () => <WelcomeModal />);
