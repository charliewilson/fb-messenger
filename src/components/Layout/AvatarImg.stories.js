import React from "react";
import { storiesOf } from "@storybook/react";
import AvatarImg from "./AvatarImg";

//TODO: don't hardcode these ports...
storiesOf("AvatarImg", module).add("default AvatarImg", () => <AvatarImg src="http://localhost:3000/images/crazypeacock512_lg.jpg" />);
storiesOf("AvatarImg", module).add("small AvatarImg", () => <AvatarImg small src="http://localhost:3000/images/crazypeacock512_lg.jpg" />);
storiesOf("AvatarImg", module).add("medium AvatarImg", () => <AvatarImg medium src="http://localhost:3000/images/crazypeacock512_lg.jpg" />);
storiesOf("AvatarImg", module).add("large AvatarImg", () => <AvatarImg large src="http://localhost:3000/images/crazypeacock512_lg.jpg" />);