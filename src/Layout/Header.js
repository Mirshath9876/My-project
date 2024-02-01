import React from "react";
import { useLocation } from "react-router-dom";
// @mui
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import AccountPopover from "./AccountPopover";
import WhiteTail from "../Assets/Images/whiteTail.webp";
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundImage: `linear-gradient(90deg, rgba(190,189,187,1) 0%, rgba(244,244,247,1) 0%, rgba(198,198,198,1) 100%)`,
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
      // width: `calc(100% - ${NAV_WIDTH + 1}px)`,
      width: "100%",
    },
  },
  toolBar: {
    minHeight: HEADER_MOBILE,
    borderBottom: "1px solid #E3E3E3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: HEADER_DESKTOP,
      padding: theme.spacing(0, 5),
    },
  },
}));

const Header = ({setIsLoggedIn}) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <img
          src={WhiteTail}
          alt="whitetail"
          loading="lazy"
          width="150px"
          height="auto"
          draggable="false"
        />
        <AccountPopover setIsLoggedIn={setIsLoggedIn} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
