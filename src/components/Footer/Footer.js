import React from "react";

import "./Footer.scss";
import ReactMarkdown from "react-markdown/with-html";

import Button from "../Button/Button";
import { Link } from "../../components/Router";
import buildClassName from "../../helpers/buildClassName";

export default ({ translations }) => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__col">
          <div className="footer__col-wrapper">
            <ReactMarkdown escapeHtml={false} className="footer__headline" source={translations.footer.headline} />
            <ReactMarkdown escapeHtml={false} source={translations.footer.description} />
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__col-wrapper">
            <h3 className="footer__headline">{translations.footer.contact}</h3>
            <a className="footer__email" href={`mailto:${translations.footer.email}`}>
              {translations.footer.email}
            </a>
            {/*<p className="footer__phone">{translations.footer.phone}</p>*/}
          </div>
        </div>
        <div className="footer__col">
          <div className="footer__col-wrapper">
            <h3 className="footer__headline">
              <a
                className="footer__headline-link"
                target="_blank"
                href="https://shop.derriegel.com/policies/legal-notice"
              >
                {translations.footer.imprint}
              </a>
            </h3>
            <ReactMarkdown escapeHtml={false} source={translations.footer.address} />
            <h3 className={buildClassName("footer__headline", { privacy: true })}>
              <a
                className="footer__headline-link"
                target="_blank"
                href="https://shop.derriegel.com/policies/privacy-policy"
              >
                {translations.footer.privacy}
              </a>
            </h3>
            <h3 className={buildClassName("footer__headline", { privacy: true })}>
              <a
                className="footer__headline-link"
                target="_blank"
                href="https://shop.derriegel.com/policies/terms-of-service"
              >
                {translations.footer.agb}
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="footer_social-contact-wrapper">
        <div className="footer__social-buttons">
          {/*<a className="footer_social" href={translations.footer.fb}>*/}
          {/*  <img src="/icons/fb.svg" alt="svg icon facebook" />*/}
          {/*</a>*/}
          <a className="footer_social" href={translations.footer.insta}>
            <img src="/icons/insta.svg" alt="svg icon insta" />
          </a>
        </div>
        <Button className="footer__button">
          <a className="footer__contact-btn" href={`mailto:${translations.footer.email}`}>
            {translations.footer.calltoaction}
          </a>
        </Button>
      </div>
    </footer>
  );
};
