import _ from "lodash";
import $ from "jquery";

export function injectScripts(cb) {
  if (window) {
    if (_.isFunction(cb)) {
      return cb(window);
    }

    if (_.isArray(cb)) {
      return _.forEach(cb, cbFn => cbFn(window));
    }

    return cb(window);
  }
}

export function smoothScroll() {
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      let target = $(this.hash);
      console.log("target: ", target.offset().top);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 100,
          },
          1000,
        );
        return false;
      }
    });
}

export function src(path) {
  return {
    large: {
      img: {
        srcSet: `${path}-600px.png 600w,
                  ${path}-1000px.png 1000w,
                  ${path}-1900px.png 1900w`,
        src: `${path}-1900px.png`,
      },
      source: `${path}-600px.webp 600w,
                  ${path}-1000px.webp 1000w,
                  ${path}-1900px.webp 1900w`,
    },
    medium: {
      img: {
        srcSet: `${path}-600px.png 600w,
                  ${path}-1000px.png 1000w`,
        src: `${path}-1000px.png`,
      },
      source: `${path}-600px.webp 600w,
                  ${path}-1000px.webp 1000w`,
    },
    small: {
      img: {
        srcSet: `${path}-600px.png 600w`,
        src: `${path}-600px.png`,
      },
      source: `${path}-600px.webp`,
    },
  };
}
