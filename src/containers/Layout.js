import React, { Component } from "react";
import { Head } from "react-static";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class extends Component {
  render() {
    const { className, children, translations } = this.props;

    return (
      <div className={className}>
        <Head>
          <title>Der Riegel | Natürliche Energie für jederzeit</title>
        </Head>
        <Header translations={translations} />
        {children}
        <Footer translations={translations} />
      </div>
    );
  }
}
