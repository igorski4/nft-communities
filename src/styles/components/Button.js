const ButtonStyles = {
  baseStyle: {
    borderRadius: "10px",
    border: "1.5px solid",
    fontWeight: 700,
    lineHeight: "20px",
    letterSpacing: "0.02em",
    overflow: "hidden",
    transition: "all 0.2s",
    _focus: {
      boxShadow: "none",
      borderColor: "white",
    },
  },
  sizes: {
    sm: {
      h: "40px",
      px: "24px",
      py: "10px",
      fontSize: "16px",
      lineHeight: "24px",
    },
    md: {
      h: "52px",
      px: "36px",
      py: "16px",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  variants: {
    secondary: {
      bg: "secondary.100",
      borderColor: "secondary.300",
      color: "primary.100",

      _hover: {
        bg: "secondary.200",
      },
    },
    primary: {
      bg: "primary.100",
      border: "2px solid",
      borderColor: "white",
      color: "black",

      _hover: {
        bg: "primary.200",
      },

      _focus: {
        borderColor: "black",
      },
    },
  },
};

export default ButtonStyles;
