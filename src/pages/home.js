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
import ModalButton from "../components/ModalButton/ModalButton";
import InstagramWrapper from "../components/InstagramWrapper/InstagramWrapper";

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

const MODALS = {
  NATURAL: "NATURAL",
  NUT: "NUT",
  COCOS: "COCOS",
  ACTIVE: "ACTIVE",
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
    updateOnImagesReady: true,
    renderPrevButton: () => <ArrowWrapper prev><Arrow /></ArrowWrapper>,
    renderNextButton: () => <ArrowWrapper next><Arrow /></ArrowWrapper>,
    on: {
      imagesReady: function() {
        const slider = this;
        setTimeout(function() {
          slider.update();
        }, 3600);
      },
    },
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

  const shouldPlay = (inView) => {
    if (isMobile()) {
      return false;
    }

    return inView;
  };

  useEffect(() => {
    (function() {
      var scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: "derriegel.myshopify.com",
          storefrontAccessToken: "9ee14043e29be7c78f89258884d4239b",
        });
        ShopifyBuy.UI.onReady(client).then(function(ui) {
          ui.createComponent("product", {
            id: "4193743143017",
            node: document.getElementById("product-component-1570643405592"),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                    },
                  },
                  "title": {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "normal",
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                  "price": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "compareAt": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "contents": {
                  "img": false,
                  "title": false,
                  "price": false,
                },
                "text": {
                  "button": "Bestellen",
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px",
                    },
                  },
                },
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true,
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "button": "Add to cart",
                },
              },
              "option": {
                "styles": {
                  "label": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "select": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "cart": {
                "styles": {
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "title": "Warenkorb",
                  "total": "Zwischensumme",
                  "empty": "Dein Warenkorb ist leer.",
                  "notice": "",
                  "button": "Zum Warenkorb ",
                },
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#DF9900",
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
              },
            },
          });
          ui.createComponent("product", {
            id: "4186008944745",
            node: document.getElementById("product-component-1570513210386"),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                    },
                  },
                  "title": {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "normal",
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                  "price": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "compareAt": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "contents": {
                  "img": false,
                  "title": false,
                  "price": false,
                },
                "width": "280px",
                "text": {
                  "button": "Bestellen",
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px",
                    },
                  },
                },
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true,
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "button": "Add to cart",
                },
              },
              "option": {
                "styles": {
                  "label": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "select": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "cart": {
                "styles": {
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "title": "Warenkorb",
                  "total": "Zwischensumme",
                  "empty": "Dein Warenkorb ist leer.",
                  "notice": "",
                  "button": "Zum Warenkorb ",
                },
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#DF9900",
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
              },
            },
          });
          ui.createComponent("product", {
            id: "4186006716521",
            node: document.getElementById("product-component-1570513589515"),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                    },
                  },
                  "title": {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "normal",
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                  "price": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "compareAt": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "contents": {
                  "img": false,
                  "title": false,
                  "price": false,
                },
                "width": "280px",
                "text": {
                  "button": "Bestellen",
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px",
                    },
                  },
                },
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true,
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "button": "Add to cart",
                },
              },
              "option": {
                "styles": {
                  "label": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "select": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "cart": {
                "styles": {
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "title": "Warenkorb",
                  "total": "Zwischensumme",
                  "empty": "Dein Warenkorb ist leer.",
                  "notice": "",
                  "button": "Zum Warenkorb ",
                },
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#DF9900",
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
              },
            },
          });
          ui.createComponent("product", {
            id: "4185708855401",
            node: document.getElementById("product-component-1570513744567"),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                    },
                  },
                  "title": {
                    "font-family": "Montserrat, sans-serif",
                    "font-weight": "normal",
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                  "price": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "compareAt": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "contents": {
                  "img": false,
                  "title": false,
                  "price": false,
                },
                "width": "280px",
                "text": {
                  "button": "Bestellen",
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px",
                    },
                  },
                },
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true,
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "button": "Add to cart",
                },
              },
              "option": {
                "styles": {
                  "label": {
                    "font-family": "Montserrat, sans-serif",
                  },
                  "select": {
                    "font-family": "Montserrat, sans-serif",
                  },
                },
                "googleFonts": [
                  "Montserrat",
                ],
              },
              "cart": {
                "styles": {
                  "button": {
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    "background-color": "#DF9900",
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
                "text": {
                  "title": "Warenkorb",
                  "total": "Zwischensumme",
                  "empty": "Dein Warenkorb ist leer.",
                  "notice": "",
                  "button": "Zum Warenkorb ",
                },
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "background-color": "#DF9900",
                    ":hover": {
                      "background-color": "#C98A00",
                    },
                    ":focus": {
                      "background-color": "#C98A00",
                    },
                  },
                },
              },
            },
          });
        });
      }
    })();
  }, []);

  return (
    <Layout {...routeData} className="home">
      <div className="home__hero" id="home">
        <img className="home__hero-img" src="/img/hero_2.jpg" alt="home hero" />
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
                <ModalButton type={MODALS.NATURAL}
                             buttonClassName="home__btn"
                             buttonContent={translations.products.button}>
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__nutrition"
                    source={translations.products.natural.nutrition}
                  />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__ingredients"
                    source={translations.products.natural.ingredients}
                  />
                </ModalButton>
                <div className="home__buy-button" id="product-component-1570643405592" />
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
                <img className="home__products-img-bar" src="/img/products/choco.png" alt="natural bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
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
                <ReactMarkdown
                  escapeHtml={false}
                  className="home__substances"
                  source={translations.products.nut.nut}
                />
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

                <ModalButton type={MODALS.NUT} buttonClassName="home__btn" buttonContent={translations.products.button}>
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__nutrition"
                    source={translations.products.nut.nutrition}
                  />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__ingredients"
                    source={translations.products.nut.ingredients}
                  />
                </ModalButton>

                <div className="home__buy-button" id="product-component-1570513744567" />

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

                <img className="home__products-img-bar" src="/img/products/cocos.png" alt="cocos bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
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

                <ModalButton type={MODALS.COCOS}
                             buttonClassName="home__btn"
                             buttonContent={translations.products.button}>
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__nutrition"
                    source={translations.products.cocos.nutrition}
                  />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__ingredients"
                    source={translations.products.cocos.ingredients}
                  />
                </ModalButton>

                <div className="home__buy-button" id="product-component-1570513589515" />

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

                <img className="home__products-img-bar" src="/img/products/mixed.png" alt="mixed bar image" />
                <img className="home__products-img-packaging" src="/img/packaging.png" alt="packaging image" />
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

                <ModalButton type={MODALS.ACTIVE}
                             buttonClassName="home__btn"
                             buttonContent={translations.products.button}>
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__nutrition"
                    source={translations.products.active.nutrition}
                  />
                  <ReactMarkdown
                    escapeHtml={false}
                    className="home__ingredients"
                    source={translations.products.active.ingredients}
                  />
                </ModalButton>

                <div className="home__buy-button" id="product-component-1570513210386" />

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

      <div className="home__section home__video-section" id="video">
        <InView>
          {({ inView, ref }) => (
            <div ref={ref} className="home__image-video" id="home">
              <ReactPlayer
                ref={player}
                loop
                className="home__video"
                muted={muted}
                url='/video/iron-man.mp4'
                controls={isMobile()}
                playing={shouldPlay(inView)}
                width='100%'
                height='100%'
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
              <ReactMarkdown
                className="home__col-content"
                escapeHtml={false}
                source={translations.contact.text}
              />
              <div className="home__social-wrapper">
                <a className="home__social"
                   href={`mailto:${translations.footer.email}`}>hallo@derriegel.com</a>
                {/*<a className="home__social" href={translations.footer.fb}>*/}
                {/*  <img className="home__social-icons" src="/icons/fb.svg" alt="svg icon facebook" />*/}
                {/*  <span className="home__social-content">@der-riegel</span>*/}
                {/*</a>*/}
                <a className="home__social" href={translations.footer.insta}>
                  <img className="home__social-icons" src="/icons/insta.svg" alt="svg icon insta" />
                  <span className="home__social-content">{translations.instagram.text}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home__col">
            <div><img src="/img/contact-emotion.png" alt="ceos image" /></div>
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
          <a className="home__follow-instagram"
             target="_blank"
             href={translations.footer.insta}>{translations.instagram.button}</a>
        </Button>
      </div>

    </Layout>
  );
}
