import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class extends Component {

  componentDidMount() {

      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'derriegel.myshopify.com',
            storefrontAccessToken: '9ee14043e29be7c78f89258884d4239b',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '4182582362217',
              node: document.getElementById('product-component-1570461750308'),
              moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#c98a00"
                      },
                      "background-color": "#df9900",
                      ":focus": {
                        "background-color": "#c98a00"
                      }
                    }
                  },
                  "contents": {
                    "img": false,
                    "title": false,
                    "price": false
                  },
                  "text": {
                    "button": "Bestellen"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#c98a00"
                      },
                      "background-color": "#df9900",
                      ":focus": {
                        "background-color": "#c98a00"
                      }
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "cart": {
                  "styles": {
                    "button": {
                      ":hover": {
                        "background-color": "#c98a00"
                      },
                      "background-color": "#df9900",
                      ":focus": {
                        "background-color": "#c98a00"
                      }
                    }
                  },
                  "text": {
                    "title": "Warenkorb",
                    "total": "Zwischensumme",
                    "empty": "Dein Warenkorb ist leer.",
                    "notice": "",
                    "button": "Zum Warenkorb "
                  }
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "background-color": "#df9900",
                      ":hover": {
                        "background-color": "#c98a00"
                      },
                      ":focus": {
                        "background-color": "#c98a00"
                      }
                    }
                  }
                }
              },
            });
          });
        }
      })();
  }

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
