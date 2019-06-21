import React from "react";

import "./Footer.scss";
import ReactMarkdown from "react-markdown/with-html";

import Button from "../Button/Button";

export default ({ translations }) => {

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__col">
          <div className="footer__col-wrapper">
            <ReactMarkdown
              escapeHtml={false}
              className="footer__headline"
              source={translations.footer.headline}
            />
            <ReactMarkdown
              escapeHtml={false}
              source={translations.footer.description}
            />
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__col-wrapper">
            <h3 className="footer__headline">{translations.footer.contact}</h3>
            <a className="footer__email" href={`mailto:${translations.footer.email}`}>{translations.footer.email}</a>
            <p className="footer__phone">{translations.footer.phone}</p>
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__col-wrapper">
            <h3 className="footer__headline">{translations.footer.imprint}</h3>
            <ReactMarkdown
              escapeHtml={false}
              source={translations.footer.address}
            />
          </div>
        </div>
      </div>

      <div className="footer_social-contact-wrapper">
        <div className="footer_social-buttons">
          <a className="footer_social" href={translations.footer.fb}>
            <img src="/icons/fb.svg" alt="svg icon facebook" />
          </a>
          <a className="footer_social" href={translations.footer.insta}>
            <img src="/icons/insta.svg" alt="svg icon insta" /></a>
        </div>
        <Button className="footer__button">{translations.footer.calltoaction}</Button>
      </div>
    </footer>
  );
}
