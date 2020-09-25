import React from "react";
import path from "path";
import _ from "lodash";
import LocalizedConfig from "./build.config.json";
import { makeRequest } from "./src/service/squidex";
import "./config";

const { CLIENT_ID, CLIENT_SECRET, CMS_URL, SQUIDEX_APP } = process.env;

global.appRoot = path.resolve(__dirname);

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
  getSiteData: async () => {
    const cmsRequest = await makeRequest(CLIENT_ID, CLIENT_SECRET, CMS_URL);
    const navigation = await cmsRequest({
      method: "GET",
      url: `${CMS_URL}/api/content/${SQUIDEX_APP}/navigation/`,
    });

    return {
      navigation: _.get(navigation.data, ["items", 0, "data", "navigation-list"]),
    };
  },
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
