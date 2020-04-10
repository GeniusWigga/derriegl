import React, { useRef, useState, useEffect } from "react";
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown/with-html";
import ReactPlayer from "react-player";
import { InView } from "react-intersection-observer";
import Swiper from "react-id-swiper";
import _ from "lodash";
import { Navigation, Pagination } from "swiper/dist/js/swiper.esm";

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
import InstagramWrapper from "../components/InstagramWrapper/InstagramWrapper";
import { src } from "../helpers/frontend";

const ArrowWrapper = ({ prev, next, children }) => {
  return (
    <div
      className={buildClassName("home__slider-button", {
        prev,
        next,
      })}
    >
      {children}
    </div>
  );
};

const NAVIGATION_PROPS = {
  nextEl: ".home__slider-button--next",
  prevEl: ".home__slider-button--prev",
};

export default () => {
  const getWindowWidth = () => {
    return typeof window && window && window.innerWidth;
  };

  const isMobile = () => {
    return getWindowWidth() <= 767;
  };

  const routeData = useRouteData();
  const { translations } = routeData;
  const [muted, onMute] = useState(!isMobile());

  const params = {
    autoHeight: true,
    modules: [Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: NAVIGATION_PROPS,
    renderPrevButton: () => (
      <ArrowWrapper prev>
        <Arrow />
      </ArrowWrapper>
    ),
    renderNextButton: () => (
      <ArrowWrapper next>
        <Arrow />
      </ArrowWrapper>
    ),
  };

  const simpleParams = {
    modules: [Navigation, Pagination],
    navigation: NAVIGATION_PROPS,
    // lazy: {
    //   loadPrevNext: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    renderPrevButton: () => (
      <ArrowWrapper prev>
        <LongArrow />
      </ArrowWrapper>
    ),
    renderNextButton: () => (
      <ArrowWrapper next>
        <LongArrow />
      </ArrowWrapper>
    ),
  };

  function goFullscreen(element) {
    const elem = element.getInternalPlayer();
    if (elem && elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem && elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    }
  }

  const player = useRef(null);

  const renderMuted = () => {
    if (muted) {
      return <i onClick={() => onMute(false)} className="home__icon fas fa-volume-mute" />;
    }

    return <i onClick={() => onMute(true)} className="home__icon fas fa-volume-up" />;
  };

  const shouldPlay = inView => {
    if (isMobile()) {
      return false;
    }

    return inView;
  };

  const trackingId = "UA-163289394-1";

  useEffect(() => {
    const s = document.createElement("script");
    const sc = document.createElement("script");
    sc.src = "https://www.googletagmanager.com/gtag/js?id=UA-163289394-1";
    sc.async = true;
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${trackingId}', { 'anonymize_ip': true });
`;
    document.body.appendChild(sc);
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", trackingId, { page_path: window.location.hash });
    }
  });

  return (
    <Layout {...routeData} className="home">
      <div className="home__hero" id="home">
        <img className="home__hero-img" alt="home hero" {...src("/img/hero_2")} />
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
                <img className="home__products-img-bar" alt="natural bar image" {...src("/img/products/natural")} />
                <img className="home__products-img-packaging" alt="packaging image" {...src("/img/packaging")} />
              </div>
            </div>

            <div className="home__products-substances-mobile">
              <div className="home__products-substances home__products-substances--vegan">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.natural.vegan}
                />
              </div>
              <div className="home__products-substances home__products-substances--protein home__products-substances--invert">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.natural.protein}
                />
              </div>
              <div className="home__products-substances home__products-substances--carbs">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.natural.carbs}
                />
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

                <a className="button product" href="https://derriegel.myshopify.com/products/natural-1">
                  {translations.toBar}
                  <i className="fas fa-arrow-right" />
                </a>

                <br />

                {/*<ModalButton*/}
                {/*  type={MODALS.NATURAL}*/}
                {/*  buttonClassName="home__btn"*/}
                {/*  buttonContent={translations.products.button}*/}
                {/*>*/}
                {/*  <ReactMarkdown*/}
                {/*    escapeHtml={false}*/}
                {/*    className="home__nutrition"*/}
                {/*    source={translations.products.natural.nutrition}*/}
                {/*  />*/}
                {/*  <ReactMarkdown*/}
                {/*    escapeHtml={false}*/}
                {/*    className="home__ingredients"*/}
                {/*    source={translations.products.natural.ingredients}*/}
                {/*  />*/}
                {/*</ModalButton>*/}
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
                <div className="home__products-substances home__products-substances--nut-choco">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.nut.choco}
                  />
                </div>
                <div className="home__products-substances home__products-substances--nut-nut home__products-substances--invert">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.nut.nut}
                  />
                </div>
                <div className="home__products-substances home__products-substances--nut-protein">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.nut.protein}
                  />
                </div>
                <img className="home__products-img-bar" alt="natural bar image" {...src("/img/products/choco")} />
                <img className="home__products-img-packaging" alt="packaging image" {...src("/img/packaging")} />
              </div>
            </div>

            <div className="home__products-substances-mobile">
              <div className="home__products-substances home__products-substances--nut-choco">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.nut.choco}
                />
              </div>

              <div className="home__products-substances home__products-substances--nut-nut home__products-substances--invert">
                <div className="home__indicator-circle" />
                <ReactMarkdown escapeHtml={false} className="home__substances" source={translations.products.nut.nut} />
              </div>

              <div className="home__products-substances home__products-substances--nut-protein">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.nut.protein}
                />
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

                <a className="button product" href="https://derriegel.myshopify.com/products/nuss">
                  {translations.toBar}
                  <i className="fas fa-arrow-right" />
                </a>

                <br />

                {/*<ModalButton type={MODALS.NUT} buttonClassName="home__btn" buttonContent={translations.products.button}>*/}
                {/*  <ReactMarkdown*/}
                {/*    escapeHtml={false}*/}
                {/*    className="home__nutrition"*/}
                {/*    source={translations.products.nut.nutrition}*/}
                {/*  />*/}
                {/*  <ReactMarkdown*/}
                {/*    escapeHtml={false}*/}
                {/*    className="home__ingredients"*/}
                {/*    source={translations.products.nut.ingredients}*/}
                {/*  />*/}
                {/*</ModalButton>*/}
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
              <div className="home__products-wrapper home__products-wrapper--cocos">
                <div className="home__products-substances home__products-substances--cocos-choco">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.cocos.choco}
                  />
                </div>
                <div className="home__products-substances home__products-substances--cocos-cocos home__products-substances--invert">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.cocos.cocos}
                  />
                </div>
                <div className="home__products-substances home__products-substances--cocos-protein">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.cocos.protein}
                  />
                </div>

                <img className="home__products-img-bar" alt="cocos bar image" {...src("/img/products/cocos")} />
                <img className="home__products-img-packaging" alt="packaging image" {...src("/img/packaging")} />
              </div>
            </div>

            <div className="home__products-substances-mobile">
              <div className="home__products-substances home__products-substances--cocos-choco">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.cocos.choco}
                />
              </div>

              <div className="home__products-substances home__products-substances--cocos-cocos">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.cocos.cocos}
                />
              </div>

              <div className="home__products-substances home__products-substances--cocos-protein">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.cocos.protein}
                />
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

                <a className="button product" href="https://derriegel.myshopify.com/products/kokos">
                  {translations.toBar}
                  <i className="fas fa-arrow-right" />
                </a>

                <br />

                {/*<ModalButton*/}
                {/*  type={MODALS.COCOS}*/}
                {/*  buttonClassName="home__btn"*/}
                {/*  buttonContent={translations.products.button}*/}
                {/*>*/}
                {/*  <ReactMarkdown*/}
                {/*    escapeHtml={false}*/}
                {/*    className="home__nutrition"*/}
                {/*    source={translations.products.cocos.nutrition}*/}
                {/*  />*/}
                {/*  <ReactMarkdown*/}
                {/*    escapeHtml={false}*/}
                {/*    className="home__ingredients"*/}
                {/*    source={translations.products.cocos.ingredients}*/}
                {/*  />*/}
                {/*</ModalButton>*/}
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
                <div className="home__products-substances home__products-substances--active-vegan">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.active.vegan}
                  />
                </div>
                <div className="home__products-substances home__products-substances--fruity home__products-substances--invert">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.active.fruity}
                  />
                </div>
                <div className="home__products-substances home__products-substances--banana">
                  <div className="home__indicator" />
                  <div className="home__indicator-circle" />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__substances"
                    source={translations.products.active.banana}
                  />
                </div>

                <img className="home__products-img-bar" alt="mixed bar image" {...src("/img/products/mixed")} />
                <img className="home__products-img-packaging" alt="packaging image" {...src("/img/packaging")} />
              </div>
            </div>

            <div className="home__products-substances-mobile">
              <div className="home__products-substances home__products-substances--active-vegan">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.active.vegan}
                />
              </div>
              <div className="home__products-substances home__products-substances--fruity home__products-substances--invert">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.active.fruity}
                />
              </div>
              <div className="home__products-substances home__products-substances--banana">
                <div className="home__indicator-circle" />
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.active.banana}
                />
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

                <a className="button product" href="https://derriegel.myshopify.com/products/active">
                  {translations.toBar}
                  <i className="fas fa-arrow-right" />
                </a>
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
              <div>
                <img
                  // className="swiper-lazy"
                  alt="all ingredients image"
                  src="/img/base-ingredients/all-600px.png"
                  {/*{...src("/img/base-ingredients/all")}*/}
                  // data-srcset={src("/img/base-ingredients/all").srcSet}
                  // data-src={src("/img/base-ingredients/all").src}
                />
              </div>
              <div>
                <img alt="apricot ingredient image" src="/img/base-ingredients/apricot-600px.png" />
              </div>
              <div>
                <img alt="dates ingredient image" src="/img/base-ingredients/dates-600px.png" />
              </div>
              <div>
                <img alt="dates alternativ ingredient image" {...src("/img/base-ingredients/dates-alt")} />
              </div>
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
              <div>
                <img alt="cocos ingredients image" {...src("/img/supplementary-ingredients/cocos")} />
              </div>
              <div>
                <img alt="cranberries ingredient image" {...src("/img/supplementary-ingredients/cranberries")} />
              </div>
              <div>
                <img alt="hazelnuts ingredient image" {...src("/img/supplementary-ingredients/hazelnuts")} />
              </div>
              <div>
                <img alt="oat ingredient image" {...src("/img/supplementary-ingredients/oat")} />
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="home__section home__about-us" id="about">
        <h2 className="home__headline home__headline--space">{translations.header.aboutus}</h2>

        <div className="home__row">
          <div className="home__col">
            <Swiper {...simpleParams}>
              <div>
                <img alt="bars image" {...src("/img/why-section/bars")} />
              </div>
              <div>
                <img alt="emotion image" {...src("/img/why-section/emotion")} />
              </div>
              <div>
                <img alt="bowl image" {...src("/img/why-section/bowl")} />
              </div>
            </Swiper>
          </div>
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <ReactMarkdown className="home__col-content" escapeHtml={false} source={translations.aboutus.why} />
            </div>
          </div>
        </div>

        <div className="home__row">
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <ReactMarkdown className="home__col-content" escapeHtml={false} source={translations.aboutus.team} />
            </div>
          </div>
          <div className="home__col">
            <div>
              <img alt="ceos image" {...src("/img/why-section/ceos")} />
            </div>
          </div>
        </div>
      </div>

      <div className="home__buy" id="buy">
        <h2 className="home__headline home__headline--space home__headline--invert">{translations.header.buy}</h2>

        <div className="home__buy-products">
          <Button>
            <a className="home__contact-btn" href="https://derriegel.myshopify.com/collections/all">
              {translations.buy.onlineShop}
            </a>
          </Button>
        </div>

        {_.map(translations.buy.stores, (store, key) => {
          return (
            <a key={key} target="_blank" rel="noreferrer nofollow" className="home__buy-store" href={store.href}>
              {store.text}
            </a>
          );
        })}

        <div className="home__buy-content">
          <ReactMarkdown className="home_buy-headline" escapeHtml={false} source={translations.buy.headline} />
          <Button>
            <a className="home__contact-btn" href={`mailto:${translations.footer.email}`}>
              {translations.buy.contact}
            </a>
          </Button>
        </div>
      </div>

      <div className="home__section home__video-section" id="video">
        <InView>
          {({ inView, ref }) => (
            <div ref={ref} className="home__image-video" id="home">
              <ReactPlayer
                ref={player}
                loop
                className="home__video"
                muted={muted}
                url="/video/iron-man.mp4"
                controls={isMobile()}
                playing={shouldPlay(inView)}
                width="100%"
                height="100%"
              />
              {renderMuted()}
              <i onClick={() => goFullscreen(_.get(player, "current"))} className="home__icon fas fa-expand" />
            </div>
          )}
        </InView>
      </div>

      <div className="home__section home__contact" id="contact">
        <div className="home__row">
          <div className="home__col home__col--content">
            <div className="home__col-content-wrapper">
              <ReactMarkdown className="home__col-content" escapeHtml={false} source={translations.contact.text} />
              <div className="home__social-wrapper">
                <a className="home__social" href={`mailto:${translations.footer.email}`}>
                  hallo@derriegel.com
                </a>
                <a className="home__social" href={translations.footer.insta}>
                  <img className="home__social-icons" src="/icons/insta.svg" alt="svg icon insta" />
                  <span className="home__social-content">{translations.instagram.text}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home__col">
            <div>
              <img alt="ceos image" {...src("/img/contact-emotion")} />
            </div>
          </div>
        </div>
      </div>

      <div className="home__section home__instagram" id="instagram">
        <h2 className="home__headline home__headline--space">{translations.header.instagram}</h2>
        <h3 className="home__insta-text">{translations.instagram.text}</h3>

        <div className="home__row">
          <InstagramWrapper shouldRender />
        </div>
        <Button>
          <a className="home__follow-instagram" target="_blank" href={translations.footer.insta}>
            {translations.instagram.button}
          </a>
        </Button>
      </div>
    </Layout>
  );
};
