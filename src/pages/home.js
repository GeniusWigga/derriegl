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
      <div className="home__hero">
        <img className="home__hero-img" src="/img/hero.jpg" alt="home hero" />
        <div className="home__badge-wrapper">
          <Badge className="home__badge" />
        </div>
        <ReactMarkdown escapeHtml={false} className="home__hero-headline" source={translations.headline} />
      </div>
      <div className="home__products">
        <h2 className="home__headline">{translations.header.home}</h2>

        <Swiper {...params}>
          <div>
            <h3 className="home__products-sub-headline">{translations.products.natural.headline}</h3>

            <div className="home__products-intro">
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
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>

      </div>
      <div className="home__ingredients">
        <h2 className="home__headline">{translations.header.ingredients}</h2>

        <div className="home__row">
          <div className="home__col">
            <Swiper {...simpleParams}>
              <div><img src="/img/base-ingredients/all.jpg" alt="all ingredients image" /></div>
              <div><img src="/img/base-ingredients/apricot.jpg" alt="apricot ingredient image" /></div>
              <div><img src="/img/base-ingredients/dates.jpg" alt="dates ingredient image" /></div>
              <div><img src="/img/base-ingredients/dates-alt.jpg" alt="dates alternativ ingredient image" /></div>
            </Swiper>
          </div>
          <div className="home__col">
            <ReactMarkdown
              className="home__col-content"
              escapeHtml={false}
              source={translations.baseingredients.quality}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
