const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: {
      main: [
        path.join(__dirname, "./frontend/src/index.js"),
        path.join(__dirname, "./frontend/src/sass/main.scss"),
      ],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "> 0.25%",
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./frontend/src/index.html"),
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 8080,
      open: true,
      hot: true,
      devMiddleware: {
        writeToDisk: false,
      },
    },
  };
};
