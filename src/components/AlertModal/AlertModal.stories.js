import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "@material-ui/core/Button";
import AlertModal from "./AlertModal";

storiesOf("Alert Modal", module).add("first component", () => (
  <AlertModal></AlertModal>
));

storiesOf("Landing Page |Button", module).add("testing", () => (
  <Button onClick={() => console.log("Clicked")}>test button</Button>
));
