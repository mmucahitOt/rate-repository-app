import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    background: "#e1e4e8",
  },
  fontSizes: {
    body: 14,
    heading: 16,
    subheading: 14,
    caption: 12,
  },
  fonts: {
    main: Platform.select({
      android: "Sans-Serif",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
