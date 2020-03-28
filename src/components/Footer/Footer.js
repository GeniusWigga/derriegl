import React from "react";
import { Box, Link, Button, Container, createMuiTheme, Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

import "./Footer.scss";
import ReactMarkdown from "react-markdown/with-html";

import { themeOptions } from "../Header/Header";

const theme = createMuiTheme(themeOptions);

console.log("theme: ", theme);

const useStyles = makeStyles({
  headline: ({ isMobile }) => {
    return {
      margin: isMobile ? "30px 0 20px 0" : "20px 0",
    };
  },
  headlineLink: {
    color: theme.palette.white,
    cursor: "pointer",
    fontSize: 18,
    textTransform: "uppercase",
  },
  link: {
    color: theme.palette.white,
    "&:hover": {
      color: theme.palette.ci,
    },
  },
  md: ({ isMobile }) => ({
    "& h2": {
      margin: isMobile ? "30px 0 20px 0" : "14px 0",
      fontSize: 25,
    },
  }),
});

export default ({ translations }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.md));
  const css = useStyles({ isMobile });

  return (
    <ScopedCssBaseline>
      <Box component="footer" className="footer" style={{ color: theme.palette.white }}>
        <Container>
          <Grid container className="footer__wrapper" spacing={!isMobile ? 6 : 0}>
            <Grid item xs={12} md={4} className="footer__col-wrapper">
              <ReactMarkdown escapeHtml={false} className={css.md} source={translations.footer.headline} />
              <ReactMarkdown escapeHtml={false} source={translations.footer.description} />
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              className="footer__col-wrapper"
              style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "center" }}
            >
              <Box>
                <h3 className={css.headline} style={{ textTransform: "uppercase" }}>
                  {translations.footer.contact}
                </h3>
                <Link underline="none" className={css.link} href={`mailto:${translations.footer.email}`}>
                  {translations.footer.email}
                </Link>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              className="footer__col-wrapper"
              style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "center" }}
            >
              <Box>
                <h3 className={css.headline}>
                  <Link underline="none" className={css.headlineLink} to="/imprint">
                    {translations.footer.imprint}
                  </Link>
                </h3>
                <ReactMarkdown escapeHtml={false} source={translations.footer.address} />
                <h3 className={css.headline}>
                  <Link underline="none" className={css.headlineLink} to="/privacy">
                    {translations.footer.privacy}
                  </Link>
                </h3>
              </Box>
            </Grid>
          </Grid>

          <Grid container className="footer_social-contact-wrapper" spacing={6}>
            <Grid
              item
              xs={12}
              md={4}
              className="footer__social-buttons"
              style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}
            >
              <Link style={{ width: 40 }} className="footer_social" href={translations.footer.insta}>
                <img src="/icons/insta.svg" alt="svg icon insta" />
              </Link>
            </Grid>
            <Grid item xs={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <Button className="footer__button" style={theme.overrides.primaryButton}>
                  <Link
                    underline="none"
                    style={{ color: theme.palette.white }}
                    className="footer__contact-btn"
                    href={`mailto:${translations.footer.email}`}
                  >
                    {translations.footer.calltoaction}
                  </Link>
                </Button>
              </Box>
            </Grid>
            {!isMobile && <Grid item xs={12} md={4} />}
          </Grid>
        </Container>
      </Box>
    </ScopedCssBaseline>
  );
};
