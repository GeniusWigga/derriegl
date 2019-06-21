import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import Swiper from "react-id-swiper";
import { Navigation } from "swiper/dist/js/swiper.esm";

import { useRouteData } from "react-static";

import Layout from "../containers/Layout";
import Button from "../components/Button/Button";
import Badge from "../components/Icons/Badge";
import Arrow from "../components/Icons/Arrow";
import Oat from "../components/Icons/Oat";
import Apricot from "../components/Icons/Apricot";
import Dates from "../components/Icons/Dates";

import "./home.scss";
import buildClassName from "../helpers/buildClassName";

export default () => {

  const routeData = useRouteData();
  const { translations } = routeData;

  const params = {
    modules: [Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: {
      nextEl: ".home__slider-button--next",
      prevEl: ".home__slider-button--prev",
    },
    renderPrevButton: () => <div className={buildClassName("home__slider-button", { prev: true })}>
      <Arrow />
    </div>,
    renderNextButton: () => <div className={buildClassName("home__slider-button", { next: true })}>
      <Arrow />
    </div>,
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
        <h2 className="home__products-headline">{translations.products.headline}</h2>

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
    </Layout>
  );
}
