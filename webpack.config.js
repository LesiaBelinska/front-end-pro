const path = require('path');

module.exports = {
  entry: {
    main: [
      path.join(__dirname, "./src/index.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
