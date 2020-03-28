import React, { useEffect, useState } from "react";
import InstagramEmbed from "react-instagram-embed";
import _ from "lodash";
import axios from "axios";
import { Grid } from "@material-ui/core";

import "./InstagramWrapper.scss";

const CODE = "f56af7cd31414133994b9cde8f102c5f";
const ACCESS_TOKEN = "18311925341.1677ed0.751f6f2d170e44868e2d75886216ffa1";
const CLIENT_ID = "82a83789fb9a4da0bcccb99a884a0f08";
const CLIENT_SECRET = "c17bb43f5ccd421196d33638ca753dcb";
const REDIRECT_URI = "http://test.derriegel.com";
const API_URL = "https://api.instagram.com";

const InstagramWrapper = props => {
  const [instaResponse, onInstaFeed] = useState({});
  const { shouldRender } = props;

  if (!shouldRender) {
    return null;
  }

  useEffect(() => {
    const requestUrl = `${API_URL}/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`;
    axios
      .get(requestUrl)
      .then(function(res) {
        onInstaFeed({
          error: false,
          res,
        });
      })
      .catch(function(error) {
        onInstaFeed({
          error: true,
          res: error,
        });
      });
  }, []);

  const posts = _.chain(instaResponse)
    .get(["res", "data", "data"])
    .slice(0, 5)
    .value();

  return (
    <Grid className="instagram-wrapper" container spacing={3}>
      {_.map(posts, (feed, id) => {
        const src = _.get(feed, ["images", "standard_resolution", "url"]);
        return (
          <Grid key={id} item xs={6} sm={4} md={3}>
            <a href={_.get(feed, "link")} target="_blank">
              <img src={src} alt="insta post" />
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
};

InstagramWrapper.defaultProps = {
  shouldRender: true,
};

export default InstagramWrapper;
