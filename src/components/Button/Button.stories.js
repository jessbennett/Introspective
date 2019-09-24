import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button.js";

storiesOf("Button", module)
  .add("Enter ID", () => <Button btnStyle="blue" btnName="Enter ID" />)
  .add("New Customer", () => <Button btnStyle="blue" btnName="New Customer" />)
  .add("Large", () => <Button btnStyle="blue" btnName="Large" />)
  .add("Small", () => <Button btnStyle="blue" btnName="Small" />);
