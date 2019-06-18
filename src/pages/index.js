import React from "react";

import { useRouteData } from "react-static";

import Layout from "../containers/Layout";

export default () => {

  const routeData = useRouteData();

  return (
    <Layout {...routeData}>
      <h1>Welcome to React-Static</h1>
    </Layout>
  );
}
