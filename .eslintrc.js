module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "react-app",
  rules: {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
  }
};