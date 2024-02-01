import React, { useState } from "react";
import {
  Button,
  TextField,
  makeStyles,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Formik, Form, Field, setFieldError } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

import SignUp from "./SignUp";

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
    LoginWrapper: {
      width: "100%",
      height: "100vh",
      backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(129,126,123,1) 0%, rgba(219,219,217,1) 100%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    LoginContainer: {
      // width: "100%",
      // maxWidth: "1050px",
      height: "100%",
      maxHeight: "580px",
      backgroundColor: "#fff",
      borderRadius: "14px",
      display: "flex",
      flexDirection: "row",
    },
    toggleContainer: {
      width: "100%",
      maxWidth: 388,
      height: "100%",
      maxHeight: 460,
      zIndex: 1,
      padding: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "orange",
      borderRadius: "14px 100px 100px 14px",
      color: "#fff",
      gap: 30,
      position: "absolute",
      transform: "translateX(0px)",
      transition: "all 0.6s ease-in-out",
      "& h1": {
        fontSize: "3rem",
        fontWeight: 900,
        margin: 0,
      },
      "& span": {
        fontSize: 18,
        fontWeight: 400,
      },
    },
    display: {
      display: "none",
    },
    togglePanel: {
      width: "100%",
      maxWidth: 388,
      height: "100%",
      maxHeight: 460,
      zIndex: 1,
      padding: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "orange",
      borderRadius: "100px 14px 14px 100px",
      color: "#fff",
      gap: 30,
      position: "absolute",
      transform: "translateX(100%)",
      transition: "all 0.6s ease-in-out",
      "& h1": {
        fontSize: "3rem",
        fontWeight: 900,
        margin: 0,
      },
      "& span": {
        fontSize: 18,
        fontWeight: 400,
      },
    },
    leftContent: {
      width: "100%",
      padding: "40px",
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
      "& a": {
        fontSize: 18,
        fontWeight: 500,
        color: "#b7b7b7",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      "& form": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        padding: 0,
      },
      "& .button": {
        color: "#fff",
        backgroundColor: "orange",
        padding: "10px 50px",
        fontSize: 16,
        fontWeight: 700,
      },
    },
    signInButton: {
      padding: "10px 50px",
      color: "#fff",
      border: "2px solid #fff",
    },
    rightContent: {
      width: "100%",
      padding: "40px",
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
    tipText: {
      // position: "absolute",
      // top: "50%",
      // left: "50%",
      color: "red",
    },
  }),
  { name: "LoginPage" }
);

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address")
//     .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address")
//     .matches(/(\.com|\.in)$/, "Email must end with '.com' or '.in'")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//       "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//     )
//     .required("Password is required"),
// });

const Login = ({ onLogin }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const savedSignupData = JSON.parse(localStorage.getItem("signupData"));
  console.log(savedSignupData, "savedSignupData");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      // .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Invalid password")
      .required("Password is required"),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (values, { setFieldError, resetForm }) => {
    console.log("Logging in with:", values);
    if (savedSignupData && savedSignupData.length > 0) {
      const matchedSignupData = savedSignupData.find(
        (signupData) =>
          signupData.email === values.email &&
          signupData.password === values.password
      );

      if (matchedSignupData) {
        resetForm();
        onLogin();
        navigate("/dashboard/app", { replace: true });
      } else {
        setFieldError("email", "Incorrect email or password");
        setFieldError("password", "Incorrect email or password");
      }
    } else {
      setFieldError("email", "You aren't created the email in this app");
      setFieldError("password", "You aren't created the password in this app");
    }
  };

  return (
    <div className={classes.LoginWrapper}>
      <div className={classes.LoginContainer}>
        {toggle ? (
          <div className={classes.togglePanel}>
            <h1>Welcome Back!</h1>
            <span>
              Register with your personal details to use all of site features
            </span>
            <Button
              className={classes.signInButton}
              variant="outlined"
              onClick={() => setToggle(!toggle)}
            >
              Sign UP
            </Button>
          </div>
        ) : (
          <div
            className={clsx(classes.toggleContainer, toggle && classes.display)}
          >
            <h1>Welcome Friend!</h1>
            <span>Enter your personal details to use all of site features</span>
            <Button
              className={classes.signInButton}
              variant="outlined"
              onClick={() => setToggle(!toggle)}
            >
              Sign In
            </Button>
          </div>
        )}
        <div className={classes.leftContent}>
          <h1>Sign In</h1>
          <div className={classes.socialIcons}>
            <a
              href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-620317179%3A1706505081650740&theme=glif"
              target="_blank"
              className="icons"
            >
              <GoogleIcon />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="icons"
            >
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
          <p>Or use your email and password</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {(props) => {
              const { values, touched, errors } = props;
              return (
                <Form className={classes.leftContent}>
                  {/* Email Field */}
                  <Field
                    as={TextField}
                    id="email"
                    name="email"
                    className={classes.textField}
                    variant="outlined"
                    autoComplete="off"
                    type="email"
                    placeholder="Email"
                    helperText={
                      touched.email &&
                      errors.email && (
                        <>
                          <WarningIcon
                            style={{
                              marginRight: "4px",
                              verticalAlign: "middle",
                            }}
                          />
                          {touched.email && errors.email}
                        </>
                      )
                    }
                    error={touched.email && Boolean(errors.email)}
                  />

                  {/* Password Field */}
                  <Field
                    as={TextField}
                    id="password"
                    name="password"
                    className={clsx(classes.textField, classes.inputPassword)}
                    variant="outlined"
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    helperText={
                      touched.password &&
                      errors.password && (
                        <>
                          <WarningIcon
                            style={{
                              marginRight: "4px",
                              verticalAlign: "middle",
                            }}
                          />
                          <div>{touched.password && errors.password}</div>
                        </>
                      )
                    }
                    error={touched.password && Boolean(errors.password)}
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

                  <a href="#">Forget your password?</a>

                  {/* Submit Button */}
                  <Button className="button" variant="contained" type="submit">
                    Sign In
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className={classes.rightContent}>
          <SignUp onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
