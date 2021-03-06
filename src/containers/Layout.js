import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class extends Component {
  render() {
    const { className, children, translations } = this.props;

    return (
      <div className={className}>
        <Header translations={translations} />
        {children}
        <Footer translations={translations} />
      </div>
    );
  }
}
