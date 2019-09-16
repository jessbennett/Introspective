import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "@material-ui/core/Button";

storiesOf("test |Button", module).add("testing", () => (
  <Button onClick={() => console.log("Clicked")}>hello, plz work</Button>
));
