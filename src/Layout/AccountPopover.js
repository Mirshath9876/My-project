import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Typography,
  MenuItem,
  Avatar,
  Popover,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";

import { ReactComponent as SettingsIcon } from "../Assets/Icons/settings.svg";
import { ReactComponent as LogoutIcon } from "../Assets/Icons/logoutIcon.svg";

// ----------------------------------------------------------------------
const MENU_OPTIONS = [
  {
    label: "Settings",
    icon: <SettingsIcon />,
  },
];

const useStyles = makeStyles((theme) => ({
  userProfile: {
    padding: 0,
    borderRadius: "70px",
    color: "#7f7f7f",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
    "& .MuiCardHeader-root": {
      padding: "0px 8px 0px 0px",
      "& .MuiTypography-body2": {
        color: "#000",
        fontSize: 17,
        fontWeight: 600,
      },
    },
  },
  popoverContainer: {
    padding: "8px 16px",
    marginTop: 12,
    marginLeft: 6,
    width: 180,
    "& .MuiMenuItem-root": {
      borderRadius: 6,
      gap: 8,
      padding: "8px 0px",
    },
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    gap: 8,
    padding: "8px 16px",
    "& span": {
      color: "#000",
      fontSize: 17,
      fontWeight: 600,
    },
  },
}));

const cardHeader = {
  padding: 0,
  "& span": {
    fontSize: 11,
    color: "#5D5D5D",
    textAlign: "left",
  },
};

// ----------------------------------------------------------------------

export default function AccountPopover({ setIsLoggedIn }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const savedSignupData = JSON.parse(localStorage.getItem("signupData"));
  const signUpData = savedSignupData.find((signupData) => signupData);
  const signUpDataName = signUpData?.name;
  const signUpDataEmail = signUpData?.email;
  console.log(signUpDataName, "signUpDataName");
  console.log(signUpDataEmail, "signUpDataEmail");

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
    handleClose();
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div onClick={handleOpen} className={classes.userProfile}>
        <CardHeader sx={cardHeader} avatar={<Avatar />} title={"Mirshath"} />
      </div>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        classes={{
          paper: classes.popoverContainer,
        }}
      >
        <MenuItem className={classes.menuItem}>
          <span>Mirshath</span>
          <span style={{ color: "#7f7f7f" }}>mirshath@gmail.com</span>
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Grid sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.icon}
              {option.label}
            </MenuItem>
          ))}
        </Grid>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          <LogoutIcon />
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
