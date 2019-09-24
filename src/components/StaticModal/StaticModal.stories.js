import React from "react";
import { storiesOf } from "@storybook/react";

import StaticModal from "./StaticModal.js";

storiesOf("StaticModal", module)
  .add("Welcome", () => (
    <StaticModal title="Welcome" btnName="bar">
      bacon
    </StaticModal>
  ))
  .add("foo", () => (
    <StaticModal title="foo" btnName="test">
      bacon
    </StaticModal>
  ));
