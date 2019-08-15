import React, { useEffect, useState } from "react";
import InstagramEmbed from "react-instagram-embed";
import _ from "lodash";
import axios from "axios";

import "./InstagramWrapper.scss";

const CODE = "f56af7cd31414133994b9cde8f102c5f";
const ACCESS_TOKEN = "4721520390.82a8378.e6e831d07af244dc8d2710970dde2fa4";
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
    axios.get(requestUrl)
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

  return (
    <div className="instagram-wrapper">
      {
        _.map(_.get(instaResponse, ["res", "data", "data"]), (feed, id) => {
          return <InstagramEmbed
            key={id}
            url={_.get(feed, "link")}
          />;
        })
      }
    </div>
  );
};

InstagramWrapper.defaultProps = {
  shouldRender: true,
};

export default InstagramWrapper;
