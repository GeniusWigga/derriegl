import fs from "fs-extra";
import path from "path";
import _ from "lodash";
import qs from "qs";

import request from "./request";

const API_TOKEN_FILE = "API_TOKEN";

function getTokenFromCache(tokenFilePath) {
  return fs.readFile(tokenFilePath, "utf8");
}

function storeConfigInCache(apiToken) {
  return fs.writeFile(path.join(global.appRoot, API_TOKEN_FILE), apiToken, "utf8");
}

export function getToken(id, secret, cmsUrl) {
  return request({
    method: "POST",
    url: `${cmsUrl}/identity-server/connect/token`,
    headers: {
      "CONTENT-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "client_credentials",
      client_id: id,
      client_secret: secret,
      scope: "squidex-api",
    }),
  }).then((res) => {
    return _.get(res, ["data", "access_token"]);
  });
}

export async function makeRequest(clientId, clientSecret, cmsUrl) {
  return async (reqBody) => {
    try {
      const tokenFilePath = path.join(global.appRoot, API_TOKEN_FILE);
      await fs.ensureFile(tokenFilePath);
      let token = await getTokenFromCache(tokenFilePath);

      if (!token) {
        token = await getToken(clientId, clientSecret, cmsUrl);

        await storeConfigInCache(token);
      }

      const cmsReqBody = {
        ...reqBody,
        headers: { ...reqBody.headers, Authorization: `Bearer ${token}` },
      };

      const response = (await request(cmsReqBody)) || {};

      // Token has probably expired.
      if (response.status == 401) {
        // Request the token again.
        token = await getToken(clientId, clientSecret, cmsUrl);

        await storeConfigInCache(token);

        // Try the request again.
        response = await makeRequestToSquidex(cmsReqBody);
      }

      // You can still have a 401 here, but this very likely not an epxired token then.
      return response;
    } catch (e) {
      throw new Error(`Error in makeRequest ${e}`);
    }
  };
}
