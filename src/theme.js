const colors = {
  blue: {
    100: "#3D5AFE",
    200: "rgba(41, 98, 255, 0.1)",
    300: "#2962FF",
    400: "#0039CB"
  },
  coolGray: {
    100: "#455A64",
    200: "#1C313A"
  },
  gray: {
    100: "#E0E0E0",
    200: "#AEAEAE",
    300: "#9E9E9E",
    400: "#3F3F3F"
  },
  red: {
    100: "#D32F2F",
    200: "#9A0007"
  },
  white: {
    100: "#FFF"
  }
};

const shadow = {
  none: "none",
  default: "0px 2px 3px rgba(51, 51, 51, 0.2)",
  primary: "0px 2px 3px rgba(41, 98, 255, 0.2)",
  secondary: "0px 2px 3px rgba(69, 90, 100, 0.2)",
  danger: "0px 2px 3px rgba(211, 47, 47, 0.2)"
};

const space = {
  0: "0px",
  px: "1px",
  "0.5": "2px",
  1: "4px",
  "1.5": "6px",
  2: "8px",
  "2.5": "10px",
  "2.6": "11px",
  3: "12px",
  "3.5": "14px",
  4: "16px",
  5: "20px",
  "5.5": "22px",
  6: "24px"
};

export default {
  colors,
  space,
  shadow,
  buttons: {
    default: {
      backgroundColor: colors.gray[100],
      boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)",
      color: colors.gray[400],
      border: "none",
      "&:disabled": {
        backgroundColor: colors.gray[100],
        boxShadow: 'none',
        color: colors.gray[300]
      },
      "&:disabled:hover": {
        cursor: "not-allowed"
      },
      "&:hover:enabled": {
        backgroundColor: colors.gray[200],
        cursor: "pointer"
      },
      "&:focus:enabled": {
        backgroundColor: colors.gray[200],
        cursor: "pointer"
      }
    },
    outline: {
      backgroundColor: "transparent",
      border: `1px solid ${colors.blue[100]}`,
      boxShadow: "none",
      color: colors.blue[100],
      "&:disabled": {
        backgroundColor: colors.gray[100],
        border: "none",
        color: colors.gray[300]
      },
      "&:disabled:hover": {
        cursor: "not-allowed"
      },
      "&:hover:enabled": {
        backgroundColor: colors.blue[200],
        cursor: "pointer"
      },
      "&:focus:enabled": {
        backgroundColor: colors.blue[200],
        cursor: "pointer"
      }
    },
    text: {
      backgroundColor: "transparent",
      border: "none",
      color: colors.blue[100],
      "&:disabled": {
        color: colors.gray[300]
      },
      "&:disabled:hover": {
        cursor: "not-allowed"
      },
      "&:hover:enabled": {
        backgroundColor: colors.blue[200],
        cursor: "pointer"
      },
      "&:focus:enabled": {
        backgroundColor: colors.blue[200],
        cursor: "pointer"
      }
    }
  },
  filter: {
    default: 'invert(20%) sepia(0%) saturate(1397%) hue-rotate(232deg) brightness(107%) contrast(89%)',
    defaultOutlineOrText: 'invert(97%) sepia(7%) saturate(40%) hue-rotate(350deg) brightness(108%) contrast(76%)',
    secondary: 'invert(30%) sepia(29%) saturate(332%) hue-rotate(155deg) brightness(101%) contrast(93%)',
    danger: 'invert(32%) sepia(53%) saturate(2154%) hue-rotate(335deg) brightness(82%) contrast(107%)',
    outline: 'invert(39%) sepia(61%) saturate(7035%) hue-rotate(227deg) brightness(101%) contrast(99%)',
    text: 'invert(39%) sepia(61%) saturate(7035%) hue-rotate(227deg) brightness(101%) contrast(99%)',
    white: 'invert(100%) sepia(1%) saturate(0%) hue-rotate(84deg) brightness(108%) contrast(100%)'
  }
};
