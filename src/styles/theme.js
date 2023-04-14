import { extendTheme } from "@chakra-ui/react";
import { Button, Modal, Input, Select } from "./components";
import { global } from "./global";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import "./fonts/fonts.css";

const config = {
  initialColorMode: "dark",
};

const styles = {
  global: { ...global },
};

const components = {
  Button,
  Modal,
  Input,
  Select,
};

const theme = extendTheme({
  styles,
  config,
  fonts,
  colors,
  components,
});

export default theme;