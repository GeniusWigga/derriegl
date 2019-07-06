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
  $("a[href*=\"#\"]")
  // Remove links that don't actually link to anything
    .not("[href=\"#\"]")
    .not("[href=\"#0\"]")
    .click(function(event) {
      let target = $(this.hash);
      console.log("target: ", target.offset().top);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top - 100,
        }, 1000);
        return false;
      }
    });
}