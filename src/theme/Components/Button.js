export const ButtonStyle = {
  // style object for base or default style
  baseStyle: {
    color: "primary",
    display: "inline-block",
    width: "max-content",
    padding: "0.75rem 1.2rem",
    borderRadius: "0.4rem",
    cursor: "pointer",
    border: `1px solid `,
    borderColor:"primary",
    transition: "primary",

    _hover: {
      color: "bgPrimary",
      bg: "white",
      borderColor: "transparent",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "primary",
      color: "bgPrimary",
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
