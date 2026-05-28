const projectRoot = __dirname + "/../";
const themeDir = projectRoot + "themes/enchanted-lowkey/";

const cssnanoPlugin = require("cssnano")({
  path: [projectRoot, themeDir],
  preset: [
    "default",
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});

module.exports = {
  plugins: [
    require("tailwindcss")(projectRoot + "config/tailwind.config.js"),
    require("autoprefixer")({ path: [projectRoot, themeDir] }),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [cssnanoPlugin] : []),
  ],
};
