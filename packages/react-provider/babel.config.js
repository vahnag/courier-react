module.exports = {
  sourceType: "unambiguous",
  plugins: [
    "@babel/transform-runtime",
    "babel-plugin-styled-components",
    "transform-class-properties",
    [
      "babel-plugin-inline-import",
      {
        extensions: [".css"],
      },
    ],
    ["babel-plugin-react-remove-properties", { properties: ["data-test-id"] }],
    process.env.NODE_ENV !== "test" && [
      "babel-plugin-root-import",
      {
        rootPathSuffix: "./src",
        rootPathPrefix: "~/",
      },
    ],
  ].filter(Boolean),
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  ignore: ["src/__tests__", "src/__mocks__"],
};
