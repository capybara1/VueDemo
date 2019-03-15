const { InjectManifest } = require("workbox-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const path = require("path");

const workboxConfigProd = {
  swSrc: path.join(__dirname, "public", "service-worker.js"),
  swDest: "service-worker.js",
  importWorkboxFrom: "local"
};

module.exports = {
  configureWebpack: {
    plugins: [
      new InjectManifest(workboxConfigProd),
      new WebpackShellPlugin({
        onBuildStart: ['node "scripts/generate_icons.js"']
      })
    ]
  }
};
