export const HeadingStyle = {
  // style object for base or default style
  baseStyle: {
    fontWeight: 500,
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1:{
        fontSize:{base:"2rem",md:"2rem",lg:"2.5rem"}
    }
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
