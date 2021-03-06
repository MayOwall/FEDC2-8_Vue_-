const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => {
  console.log(env, options);
  return {
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "~": `${__dirname}/src`,
      },
    },
    entry: "./src/main.js",
    // entry: { main: './src/main.js' },
    output: {
      path: `${__dirname}/dist`,
      filename: "main.js",
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.vue$/,
          use: "vue-loader",
        },
        {
          test: /\.s?css$/,
          use: ["vue-style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|svg|gif|webp)/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlPlugin({
        template: "./src/index.html",
      }),
      // new CopyPlugin({
      //   patterns: [
      //     { from: 'static' }
      //   ]
      // })
    ],
    devServer: {
      // port: 8080,
      historyApiFallback: true,
    },
  };
};
