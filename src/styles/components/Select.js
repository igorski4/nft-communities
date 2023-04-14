const SelectStyles = {
  baseStyle: {},
  variants: {
    addCommunities: {
      field: {
        px: "20px",
        py: "14px",
        height: "52px",
        border: "1.5px solid",
        borderColor: "form.200",
        borderRadius: "12px",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.005em",
        color: "primary.100",
        bg: "form.100",

        _placeholder: {
          color: "form.300",
        },

        _focus: {
          borderColor: "white",
        },
      },
    },
  },
};

export default SelectStyles;
