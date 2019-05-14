import React from "react";
import { storiesOf } from "@storybook/react";
import P from "./P";

storiesOf("P", module).add("default P", () => <P>Hello P!</P>);
storiesOf("P", module).add("Quote P", () => <P quote={true}>Hello P!</P>);
