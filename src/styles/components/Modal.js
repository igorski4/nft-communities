const ModalStyles = {
  variants: {
    addCommunity: {
      dialog: {
        m: 0,
        p: "24px",
        w: "440px",
        bg: "dropdown",
        borderRadius: "16px",
      },
      overlay: {
        bg: "rgba(0, 0, 0, 0.5)",
      },
      dialogContainer: {
        alignItems: "center",
      },
      header: {
        color: "primary.100",
        textAlign: "center",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "25px",
        letterSpacing: "-0.005em",
        p: 0,
        mb: "47.5px",
      },
      body: {
        p: 0,
        mb: "40px",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.005em",
        color: "form.300",
      },
      footer: {
        p: 0,
        justifyContent: "start",
        display: "flex",
        columnGap: "12px",
      },
      closeButton: {
        h: "24px",
        w: "24px",
        top: "24px",
        right: "24px",
        color: "secondary.400",
        borderRadius: 0,
        _focus: {
          boxShadow: "none",
          border: "1.5px solid",
          borderColor: "white",
        },
      },
    },
  },
};

export default ModalStyles;
