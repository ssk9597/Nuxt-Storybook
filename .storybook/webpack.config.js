const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  });

  return config;
};