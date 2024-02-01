import { useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { makeStyles } from "@material-ui/core";
//
import Sidebar from "./SideBar";
import Header from "./Header";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const useStyles = makeStyles((theme) => ({
  DashboardWrapper: {
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
  },
  sidebar: {
    width: "100%",
    maxWidth: "245px",
    // height: "100vh",
    position: "relative",
    top: 92,
    left: 0,
    borderRight: "2px solid #f3f3f4",
    backgroundImage: `linear-gradient(90deg, rgba(190,189,187,1) 0%, rgba(224,224,228,1) 0%, rgba(198,198,198,1) 100%)`,
     [theme.breakpoints.down("sm")]: {
        top: 70,
    },
  },
  main: {
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    // paddingBottom: theme.spacing(5),
    marginTop: 18,
    position: "relative",
    top: 93,
    left: 0,
    [theme.breakpoints.down("sm")]: {
        top: 70,
    },
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({setIsLoggedIn}) {
  const classes = useStyles();

  return (
    <div className={classes.DashboardWrapper}>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <Outlet />
      </div>
    </div>
  );
}
