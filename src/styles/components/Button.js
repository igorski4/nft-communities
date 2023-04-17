const ButtonStyles = {
  baseStyle: {
    borderRadius: "12px",
    fontWeight: 700,
    lineHeight: "20px",
    letterSpacing: "0.02em",
    overflow: "hidden",
    transition: "all 0.2s",
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
      borderRadius: "10px",
      border: "1.5px solid",
      borderColor: "secondary.300",
      color: "primary.100",

      _hover: {
        bg: "secondary.200",
      },
    },
    primary: {
      bg: "primary.100",
      color: "black",

      _hover: {
        bg: "primary.200",
      },
    },
  },
};

export default ButtonStyles;
