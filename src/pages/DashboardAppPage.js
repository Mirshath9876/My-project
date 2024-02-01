import { Helmet } from "react-helmet-async";
// import { faker } from '@faker-js/faker';
import { useNavigate } from "react-router-dom";
// @mui
import {
  Grid,
  Container,
  Typography,
  Card,
  makeStyles,
} from "@material-ui/core";
import { ReactComponent as PortfolioIcon } from "../Assets/Icons/portfolio.svg";
import { ReactComponent as PDFIcon } from "../Assets/Icons/pdfFile.svg";
import { ReactComponent as DragIcon } from "../Assets/Icons/drag.svg";
import { ReactComponent as MultiSelectIcon } from "../Assets/Icons/multiselect.svg";
import { ReactComponent as ResearchIcon } from "../Assets/Icons/research.svg";
import { ReactComponent as PictureIcon } from "../Assets/Icons/picture.svg";
import { ReactComponent as VideoIcon } from "../Assets/Icons/video.svg";
import { ReactComponent as OtherIcon } from "../Assets/Icons/other.svg";
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    "& .MuiCard-root": {
      height: 200,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      borderRadius: "24px",
      cursor: "pointer",
    },
    "& .MuiTypography-h5": {
      fontWeight: 700,
    },
    "& .icon": {
      width: 50,
      height: 50,
    },
  },
}));

export default function DashboardAppPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  // const handleDalClick = () => {
  //   navigate('/dal', { replace: true });
  // };
  return (
    <>
      <Helmet>
        <title> Dashboard | WhiteTail </title>
      </Helmet>

      <Container className={classes.cardContainer} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#061B64",
                backgroundColor: "#D1E9FC",
              }}
            >
              <PortfolioIcon className="icon" />
              <Typography variant="h5">Portfolio</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              onClick={() => navigate("/updatepdf")}
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#08660D",
                backgroundColor: "#E9FCD4",
              }}
            >
              <PDFIcon className="icon" />
              <Typography variant="h5">Download PDF</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#091A7A",
                backgroundColor: "#D6E4FF",
              }}
            >
              <DragIcon className="icon" />
              <Typography variant="h5">Draggable Comp</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#7A0C2E",
                backgroundColor: "#FFE7D9",
              }}
            >
              <MultiSelectIcon className="icon" />
              <Typography variant="h5">Multi Dropdown</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#5e096d",
                backgroundColor: "#ca90d4",
              }}
            >
              <ResearchIcon className="icon" />
              <Typography variant="h5">Research</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#7A0C2E",
                backgroundColor: "#FFE7D9",
              }}
            >
              <PictureIcon className="icon" />
              <Typography variant="h5">Cards and Images</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#7A4F01",
                backgroundColor: "#FFF7CD",
              }}
            >
              <VideoIcon className="icon" />
              <Typography variant="h5">Cards and Videos</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              style={{
                boxShadow: 0,
                textAlign: "center",
                color: "#061B64",
                backgroundColor: "#D1E9FC",
              }}
            >
              <OtherIcon className="icon" />
              <Typography variant="h5">Others</Typography>
            </Card>
          </Grid>
        </Grid>
        <Typography
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#ADADAD",
            marginTop: "60px",
            fontSize: "12px",
          }}
        >
          &copy; Copyright. All rights reserved.
        </Typography>
      </Container>
    </>
  );
}
