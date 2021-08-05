const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        // 路徑根據具體需求更改
        path.resolve(__dirname, "src/scss/mixin.scss"),
        path.resolve(__dirname, "src/scss/variables.scss"),
      ],
    },
  },
};
