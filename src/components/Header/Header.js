import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Grid,
  MenuList,
  createMuiTheme,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import _ from "lodash";

// Do not remove router
import Router from "../Router";

import "./Header.scss";
import buildClassName from "../../helpers/buildClassName";

export const themeOptions = {
  palette: {
    ci: "#df9900",
    white: "#ffffff",
    font: "#1a1a1a",
  },
  overrides: {
    primaryButton: {
      background: "#df9900",
      borderColor: "transparent",
      borderRadius: "30px",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "18px",
      outline: "none",
      padding: "10px 40px",
      textTransform: "uppercase",
    },
  },
};

const theme = createMuiTheme(themeOptions);

const useStyles = makeStyles({
  header: {
    background: theme.palette.white,
    maxWidth: theme.breakpoints.values.lg,
    left: "50%",
    transform: "translateX(-50%)",
  },
  burger: {
    color: theme.palette.font,
    marginLeft: "auto",
  },
  itemWrapper: { display: "inline-block", textTransform: "uppercase", background: "transparent" },
  item: {
    color: theme.palette.font,

    "&:hover": {
      color: theme.palette.ci,
    },
  },
});

export default ({ translations }) => {
  const [open, setOpen] = useState(null);

  const css = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.lg));

  const { header } = translations;

  let hash = "";

  if (window) {
    hash = _.chain(window.location.href)
      .split("#")
      .nth(1)
      .value();
  }

  const close = () => setOpen(null);
  const _open = evt => setOpen(evt.currentTarget);

  const linkItems = [
    { key: "home", _hash: true },
    { key: "ingredients" },
    { key: "about" },
    { key: "buy" },
    { key: "contact" },
    { key: "products", href: "https://derriegel.myshopify.com/collections/all" },
  ];

  return (
    <ScopedCssBaseline>
      <AppBar className={css.header}>
        <Toolbar>
          <Link href="/">
            <img style={{ width: isMobile ? 100 : 150 }} src="/img/logo.png" alt="Der Riegel Logo" />
          </Link>
          {!isMobile && (
            <Grid container direction="row" justify="center">
              <MenuList>
                {_.map(linkItems, ({ key, href, _hash }) => {
                  const active = hash === key || (_hash && !hash);
                  return (
                    <MenuItem key={key} className={css.itemWrapper}>
                      <Link
                        underline="none"
                        className={buildClassName("header__item", null, css.item)}
                        style={{ color: active ? theme.palette.ci : null }}
                        onClick={close}
                        href={href ? href : `/#${key}`}
                      >
                        {header[key]}
                      </Link>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Grid>
          )}

          {isMobile && (
            <Menu
              anchorEl={open}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              open={Boolean(open)}
              onClose={close}
            >
              {_.map(linkItems, ({ key, href, _hash }) => {
                const active = hash === key || (_hash && !hash);
                return (
                  <MenuItem key={key} color="black" selected={active}>
                    <Link
                      underline="none"
                      style={{ color: active && theme.palette.ci }}
                      className={buildClassName("header__item", null, css.item)}
                      onClick={close}
                      href={href ? href : `/#${key}`}
                    >
                      {header[key]}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          )}

          {isMobile && (
            <IconButton
              edge="end"
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={css.burger}
              aria-label="menu"
              onClick={_open}
            >
              <i className="fas fa-bars" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </ScopedCssBaseline>
  );
};
