import React from "react";
import path from "path";
import LocalizedConfig from "./build.config.json";

export default {
  Document: ({ Html, Head, Body, children, state: { siteData, renderMeta } }) => (
    <Html lang="de-DE">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Der Riegel | Natürliche Energie für jederzeit</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
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
