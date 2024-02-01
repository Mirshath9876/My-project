import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, rgb } from "pdf-lib";
import { Button, makeStyles } from "@material-ui/core";
import { ReactComponent as BackArrowIcon } from "../../Assets/Icons/backArrow.svg";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 24,
    "& .MuiButton-root": {
      padding: "10px 50px",
      borderRadius: "24px",
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
  },
  backArrowIcon: {
   position: "absolute",
   top: 30,
   left: "15%",
   cursor: "pointer",
  },
}));

const PdfEditor = ({ pdfUrl }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  async function addSignatureToPdf() {
    try {
      const existingPdfBytes = await fetch(pdfUrl).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Add signature
      firstPage.drawText("Signature", {
        x: 50,
        y: 50,
        size: 30,
        color: rgb(0, 0, 0),
      });

      const modifiedPdfBytes = await pdfDoc.save();
      const modifiedPdfUrl = URL.createObjectURL(
        new Blob([modifiedPdfBytes], { type: "application/pdf" })
      );

      // Now you can do something with the modified PDF URL, like displaying it in a new window or saving it to the server
      console.log("Modified PDF URL:", modifiedPdfUrl);
    } catch (error) {
      console.error("Error adding signature:", error);
    }
  }

  async function loadPdfFile(url) {
    try {
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );
      return existingPdfBytes;
    } catch (error) {
      throw new Error("Failed to load PDF file");
    }
  }

  async function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDocumentLoadError(error) {
    setError(error);
  }

  function nextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div>
      <BackArrowIcon
        className={classes.backArrowIcon}
        onClick={() => window.location.reload()}
      />
      {error && <div>Error loading PDF: {error.message}</div>}
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={handleDocumentLoadError}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className={classes.buttonWrapper}>
        <div style={{ display: "flex", gap: 16 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={previousPage}
          >
            Previous
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={nextPage}
          >
            Next
          </Button>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={addSignatureToPdf}
        >
          Add Signature
        </Button>
      </div>
    </div>
  );
};

export default PdfEditor;
