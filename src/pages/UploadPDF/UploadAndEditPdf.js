import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  makeStyles,
} from "@material-ui/core";

import WhiteTail from "../../Assets/Images/whiteTail.webp";
import UploadIcon from "../../Assets/Images/uploadIcon.jpg";
import CombinePdf from "../../Assets/Images/combinePdf.png";
import { ReactComponent as CheckmarkShieldIcon } from "../../Assets/Icons/checkmarkShield.svg";
import { ReactComponent as BackArrowIcon } from "../../Assets/Icons/backArrow.svg";
import PdfEditor from "./PdfEditor";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
    overflow: "hidden",
    height: 570,
    textAlign: "center",
    backgroundColor: "#E9FCD4",
    // "& .MuiTypography-h5": {
    //   fontWeight: 700,
    // },
    // "& .icon": {
    //   width: 50,
    //   height: 50,
    // },
  },
  cardContentContainer: {
    position: "absolute",
    top: 30,
    width: "100%",
    height: "100%",
    zIndex: 1,
    padding: 0,
    "& .MuiCard-root": {
      width: "75%",
      maxWidth: "75%",
      height: "100%",
      maxHeight: 570,
      color: "#08660D",
      backgroundColor: "#fff",
      margin: "auto",
      borderRadius: 8,
      "& img": {
        marginTop: 16,
      },
      margin: "auto",
      "& h1": {
        marginBlock: 16,
      },
    },
  },
  uploadContainer: {
    border: "3px dashed #a9a9a9",
    borderRadius: 8,
    height: `calc(100% - 240px)`,
    pointerEvents: "auto",
    width: `calc(100% - 65px)`,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    "& textarea": {
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      boxSizing: "border-box",
      width: "100%",
      margin: "20px 0px",
      fontSize: "16px",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0.47px 3px 10px #7777771A",
      border: "1px solid #EAEAEA",
      borderRadius: "8px",
      outline: "1px solid #9f9d9d",
      resize: "none",
    },
  },
  chooseFileButton: {
    padding: "10px 50px",
    borderRadius: "24px",
    margin: "16px 0 40px",
    backgroundColor: "#4e6a60",
    "&:hover": {
      backgroundColor: "#66877b",
    },
    "& .MuiButton-label": {
      fontSize: 17,
      fontWeight: 700,
      color: "#fff",
    },
  },
  cardFooter: {
    marginTop: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: "24px",
    "& svg": {
      width: 24,
      minWidth: 24,
      height: 24,
      minHeight: 24,
      "& path": {
        fill: "#f00",
      },
    },
    "& span": {
      marginLeft: 4,
      color: "#7f7f7f",
    },
  },
  sectionWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 55,
  },
  sectionContent: {
    textAlign: "left",
    "& ol": {
      paddingLeft: 15,
    },
    "& li": {
      paddingBlock: "24px",
    },
  },
}));

const ACCEPT_TEXT = ".pdf";

const UploadAndEditPdf = () => {
  const classes = useStyles();
  const [fileSelected, seFileSelected] = useState(false);
  const [inputText, setInputText] = useState("");
  const [fileSave, setFileSave] = useState(false);
  const fileInputRef = useRef(null);
  const pdfUrl = "your_pdf_url_here.pdf";

  const handleFileOpen = (e) => {
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    seFileSelected(true);
    // const file = event.target.files[0];
    // console.log("Selected file:", file);
    // const reader = new FileReader();

    // reader.onload = (e) => {
    //   const inputFile = e.target.result;
    //   setInputText(inputFile);
    // };

    // reader.onerror = (e) => alert(e.target.error.name);
    // reader.readAsText(file);
  };

  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <Card className={classes.cardContainer}>
        <div className={classes.cardContentContainer}>
          <Card>
            <BackArrowIcon
              className={classes.backArrowIcon}
              onClick={() => window.location.reload()}
            />
            <img
              src={WhiteTail}
              alt="whitetail"
              loading="lazy"
              width="90px"
              height="auto"
              draggable="false"
            />
            <h1>Edit a PDF</h1>
            {!fileSelected ? (
              <div className={classes.uploadContainer} onClick={handleFileOpen}>
                <input
                  className="file-input"
                  hidden
                  type="file"
                  multiple
                  ref={fileInputRef}
                  accept={`${ACCEPT_TEXT}`}
                  onChange={handleFileSelected}
                />
                <img
                  src={UploadIcon}
                  alt="UploadIcon"
                  loading="lazy"
                  width="150px"
                  height="auto"
                  draggable="false"
                />
                <span>
                  Drag and drop a PDF, then edit your PDF by adding text,
                  comments, and more.
                </span>
                <Button
                  className={classes.chooseFileButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleFileOpen}
                >
                  Select a file
                </Button>
              </div>
            ) : (
              <PdfEditor pdfUrl={pdfUrl} />
            )}
            <div className={classes.cardFooter}>
              <CheckmarkShieldIcon />
              <span>
                Your files will be securely handled by Adobe servers and deleted
                unless you sign in to save them.
              </span>
            </div>
          </Card>
        </div>
      </Card>
      <Container
        maxWidth="lg"
        style={{ margin: "0px auto", padding: "80px 0px 30px" }}
      >
        <div className={classes.sectionWrapper}>
          <div className={classes.sectionContent}>
            <h2>How to edit PDF files online</h2>
            <p>
              Follow these easy steps to edit a PDF online by adding comments:
            </p>
            <Divider />
            <ol>
              <li>
                Choose a PDF to edit by clicking the{" "}
                <strong>Select a file</strong> button above or drag and drop a
                file into the drop zone.
              </li>
              <Divider />
              <li>
                Once Acrobat uploads the file, sign in to add your comments.
              </li>
              <Divider />
              <li>
                Use the toolbar to add text, sticky notes, highlights, drawings
                and more.
              </li>
              <Divider />
              <li>Download your annotated file or get a link to share it.</li>
              <Divider />
            </ol>
          </div>
          <div className={classes.imageSection}>
            <img
              src={CombinePdf}
              alt="CombinePdf"
              loading="lazy"
              width="450px"
              height="auto"
              draggable="false"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UploadAndEditPdf;
