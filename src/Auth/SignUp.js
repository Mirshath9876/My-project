import React, { useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

import { ReactComponent as GoogleIcon } from "../Assets/Icons/google_auth.svg";
import { ReactComponent as FacebookIcon } from "../Assets/Icons/facebook_auth.svg";
import { ReactComponent as InstagramIcon } from "../Assets/Icons/instagram_auth.svg";
import { ReactComponent as LineIcon } from "../Assets/Icons/line_auth.svg";
import { ReactComponent as WarningIcon } from "../Assets/Icons/basic_warning.svg";
import { ReactComponent as EyeIcon } from "../Assets/Icons/eye.svg";
import { ReactComponent as EyeCloseIcon } from "../Assets/Icons/eyeClose.svg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(
  (theme) => ({
    signupWrapper: {
      width: "100%",
      "& h1": {
        fontSize: "2.5rem",
        fontWeight: 600,
        margin: "0 0 20px 0",
      },
      "& p": {
        fontSize: 18,
        fontWeight: 500,
        color: "#b7b7b7",
      },
      "& form": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      },
      "& .button": {
        color: "#fff",
        backgroundColor: "orange",
        padding: "10px 50px",
        fontSize: 16,
        fontWeight: 700,
      },
    },
    textField: {
      "& .MuiInputBase-input": {
        width: "400px",
        padding: "14px",
      },
      "& .MuiFormHelperText-root": {
        fontSize: 15,
        fontWeight: 400,
        width: "100%",
        maxWidth: 400,
        marginLeft: 0,
        lineHeight: "20px",
        display: "flex",
        "& svg": {
          minWidth: 18,
          width: 18,
          minHeight: 18,
          height: 18,
        },
      },
    },
    inputPassword: {
      "& .MuiInputBase-input": {
        width: "342px !important",
      },
    },
    socialIcons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "row",
      gap: 20,
      width: "100%",
      marginBottom: 20,
      cursor: "pointer",
      "& .icons": {
        width: 60,
        height: 60,
        backgroundColor: "#f9f9f9",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "grayscale(1)",
        "& svg": {
          minWidth: 40,
          width: 40,
          minHeight: 40,
          height: 40,
        },
        "& .icon": {
          minWidth: 32,
          width: 32,
          minHeight: 32,
          height: 32,
        },
        "&:hover": {
          filter: "grayscale(0)",
        },
      },
    },
  }),
  { name: "SignUpPage" }
);

const SignUp = ({ onLogin }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
    setNameError("");
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
      return;
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including uppercase, lowercase, number, and symbol"
      );
      return;
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Reset previous errors
    setNameError("");
    setEmailError("");
    setPasswordError("");

    // Name validation
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including uppercase, lowercase, number, and symbol"
      );
      return;
    }

    // If all validations pass, proceed with registration
    // Your registration logic here
    setName("");
    setEmail("");
    setPassword("");
    onLogin();
    navigate("/dashboard/app", { replace: true });
    const existingSignupDataJSON = localStorage.getItem("signupData");
    const existingSignupData = existingSignupDataJSON
      ? JSON.parse(existingSignupDataJSON)
      : [];

    const newSignupData = { name: name, email: email, password: password };
    let allSignupData;
    if (existingSignupData) {
      allSignupData = [...existingSignupData, newSignupData];
    } else {
      allSignupData = [newSignupData];
    }
    localStorage.setItem("signupData", JSON.stringify(allSignupData));
  };

  return (
    <div className={classes.signupWrapper}>
      <h1>Create Account</h1>
      <div className={classes.socialIcons}>
        <a
          href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-620317179%3A1706505081650740&theme=glif"
          target="_blank"
          className="icons"
        >
          <GoogleIcon />
        </a>
        <a href="https://www.facebook.com/" target="_blank" className="icons">
          <FacebookIcon className="icon" />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          className="icons"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.line.com/accounts/login/"
          target="_blank"
          className="icons"
        >
          <LineIcon className="icon" />
        </a>
      </div>
      <p>Or enter your details for registration</p>
      <form>
        <TextField
          id="name"
          variant="outlined"
          autoComplete="off"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChangeName}
          className={classes.textField}
          error={!!nameError}
          helperText={
            nameError && (
              <>
                <WarningIcon
                  style={{ marginRight: "4px", verticalAlign: "middle" }}
                />
                {nameError}
              </>
            )
          }
        />
        <TextField
          id="email"
          variant="outlined"
          autoComplete="off"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          className={classes.textField}
          error={!!emailError}
          helperText={
            emailError && (
              <>
                <WarningIcon
                  style={{ marginRight: "4px", verticalAlign: "middle" }}
                />
                {emailError}
              </>
            )
          }
        />
        <TextField
          id="password"
          variant="outlined"
          autoComplete="off"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
          className={clsx(classes.textField, classes.inputPassword)}
          error={!!passwordError}
          helperText={
            passwordError && (
              <>
                <WarningIcon
                  style={{ marginRight: "4px", verticalAlign: "middle" }}
                />
                <div style={{ textAlign: "left" }}>{passwordError}</div>
              </>
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button className="button" variant="contained" onClick={handleRegister}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
