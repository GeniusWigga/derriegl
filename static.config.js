import path from "path";
import LocalizedConfig from "./build.config.json";

export default {
  extractCssChunks: true,
  inlineCss: true,
  plugins: [
    [
      require.resolve("react-static-plugin-localized"),
      {
        config: LocalizedConfig,
      },
    ],
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    require.resolve("react-static-plugin-sass"),
  ],
};
