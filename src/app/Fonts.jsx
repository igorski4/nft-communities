import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'PT Root UI Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./global/fonts/pt-root-ui_bold.woff2.woff2') format('woff2'), url('./global/fonts/pt-root-ui_bold.woff') format('woff');
      }
      @font-face {
        font-family: 'PT Root UI Medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./global/fonts/pt-root-ui_medium.woff2') format('woff2'), url('./global/fonts/pt-root-ui_medium.woff') format('woff');
      }
      `}
  />
);
