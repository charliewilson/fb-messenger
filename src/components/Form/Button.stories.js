import React from "react";
import { storiesOf } from "@storybook/react";
import Btn from "./Button";

storiesOf("Btn", module).add("default Btn", () => <Btn>Example Button</Btn>);
storiesOf("Btn", module).add("large Btn", () => <Btn large>Example Button</Btn>);
storiesOf("Btn", module).add("primary Btn", () => <Btn primary>Example Button</Btn>);
storiesOf("Btn", module).add("block Btn", () => <Btn block>Example Button</Btn>);
