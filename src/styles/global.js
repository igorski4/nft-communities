export const global = {
  "html, body": {
    bg: "black",
    fontFamily: "PT Root UI, monospace",
    height: "100%",
    minHeight: "100%",
  },
  body: {
    "&::-webkit-scrollbar": {
      width: "20px",
      backgroundColor: "transition",
    },
    "&::-webkit-scrollbar-thumb": {
      border: "6px solid",
      borderColor: "transparent",
      borderRadius: "60px",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      backgroundClip: "content-box",
    },
  },
  "#root": { height: "100%" },
};
