import { extendTheme } from "@chakra-ui/react";

import bgimage from "../assets/bg-texture.png";
import { ButtonStyle } from "./Components/Button";
import { ContainerStyle } from "./Components/Container";
import { HeadingStyle } from "./Components/Heading";
import { LinkStyle } from "./Components/Link";
export const myTheme = extendTheme({
  colors: {
    primary: "#4db5ff",
    primaryVariant: "rgba(77,181,255,0.4)",
    white: "#fff",
    colorLight: "rgba(255,255,255,0.6)",
    bgPrimary: "#1f1f38",
    bgPrimaryVariant: "#2c2c6c",
  },
  transition: {
    primary: "all 400ms ease",
  },
  components: {
    Container: ContainerStyle,
    Heading: HeadingStyle,
    Link: LinkStyle,
    Button: ButtonStyle,
  },

  styles: {
    global: {
      "*": {
        m: 0,
        p: 0,
        border: 0,
        outline: 0,
        boxSizing: "border-box",
        listStyle: "none",
        textDecoration: "none",
      },
      html: {
        scrollBehavior: "smooth",
      },

      body: {
        bg: "bgPrimary",
        color: "white",
        fontFamily: "Popins sans-sarif",
        lineHeight: "1.7",
        backgroundImage: `url(${bgimage})`,
      },
    },
  },
});
