import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import Swiper from "react-id-swiper";
import { Navigation, Pagination } from "swiper/dist/js/swiper.esm";

import { useRouteData } from "react-static";

import Layout from "../containers/Layout";
import Button from "../components/Button/Button";
import Badge from "../components/Icons/Badge";
import Arrow from "../components/Icons/Arrow";
import LongArrow from "../components/Icons/LongArrow";
import Oat from "../components/Icons/Oat";
import Apricot from "../components/Icons/Apricot";
import Dates from "../components/Icons/Dates";
import Leaf from "../components/Icons/Leaf";
import Bar from "../components/Icons/Bar";
import Nut from "../components/Icons/Nut";
import NutHalf from "../components/Icons/NutHalf";
import NutHalfInvert from "../components/Icons/NutHalfInvert";
import Coconut from "../components/Icons/Coconut";
import Cranberry from "../components/Icons/Cranberry";
import Banana from "../components/Icons/Banana";

import "./home.scss";
import buildClassName from "../helpers/buildClassName";

const ArrowWrapper = ({ prev, next, children }) => {
  return <div className={buildClassName("home__slider-button",
    {
      prev,
      next,
    })}>
    {children}
  </div>;
};

const NAVIGATION_PROPS = {
  nextEl: ".home__slider-button--next",
  prevEl: ".home__slider-button--prev",
};

export default () => {

  const routeData = useRouteData();
  const { translations } = routeData;

  const params = {
    modules: [Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: NAVIGATION_PROPS,
    renderPrevButton: () => <ArrowWrapper prev><Arrow /></ArrowWrapper>,
    renderNextButton: () => <ArrowWrapper next><Arrow /></ArrowWrapper>,
  };

  const simpleParams = {
    modules: [Navigation, Pagination],
    navigation: NAVIGATION_PROPS,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    renderPrevButton: () => <ArrowWrapper prev><LongArrow /></ArrowWrapper>,
    renderNextButton: () => <ArrowWrapper next><LongArrow /></ArrowWrapper>,
  };

  return (
    <Layout {...routeData} className="home">
      <div className="home__hero" id="home">
        <img className="home__hero-img" src="/img/hero.jpg" alt="home hero" />
        <div className="home__badge-wrapper">
          <Badge className="home__badge" />
        </div>
        <ReactMarkdown escapeHtml={false} className="home__hero-headline" source={translations.headline} />
      </div>

      <div className="home__section home__products">
        <h2 className="home__headline">{translations.header.home}</h2>

        <Swiper {...params}>
          <div>
            <h3 className="home__products-sub-headline">{translations.products.natural.headline}</h3>

            <div className="home__products-intro">
              <div className="home__products-wrapper">
                <div className="home__products-substances home__products-substances--vegan">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.natural.vegan}
                  />
                </div>
                <div className="home__products-substances home__products-substances--protein home__products-substances--invert">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.natural.protein}
                  />
                </div>
                <div className="home__products-substances home__products-substances--carbs">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.natural.carbs}
                  />
                </div>
                <img className="home__products-img-bar" src="/img/products/natural.png" alt="natural bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
              </div>
            </div>

            <div className="home__products-info">
              <div className="home__products-info-col">
                <Oat className="home__oat" />
              </div>
              <div className="home__products-info-col">
                <ReactMarkdown
                  className="home__products-description"
                  escapeHtml={false}
                  source={translations.products.natural.description}
                />
                <Button className="home__btn">{translations.products.button}</Button>
              </div>
              <div className="home__products-info-col">
                <Apricot className="home__apricot" />
                <Dates className="home__dates" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="home__products-sub-headline">{translations.products.nut.headline}</h3>

            <div className="home__products-intro">
              <div className="home__products-wrapper">
                <img className="home__products-img-bar" src="/img/products/natural.png" alt="natural bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
              </div>
            </div>

            <div className="home__products-info">
              <div className="home__products-info-col">
                <Nut className="home__nut" />
                <NutHalf className="home__nut-half" />
                <NutHalfInvert className="home__nut-half-invert" />
              </div>
              <div className="home__products-info-col">
                <ReactMarkdown
                  className="home__products-description"
                  escapeHtml={false}
                  source={translations.products.nut.description}
                />
                <Button className="home__btn">{translations.products.button}</Button>
              </div>
              <div className="home__products-info-col">
                <Apricot className="home__apricot" />
                <Dates className="home__dates" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="home__products-sub-headline">{translations.products.cocos.headline}</h3>

            <div className="home__products-intro">
              <div className="home__products-wrapper">
                <img className="home__products-img-bar" src="/img/products/natural.png" alt="natural bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
              </div>
            </div>

            <div className="home__products-info">
              <div className="home__products-info-col">
                <Coconut className="home__coconut" />
              </div>
              <div className="home__products-info-col">
                <ReactMarkdown
                  className="home__products-description"
                  escapeHtml={false}
                  source={translations.products.cocos.description}
                />
                <Button className="home__btn">{translations.products.button}</Button>
              </div>
              <div className="home__products-info-col">
                <Apricot className="home__apricot" />
                <Dates className="home__dates" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="home__products-sub-headline">{translations.products.active.headline}</h3>

            <div className="home__products-intro">
              <div className="home__products-wrapper">
                <img className="home__products-img-bar" src="/img/products/natural.png" alt="natural bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
              </div>
            </div>

            <div className="home__products-info">
              <div className="home__products-info-col">
                <Cranberry className="home__cranberry" />
                <Banana className="home__banana" />
              </div>
              <div className="home__products-info-col">
                <ReactMarkdown
                  className="home__products-description"
                  escapeHtml={false}
                  source={translations.products.active.description}
                />
                <Button className="home__btn">{translations.products.button}</Button>
              </div>
              <div className="home__products-info-col">
                <Apricot className="home__apricot" />
                <Dates className="home__dates" />
              </div>
            </div>
          </div>
        </Swiper>

      </div>

      <div className="home__ingredients" id="ingredients">
        <h2 className="home__headline home__headline--space">{translations.header.ingredients}</h2>

        <div className="home__row">
          <div className="home__col">
            <Swiper {...simpleParams}>
              <div><img src="/img/base-ingredients/all.jpg" alt="all ingredients image" /></div>
              <div><img src="/img/base-ingredients/apricot.jpg" alt="apricot ingredient image" /></div>
              <div><img src="/img/base-ingredients/dates.jpg" alt="dates ingredient image" /></div>
              <div><img src="/img/base-ingredients/dates-alt.jpg" alt="dates alternativ ingredient image" /></div>
            </Swiper>
          </div>
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <Leaf className="home__leaf icon" />
              <ReactMarkdown
                className="home__col-content"
                escapeHtml={false}
                source={translations.baseingredients.quality}
              />
            </div>
          </div>
        </div>

        <div className="home__row">
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <Bar className="home__bar icon" />
              <ReactMarkdown
                className="home__col-content"
                escapeHtml={false}
                source={translations.suppingredients.headline}
              />
            </div>
          </div>
          <div className="home__col">
            <Swiper {...simpleParams}>
              <div><img src="/img/supplementary-ingredients/cocos.jpg" alt="cocos ingredients image" /></div>
              <div><img src="/img/supplementary-ingredients/cranberries.jpg" alt="cranberries ingredient image" /></div>
              <div><img src="/img/supplementary-ingredients/hazelnuts.jpg" alt="hazelnuts ingredient image" /></div>
              <div><img src="/img/supplementary-ingredients/oat.jpg" alt="oat ingredient image" /></div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="home__section home__about-us" id="about">
        <h2 className="home__headline home__headline--space">{translations.header.aboutus}</h2>

        <div className="home__row">
          <div className="home__col">
            <Swiper {...simpleParams}>
              <div><img src="/img/why-section/bars.jpg" alt="bars image" /></div>
              <div><img src="/img/why-section/emotion.jpg" alt="emotion image" /></div>
              <div><img src="/img/why-section/bowl.jpg" alt="bowl image" /></div>
            </Swiper>
          </div>
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <ReactMarkdown
                className="home__col-content"
                escapeHtml={false}
                source={translations.aboutus.why}
              />
            </div>
          </div>
        </div>

        <div className="home__row">
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <ReactMarkdown
                className="home__col-content"
                escapeHtml={false}
                source={translations.aboutus.team}
              />
            </div>
          </div>
          <div className="home__col">
            <div><img src="/img/why-section/ceos.jpg" alt="ceos image" /></div>
          </div>
        </div>
      </div>

      <div className="home__buy" id="buy">
        <h2 className="home__headline home__headline--space home__headline--invert">{translations.header.buy}</h2>

        {_.map(translations.buy.stores, (store, key) => {
          return <a key={key}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="home__buy-store"
                    href={store.href}>{store.text}</a>;
        })}

        <div className="home__buy-content">
          <ReactMarkdown
            className="home_buy-headline"
            escapeHtml={false}
            source={translations.buy.headline}
          />
          <Button>
            <a className="home__contact-btn" href={`mailto:${translations.footer.email}`}>{translations.buy.contact}</a>
          </Button>
        </div>
      </div>

      <div className="home__section home__contact" id="contact">
        <div className="home__row">
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <ReactMarkdown
                className="home__col-content"
                escapeHtml={false}
                source={translations.contact.text}
              />
              <div className="home__social-wrapper">
                <a className="home__email"
                   href={`mailto:${translations.footer.email}`}>hallo@derriegel.com</a>
                {/*<a className="home__social" href={translations.footer.fb}>*/}
                {/*  <img className="home__social-icons" src="/icons/fb.svg" alt="svg icon facebook" />*/}
                {/*  <span className="home__social-content">@der-riegel</span>*/}
                {/*</a>*/}
                {/*<a className="home__social" href={translations.footer.insta}>*/}
                {/*  <img className="home__social-icons" src="/icons/insta.svg" alt="svg icon insta" />*/}
                {/*  <span className="home__social-content">@der-riegel-germany</span>*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
          <div className="home__col">
            <div><img src="/img/why-section/ceos.jpg" alt="ceos image" /></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}